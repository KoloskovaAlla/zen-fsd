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
  langs: Language[];
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

export interface Column {
  links: Link[];
  name: string;
  title: Title;
};

export interface ColumnsState {
  getLists?: Function;
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
  getInfo?: Function;
  isLoading: boolean;
  info: null | Info;
  errorMessage: string;
};

export interface Link {
  name: string;
  url: string;
};

export interface SectionBase {
  name: string;
  title: Title;
  texts: string[];
  links?: Link[];
  image: Image;
}

export interface Download extends SectionBase { };

export interface Warranty extends SectionBase { };

export interface Care extends SectionBase { };

export interface Cashback {
  name: string;
  title: Title;
  texts: string[];
  buttonText: string;
};

export interface HomePage {
  download: Download;
  warranty: Warranty;
  care: Care;
  cashback: Cashback;
};

export interface HomePageState {
  fetchHomePageData?: Function;
  isLoading: boolean,
  homePageData: null | HomePage,
  errorMessage: string,
};

export interface Client {
  alternate: string;
  source: string;
};
export interface ClientsState {
  fetchClientsData?: Function;
  isLoading: boolean;
  clientsData: null | Client[];
  errorMessage: string;
};

export interface PostsData {
  buttonText: string;
  title: Title;
  care: Care;
  cashback: Cashback;
  clients: Client[];
  warranty: Warranty;
};

export interface PostsState {
  etchPostsData?: Function;
  isLoading: boolean,
  postsData: null | PostsData,
  errorMessage: string,
};

export interface ModalData {

};

export interface OrderState {
  isModalActive: boolean;
  isLoading: boolean;
  orderData: null | ModalData;
  errorMessage: string;
};


export interface PostsData {
  buttonText: string;
  title: Title;
  care: Care;
  cashback: Cashback;
  clients: Client[];
  warranty: Warranty;
};

export interface PostsState {
  etchPostsData?: Function;
  isLoading: boolean,
  postsData: null | PostsData,
  errorMessage: string,
};

export interface PreviewDetails {
  x: string,
  y: string,
  width: string,
  height: string,
  description: string,
  id: number,
};

export interface PreviewState {
  previewDetails: null | PreviewDetails,
};
export interface Slide {
  alternate: string;
  id: number;
  source: string;
};

export interface SliderState {
  slides: Slide[];
  sliderDescription: null | string;
  setSlides?: any;
};

export interface ThemeState {
  theme: string;
};

export interface CurrentPageState {
  currentPage: string;
};

export interface CashbackState {
  isCashbackLoading: boolean;
  cashback: null | Cashback;
  cashbackErrorMessage: string;
};

export interface CashbackState {
  isCashbackLoading: boolean;
  cashback: null | Cashback;
  cashbackErrorMessage: string;
};

export interface CashbackData {
  getCashback: Function;
  cashbackState: CashbackState;
};
