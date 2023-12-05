import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      height: 738px;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url(/images/img_hero_bg.png);
      background-size: cover;
      position: fixed;
      top: 0;
      z-index: 0;
    `;
  }}
`;
1;
export const Header = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      max-width: 1244px;
      margin: auto;
      padding-top: 184px;
    `;
  }}
`;

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

export const ButtonBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
      cursor: pointer;
    `;
  }}
`;
