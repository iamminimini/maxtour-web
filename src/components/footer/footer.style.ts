import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      position: relative;
      background: #fff
    `;
  }}
`;
1;
export const Footer = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 1196px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 32px 0px 54px;
      margin: auto;
      border-top: 1px solid #dedede;
    `;
  }}
`;

export const SiteMap = styled.div`
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

export const Company = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      svg {
        width: 28px;
        height: 28px;
        cursor: pointer;
      }
    `;
  }}
`;
