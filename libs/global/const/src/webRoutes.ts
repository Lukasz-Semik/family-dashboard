export const webRoutes = {
  auth: {
    signInRoute: {
      path: '/',
    },
    signUpRoute: {
      path: '/sing-up',
    },
    confirmInvitedUserRoute: {
      path: '/confirm-invited-user/:token',
      build: (token: string) => `/confirm-invited-user/${token}`,
    },
  },
  dashboard: {
    dashboardRoute: {
      path: '/dashboard',
    },
    organizationRoute: {
      path: '/dashboard/organization',
    },
    financeRoute: {
      path: '/dashboard/finance',
    },
    familyRoute: {
      path: '/dashboard/family',
    },
    accountRoute: {
      path: '/dashboard/account',
    },
    notificationsRoute: {
      path: '/dashboard/notifications',
    },
    familySettings: {
      familySettingsRoute: {
        path: '/dashboard/settings',
      },
      familySettingsCreateUserRoute: {
        path: '/dashboard/settings/create-user',
      },
    },
  },
};
