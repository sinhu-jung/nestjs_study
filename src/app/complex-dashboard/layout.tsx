import * as React from 'react';

export interface IAppProps {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}

export default function DashboardLayout(props: IAppProps) {
  const isLoggedIn = false;

  return isLoggedIn ? (
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
  ) : (
    props.login
  );
}
