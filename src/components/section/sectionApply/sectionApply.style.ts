import styled, { css } from 'styled-components';

export const TitleBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      & .white {
        color: #fff;
        span {
          color: #0fcbdd;
        }
      }
      &. gray {
        color: #c8d0d9;
      }
    `;
  }}
`;

export const Discription = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      & .gray {
        color: #c8d0d9;
      }
    `;
  }}
`;

export const ImageBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      position: relative;
    `;
  }}
`;

export const CardText = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      padding: 73px 48px;
      & .white {
        color: #fff;
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
        color: #fff;
        svg {
          color: #fff;
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
      border-left: 72px solid #fff;
      position: absolute;
      display: none;
    `;
  }}
`;

export const CardBox = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const CardItem = styled.div<{ 'data-src': string }>((props) => {
  return {
    width: 'calc(100% - 24px)',
    height: 580,
    display: 'flex',
    justifyContent: 'space-between',
    background: '#fff',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${props['data-src']})`,
    backgroundSize: 'cover',
    cursor: 'pointer',
    '& > p': {
      color: '#606060',
    },
    '&:hover': {
      backgroundSize: '110%',
      '.cardCropBox': {
        display: 'block',
      },
      '.button': {
        background: '#fff',
        color: '#222222',
        borderColor: '#C2C2C2',
        '& svg': {
          color: '#222222',
        },
      },
    },
    position: 'relative',
  };
});
