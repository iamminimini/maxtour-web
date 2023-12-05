import { MouseEvent } from 'react';

type titlePropsType = {
  level?: number;
  children: React.ReactNode;
  color?: string;
  type?: string;
  id?: string;
  innerHtml?: boolean;
  className?: string;
  tag?: string;
  align?: string;
  _onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
};

export type { titlePropsType };
