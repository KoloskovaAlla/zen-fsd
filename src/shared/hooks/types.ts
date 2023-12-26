export interface NavItem {
  target: string;
  text: string;
};

export interface NavState {
  getNav: Function;
  isLoading: boolean;
  navItems: NavItem[];
  errorMessage: string;
  setIsNavActive: Function;
  isNavActive: boolean;
};

export interface Language {
  content: string;
  value: string;
};

export interface LangState {
  getLangs: Function;
  isLoading: boolean;
  langs: Language[];
  errorMessage: string;
  setLang: Function;
  lang: string;
};

export interface Image {
  alternate: string;
  id: number;
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

export interface Logo {
  alternate: string;
  source: string;
};

export interface Clients {
  logos: Logo[];
  title: Title;
  texts: string[];
};

export interface ClientsState {
  getClients: Function;
  isLoading: boolean;
  clients: Clients;
  errorMessage: string;
};

export interface Link {
  name: string;
  url: string;
};

export interface SectionBase {
  name?: string;
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
  fetchHomePageData: Function;
  isLoading: boolean,
  homePageData: null | HomePage,
  errorMessage: string,
};

export interface WarrantyPost {
  name: string;
  title: string;
  links?: Link[];
  image: Image;
  article: string[];
}

export interface CarePost {
  name: string;
  title: string;
  links?: Link[];
  image: Image;
  article: string[];
}

export interface ClientsPost {
  name: string;
  title: string;
  links?: Link[];
  image: Image;
  article: string[];
}

export interface CashbackPost {
  name: string;
  title: string;
  links?: Link[];
  image: Image;
  article: string[];
}

export interface Posts {
  care: CarePost;
  cashback: CashbackPost;
  clients: ClientsPost;
  warranty: WarrantyPost;
}

export interface PostsSection {
  posts: Posts;
  buttonText: string;
  title: Title;
};

export interface PostsState {
  getPosts: Function,
  isLoading: boolean,
  postsSection: PostsSection,
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
  setPreviewDetails: Function;
};

export interface Slide {
  alternate: string;
  id: number;
  source: string;
};

export interface SliderState {
  slides: Slide[];
  setSlides: any;
  sliderDescription: null | string;
};

export interface ThemeState {
  theme: string;
  setTheme: object;
  toggleTheme: any;
};

export interface CurrentPageState {
  currentPage: string;
  setCurrentPage: object;
};

export interface InputName {
  type: string;
  placeholder: string;
  isValidName: boolean;
  invalidMessage: string;
  options: null;
};

export interface InputTel {
  type: string;
  label: string;
  placeholder: string;
  isValidTel: boolean;
  invalidMessage: string;
  options: null;
};

export interface InputEmail {
  type: string;
  placeholder: string;
  isValidEmail: boolean;
  invalidMessage: string;
  options: null;
};

export interface Connect {

};

export interface Option {
  value: string;
  content: string;
};

export interface Connection {
  className: string
  label: string
  options: Option[];
  isValid: boolean
  invalidMessage: string
  value: string
  onFieldChange: any
  connection: string;
};

export interface InputPolicy {
  content: string,
  type: string,
  url: string,
};

export interface OrderData {
  title: Title;
  inputName: InputName;
  inputTel: InputTel;
  inputEmail: InputEmail;
  connect: Connect;
  connection: Connection;
  inputPolicy: InputPolicy;
};

export interface OrderActions {
  setName: Function;
  setIsValidName: Function;
  setTel: Function;
  setIsValidTel: Function;
  setEmail: Function;
  setIsValidEmail: Function;
  setConnection: Function;
  setIsValidConnection: Function;
  setIsChecked: Function;
  setIsDataSent: Function;
  sendOrder?: any;
  setIsModalActive: Function;
  getOrder: Function;
};

export interface OrderState {
  name: string;
  isValidName: boolean;
  tel: string;
  isValidTel: boolean;
  email: string;
  isValidEmail: boolean;
  connection: string;
  isValidConnection: boolean;
  isChecked: boolean;
  isSubmitDisabled: boolean;
  isSending: boolean;
  errorMessage: string;
  isOrderSended: boolean;
  isDataSent: boolean;
  isModalActive: boolean;
  isLoading: boolean;
  orderData: OrderData;
  orderActions: OrderActions;

};

export interface CashbackState {
  getCashback: Function;
  isCashbackLoading: boolean;
  cashback: null | Cashback;
  cashbackErrorMessage: string;
  setIsModalActive: Function;
};

export interface PageSection {

};

export interface Image {
  alternate: string;
  id: number;
  source: string;
}

export interface sectionData {
  title: Title;
  texts: string[];
  image: Image;
}

export interface CashbackPage {
  intro: sectionData;
  core: sectionData;
  final: sectionData;
}

export interface CashbackPageState {
  isCashbackPageLoading: boolean;
  cashbackPage: null | CashbackPage;
  cashbackPageErrorMessage: string;
  getCashbackPage: Function;
}

export interface CarePage {
  intro: sectionData;
  core: sectionData;
  final: sectionData;
}

export interface CarePageState {
  isCarePageLoading: boolean;
  carePage: null | CarePage;
  carePageErrorMessage: string;
  getCarePage: Function;
}

export interface WarrantyPage {
  intro: sectionData;
  core: sectionData;
  final: sectionData;
}

export interface WarrantyPageState {
  isWarrantyPageLoading: boolean;
  warrantyPage: null | WarrantyPage;
  warrantyPageErrorMessage: string;
  getWarrantyPage: Function;
}

export interface Media {
  type: string;
  src: string;
  alternate: string;
};

export interface Post {
  title: string;
  texts: string[];
  media: Media;
  key?: string;
};

export interface PostState {
  isPostLoading: boolean;
  post: null | Post;
  postErrorMessage: string;
  getPost: Function;
  resetPostErrorMessage: Function;
};

export type PostsPage = {
  care: Care;
  cashback: Cashback;
  warranty: Warranty;
};

export interface postsPageState {
  postsPage: PostsPage;
  getPostsPage: Function;
};

export interface DownloadPage {
  intro: sectionData;
  core: sectionData;
  final: sectionData;
};

export interface DownloadPageState {
  isDownloadPageLoading: boolean;
  downloadPage: null | DownloadPage;
  downloadPageErrorMessage: string;
  getDownloadPage: Function;
};

export interface ClientsPage {
  title: Title;
  texts: string[];
  logos: Logo[];
};

export interface ClientsPageState {
  isClientsPageLoading: boolean;
  clientsPage: null | ClientsPage;
  clientsPageErrorMessage: string;
  getClientsPage: Function;
};
