import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const BgTopContainer = styled.div`
  width: 100%;
`;

export const BgBottomBox = styled.div`
  width: 100%;
  height: 80;
  position: relative;
  display: flex;
`;

export const BottomLine = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      height: 80px;
      width: 100%;
      background: ${colors['palette-bluegray-700']};
    `;
  }}
`;

export const BottomTriangle = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 0px;
      height: 0px;
      border-bottom: 80px solid ${colors['palette-white']};
      border-left: 80px solid ${colors['palette-bluegray-700']};
    `;
  }}
`;

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
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      position: relative;
      background: red;
    `;
  }}
`;

export const CardBox = styled.div({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  '& div:nth-child(n+3)': {
    marginTop: 24,
  },
});

export const CardItem = styled(motion.div)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: calc(50% - 12px);
      height: 240px;
      display: flex;
      justify-content: space-between;
      background: ${colors['palette-white']};
      & > p: {
        color: ${colors['palette-gray-400']};
      }
    `;
  }}
`;

export const CardText = styled.div({
  padding: 32,
  width: 330,
});
