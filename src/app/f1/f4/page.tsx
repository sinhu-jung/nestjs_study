import Link from 'next/link';
import * as React from 'react';

export interface IAppProps {}

export default function F4(props: IAppProps) {
  return (
    <>
      <h1>F4 page</h1>
      <div>
        <Link href="/f1/f3">F3</Link>
        <Link href="/about">About</Link>
      </div>
    </>
  );
}
