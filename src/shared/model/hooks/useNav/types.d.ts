export interface NavItem {
  target: string;
  text: string;
}

export interface NavState {
  getData: object,
  isLoading: boolean,
  navItems: NavItem[],
  errorMessage: string,
}
