'use client';

import { Provider as ReduxProvider } from 'react-redux';

import { store } from 'src/api/store';
import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <ReduxProvider store={store}>
      <AuthGuard>
        <DashboardLayout>{children}</DashboardLayout>
      </AuthGuard>
    </ReduxProvider>
  );
}
