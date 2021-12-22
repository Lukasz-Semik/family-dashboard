export const fdRoutes = {
  auth: {
    signInRoute: () => '/',
    signUpRoute: () => '/sing-up',
  },
  dashboard: {
    dashboardRoute: () => '/dashboard',
    organizationRoute: () => '/dashboard/organization',
    financeRoute: () => '/dashboard/finance',
    familyRoute: () => '/dashboard/family',
    accountRoute: () => '/dashboard/account',
    notificationsRoute: () => '/dashboard/notifications',
    familySettings: {
      familySettingsRoute: () => '/dashboard/settings',
      familySettingsCreateUserRoute: () => '/dashboard/settings/create-user',
    },
  },
};
