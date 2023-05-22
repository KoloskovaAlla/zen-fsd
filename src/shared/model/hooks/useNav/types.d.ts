export interface MenuItem {
  target: string;
  text: string;
}

export interface NavState {
  getData: object,
  isLoading: boolean,
  navData: Array<MenuItem>,
  errorMessage: string,
}
