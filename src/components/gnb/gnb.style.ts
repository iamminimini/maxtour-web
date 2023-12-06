import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 999;
      background: white;
    `;
  }}
`;
1;
export const GnbContent = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 90%;
      max-width: 1600px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 20px;
      margin: auto;
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
      gap: 8px;
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
