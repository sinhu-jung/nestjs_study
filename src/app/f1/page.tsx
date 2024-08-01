import Link from 'next/link';
import * as React from 'react';

export interface IAppProps {}

export default function F1(props: IAppProps) {
  return (
    <>
      <h1>F1 page</h1>
      <div>
        <Link href="/f1/f2">F2</Link>
      </div>
    </>
  );
}
