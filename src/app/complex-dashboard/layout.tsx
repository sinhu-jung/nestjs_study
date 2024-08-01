import * as React from 'react';

export interface IAppProps {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}

export default function DashboardLayout(props: IAppProps) {
  return (
    <div>
      <div>{props.children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{props.users}</div>
          <div>{props.revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{props.notifications}</div>
      </div>
    </div>
  );
}
