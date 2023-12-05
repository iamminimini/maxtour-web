// styled-component
import styled, { css } from 'styled-components';
// ant design

const TitleStyle = styled.h1`
  ${({ theme, color, type, align }: any) => {
    const { colors, media } = theme;

    return css`
      color: ${colors[color] || colors['palette-gray-900']};
      line-height: 1.3;
      font-weight: 600;
      letter-spacing: 0;
      text-align: ${align || 'left'};
      font-weight: 600;
      ${handleTitleType(type)}

      ${media.mobile} {
        ${handleTitleMobileType(type)}
      }
    `;
  }}
`;

const handleTitleType = (type: string) => {
  switch (type) {
    case 'font-title-xl':
      return css`
        font-size: 48px;
      `;
    case 'font-title-l':
      return css`
        font-size: 32px;
      `;
    case 'font-title-m':
      return css`
        font-size: 24px;
      `;
    case 'font-title-s':
      return css`
        font-size: 20px;
      `;
    case 'font-title-xs':
      return css`
        font-size: 18px;
      `;
    default:
      break;
  }
};

const handleTitleMobileType = (type: string) => {
  switch (type) {
    case 'font-title-xl':
      return css`
        font-size: 32px;
      `;
    case 'font-title-l':
      return css`
        font-size: 28px;
      `;
    case 'font-title-m':
      return css`
        font-size: 28px;
      `;
    case 'font-title-s':
      return css`
        font-size: 18px;
      `;
    case 'font-title-xs':
      return css`
        font-size: 16px;
      `;
    default:
      break;
  }
};

/**
 * @deprecated
 * 사이즈 별 Title 컴포넌트는 사용하지 않는 방향으로
 */
const commonStyle = css`
  ${({ theme, color, align }: any) => {
    const { colors } = theme;
    return css`
      color: ${colors[color] || colors['palette-gray-900']};
      line-height: 1.3;
      font-weight: 600;
      letter-spacing: 0;
      text-align: ${align || 'left'};
    `;
  }}
`;

const TitleXL = styled.h1`
  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${commonStyle};
      font-size: 48px;

      ${media.mobile} {
        font-size: 32px;
      }
    `;
  }}
`;

const TitleL = styled.h2`
  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${commonStyle};
      font-size: 32px;

      ${media.mobile} {
        font-size: 34px;
      }
    `;
  }}
`;

const TitleM = styled.h3`
  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${commonStyle};
      font-size: 24px;

      ${media.mobile} {
        font-size: 20px;
      }
    `;
  }}
`;

const TitleS = styled.h4`
  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${commonStyle};
      font-size: 20px;

      ${media.mobile} {
        font-size: 18px;
      }
    `;
  }}
`;

const TitleXS = styled.h5`
  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${commonStyle};
      font-size: 18px;

      ${media.mobile} {
        font-size: 16px;
      }
    `;
  }}
`;
export { TitleStyle, TitleXL, TitleL, TitleM, TitleS, TitleXS };
