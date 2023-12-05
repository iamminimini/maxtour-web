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
