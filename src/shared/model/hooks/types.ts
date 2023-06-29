export interface NavItem {
  target: string;
  text: string;
};

export interface NavState {
  getNav: Function;
  isLoading: boolean;
  navItems: NavItem[];
  errorMessage: string;
  setIsNavActive: object;
  isNavActive: boolean;
};

export interface Language {
  text: string;
  value: string;
};

export interface LangState {
  getLang: Function;
  isLoading: boolean;
  languages: Language[];
  errorMessage: string;
  setLang: object;
  lang: string;
};

export interface Image {
  alternate: string;
  source: string;
};

export interface Content {
  text: string;
  image: Image;
  email: string;
};

export interface Link {
  content: Content;
  type: string;
  url: string;
};

export interface Title {
  content: string;
  priority: number;
};

export interface Column {
  links: Link[];
  name: string;
  title: Title;
};

export interface ColumnsState {
  getColumns: Function;
  isLoading: boolean;
  columns: Column[];
  errorMessage: string;
};

export interface Developer {
  content: Content;
  url: string;
};

export interface Info {
  developer: Developer;
  texts: string[];
};

export interface InfoState {
  getInfo: Function;
  isLoading: boolean;
  info: Info;
  errorMessage: string;
};

export interface Client {
  alternate: string;
  source: string;
};

export interface Clients {
  darkThemeClients: Client[];
  lighThemeClinets: Client[];
  name: string;
};

export interface ClientsState {
  fetchClientsData: Function;
  isLoading: boolean;
  clientsData: Clients;
  errorMessage: string;
};

export interface SectionBase {
  name: string;
  title: Title;
  texts: string[];
  links?: Link[];
  image: Image;
}

export interface Download extends SectionBase{};

export interface Warranty extends SectionBase{};

export interface Care extends SectionBase{};

export interface Cashback {
  name: string;
  title: Title;
  texts: string[];
  buttonText: string;
};

export interface HomePageData {
  download: Download;
  warranty: Warranty;
  care: Care;
  cashback: Cashback;
};

export interface HomePageState {
  fetchHomePageData: Function;
  isLoading: boolean,
  homePageData: null | HomePageData,
  errorMessage: string,
};
