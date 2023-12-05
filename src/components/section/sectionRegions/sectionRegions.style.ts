import styled, { css } from 'styled-components';

export const TitleBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      span {
        color: #0fcbdd;
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
      img {
        width: 100%;
        min-height: 280px;
      }
    `;
  }}
`;

export const CardText = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background: #fff;
      padding: 24px 24px 16px 24px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    `;
  }}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      visibility: hidden;
      & .button {
        color: #109eff;
        svg {
          color: #109eff;
        }
      }
    `;
  }}
`;

export const TopCropBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 0;
      height: 0;
      border-bottom: 36px solid transparent;
      border-left: 36px solid #fff;
      position: absolute;
      top: 0;
    `;
  }}
`;

export const BottomCropBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 0;
      height: 0;
      border-top: 36px solid transparent;
      border-right: 36px solid #fff;
      position: absolute;
      bottom: 0;
      right: 0;
    `;
  }}
`;
