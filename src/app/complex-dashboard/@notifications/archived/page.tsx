import Card from '@/components/card';
import Link from 'next/link';
import * as React from 'react';

export interface IAppProps {}

export default function ArchivedNotifications(props: IAppProps) {
  return (
    <Card>
      <div>ArchivedNotifications</div>
      <Link href={'/complex-dashboard'}>Default</Link>
    </Card>
  );
}
