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

export interface Language {
  text: string;
  value: string;
}

export interface LangState {
  getData: object,
  isLoading: boolean,
  languages: Language[],
  errorMessage: string,
  setLang: object,
  lang: string
}
