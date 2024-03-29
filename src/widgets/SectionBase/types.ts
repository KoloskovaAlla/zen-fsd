export interface Title {
  content: string;
  priority: number;
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
  links?: [] | Link[];
  image: Image;
};

export interface SectionBaseProps {
  data: Data;
  type: string;
  reverse?: boolean;
};
