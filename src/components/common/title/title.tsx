import React from 'react';
import { TitleStyle } from './titleStyle';
import { titlePropsType } from './titleType';

function Title({
  children,
  innerHtml,
  tag,
  _onClick,
  ...props
}: titlePropsType) {
  return innerHtml ? (
    <TitleStyle
      as={tag}
      {...props}
      dangerouslySetInnerHTML={{ __html: String(children) }}
    />
  ) : (
    <TitleStyle as={tag} {...props}>
      {children}
    </TitleStyle>
  );
}

export default Title;
