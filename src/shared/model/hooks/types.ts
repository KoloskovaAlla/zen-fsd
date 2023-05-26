export interface NavItem {
  target: string;
  text: string;
}

export interface NavState {
  getNav: () => void,
  isLoading: boolean,
  navItems: NavItem[],
  errorMessage: string,
}

export interface Language {
  text: string;
  value: string;
}

export interface LangState {
  // getLang: object,
  isLoading: boolean,
  languages: Language[],
  errorMessage: string,
  setLang: object,
  lang: string
}
