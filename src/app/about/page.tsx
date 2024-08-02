import { cookies } from 'next/headers';

export default function AboutPage() {
  const cokieStore = cookies();
  const theme = cokieStore.get('theme');

  console.log(theme);
  console.log('About Server Component');

  return <h1>About Page</h1>;
}
