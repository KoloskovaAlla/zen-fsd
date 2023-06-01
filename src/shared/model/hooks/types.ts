export interface NavItem {
  target: string;
  text: string;
}

export interface NavState {
  getNav: Function
  isLoading: boolean,
  navItems: NavItem[],
  errorMessage: string,
  setIsNavActive: object,
  isNavActive: boolean,
}

export interface Language {
  text: string;
  value: string;
}

export interface LangState {
  getLang: Function,
  isLoading: boolean,
  languages: Language[],
  errorMessage: string,
  setLang: object,
  lang: string
}
