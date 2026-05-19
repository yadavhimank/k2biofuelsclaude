type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();
let reqCount = 0;

/**
 * Returns true if the request is allowed, false if it should be blocked.
 * key      — unique identifier (e.g. "contact:1.2.3.4")
 * maxReqs  — max allowed within the window
 * windowMs — window duration in milliseconds
 */
export function checkRateLimit(key: string, maxReqs: number, windowMs: number): boolean {
  const now = Date.now();

  // Lazy cleanup every 200 calls to prevent unbounded memory growth
  if (++reqCount % 200 === 0) {
    for (const [k, e] of store.entries()) {
      if (e.resetAt < now) store.delete(k);
    }
  }

  const entry = store.get(key);

  if (!entry || entry.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= maxReqs) return false;

  entry.count++;
  return true;
}
