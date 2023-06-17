export interface Image {
  alternate: string;
  source: string;
};

export interface Content {
  text: string;
  image: Image;
  email: string;
};

export interface Developer {
  content: Content;
  url: string;
};

export interface Developer {
  content: Content;
  url: string;
};

export interface DeveloperProps {
 developer: Developer;
};