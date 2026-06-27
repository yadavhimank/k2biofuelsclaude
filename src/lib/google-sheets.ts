import 'server-only';
import { google } from 'googleapis';

function createAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error('Google service account credentials are not configured');
  }

  // .env files escape newlines as \n — unescape them back
  const key = rawKey.replace(/\\n/g, '\n');

  return new google.auth.JWT({
    email,
    key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

/**
 * Appends a single row to the named sheet in the configured spreadsheet.
 * The sheet must already exist in the spreadsheet.
 */
export async function appendRow(sheetName: string, values: string[]): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  if (!spreadsheetId) throw new Error('GOOGLE_SPREADSHEET_ID is not configured');

  const sheets = google.sheets({ version: 'v4', auth: createAuth() });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [values] },
  });
}
