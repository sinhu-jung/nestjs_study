import Link from 'next/link'
import * as React from 'react'

export interface IAppProps {}

export default function Home(props: IAppProps) {
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href={'/blog'}>Blog</Link>
      <Link href={'/products'}>Products</Link>
    </>
  )
}
