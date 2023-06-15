export interface NavItem {
  target: string;
  text: string;
};

export interface NavState {
  getNav?: Function;
  isLoading: boolean;
  navItems: NavItem[] | null;
  errorMessage: string;
  setIsNavActive?: object;
  isNavActive: boolean;
};

export interface Language {
  text: string;
  value: string;
};

export interface LangState {
  getLang?: Function;
  isLoading: boolean;
  languages: Language[];
  errorMessage: string;
  setLang?: object;
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

export interface List {
  links: Link[];
  name: string;
  title: Title;
};

export interface ListsState {
  getLists?: Function;
  isLoading: boolean;
  lists: List[];
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
  getInfo?: Function;
  isLoading: boolean;
  info: null | Info;
  errorMessage: string;
};

export interface Link {
  name: string;
  url: string;
};

export interface Download {
  image: Image;
  links: Link[];
  texts: string[];
  title: Title;
};

export interface Warranty {
  image: Image;
  name: string;
  texts: string[];
  title: Title;
};

export interface Care {
  image: Image;
  name: string;
  texts: string[];
  title: Title;
};

export interface Cashback {
  buttonText: string;
  name: string;
  texts: string[];
  title: Title;
};

export interface HomePage {
  download: Download;
  warranty: Warranty;
  care: Care;
  cashback: Cashback;
};

export interface HomePageState {
  isLoading: boolean,
  homePageData: null | HomePage,
  errorMessage: string,
};