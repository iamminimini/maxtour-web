import styled, { css } from 'styled-components';

export const TitleBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      & .white {
        color: ${colors['palette-white']};
        span {
          color: ${colors['palette-mint-600']};
        }
      }
      &. gray {
        color: ${colors['palette-bluegray-200']};
      }
    `;
  }}
`;

export const Discription = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      & .gray {
        color: ${colors['palette-bluegray-200']};
      }
    `;
  }}
`;

export const ImageBox = styled.div`
  position: relative;
`;

export const CardText = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      padding: 73px 48px;
      & .white {
        color: ${colors['palette-white']};
      }
    `;
  }}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 300px;
      position: absolute;
      bottom: 40px;
      left: 32px;
      & .button {
        color: ${colors['palette-white']};
        svg {
          color: ${colors['palette-white']};
        }
      }
    `;
  }}
`;

export const CropBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 0;
      height: 0;
      border-bottom: 72px solid transparent;
      border-left: 72px solid ${colors['palette-white']};
      position: absolute;
      display: none;
    `;
  }}
`;

export const CardBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardItem = styled.div<{ 'data-src': string }>(
  ({ theme: { colors }, ...props }) => {
    return {
      width: 'calc(100% - 24px)',
      height: 580,
      display: 'flex',
      justifyContent: 'space-between',
      background: colors['palette-white'],
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${props['data-src']})`,
      backgroundSize: 'cover',
      cursor: 'pointer',
      '& > p': {
        color: colors['palette-bluegray-700'],
      },
      '&:hover': {
        backgroundSize: '110%',
        '.cardCropBox': {
          display: 'block',
        },
        '.button': {
          background: colors['palette-white'],
          color: colors['palette-gray-900'],
          borderColor: colors['palette-bluegray-400'],
          '& svg': {
            color: colors['palette-gray-900'],
          },
        },
      },
      position: 'relative',
    };
  }
);
