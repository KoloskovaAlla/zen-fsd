declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

type DivClickEvent = 
  React.MouseEvent<HTMLDivElement, MouseEvent> | 
  React.TouchEvent<HTMLDivElement>;
