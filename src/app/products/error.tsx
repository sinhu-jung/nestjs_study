'use client';
import * as React from 'react';

export interface IAppProps {
  error: Error;
  reset: () => void;
}

export default function ErrorBoundary(props: IAppProps) {
  return (
    <div>
      {props.error.message} <button onClick={props.reset}>Try again</button>
    </div>
  );
}
