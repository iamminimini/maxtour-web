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
      background: red;
    `;
  }}
`;
