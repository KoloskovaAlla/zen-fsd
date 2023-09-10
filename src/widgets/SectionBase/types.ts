export interface Title {
  content: string;
};

export interface Link {
  url: string;
  name: string;
};

export interface Image {
  alternate: string;
  id: number;
  source: string;
};

export interface Data {
  title: Title;
  texts: string[];
  links: Object;
  image: Image;
};

export interface SectionBaseProps {
  data: Data;
  type: string;
  reverse: boolean;
};
