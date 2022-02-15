export enum MobileRoute {
  SignIn = 'SignIn',
  Menu = 'Menu',
  Dashboard = 'Dashboard',
  Shop = 'Shop',
}

export type MobileStackParamList = {
  [MobileRoute.SignIn]: undefined;
  [MobileRoute.Menu]: undefined;
  [MobileRoute.Dashboard]: undefined;
  [MobileRoute.Shop]: undefined;
};
