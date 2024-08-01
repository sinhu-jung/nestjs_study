import Card from '@/components/card';
import Link from 'next/link';
import * as React from 'react';

export interface IAppProps {}

export default function DefaultNotifications(props: IAppProps) {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}
