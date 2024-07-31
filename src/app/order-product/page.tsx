'use client';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export interface IAppProps {}

export default function OrderProduct(props: IAppProps) {
  const router = useRouter();
  const handleClick = () => {
    console.log('Placing your order');
    router.push('/');
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
