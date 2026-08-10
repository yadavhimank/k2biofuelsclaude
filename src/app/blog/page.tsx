import { redirect } from 'next/navigation';

/** Legacy index retained for existing links; editorial content now lives in Newsroom. */
export default function BlogPage() {
  redirect('/newsroom');
}
