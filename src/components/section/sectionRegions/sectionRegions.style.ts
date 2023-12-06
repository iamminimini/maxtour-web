import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const BgTopContainer = styled.div({
  width: '100%',
  '& > img': {
    width: '100%',
  },
});

export const BgTopBox = styled.div({
  width: '100%',
  height: 80,
  position: 'relative',
  display: 'flex',
});

export const TopLine = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      height: 80px;
      background: ${colors['palette-white']};
    `;
  }}
`;

export const TopTriangle = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 0px;
      height: 0px;
      border-top: 80px solid transparent;
      border-right: 80px solid ${colors['palette-white']};
    `;
  }}
`;

export const TitleBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      span {
        color: ${colors['palette-mint-600']};
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

export const CardBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardItem = styled(motion.div)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: calc(33.3% - 14px);
      border: 8px solid transparent;
      background: ${colors['palette-white']};
      &:hover {
        border-color: ${colors['palette-mint-200']};
      }
      &:hover .cardCropBox {
        background: ${colors['palette-gray-700']};
        display: none;
      }
      &:hover .button {
        visibility: visible;
      }
    `;
  }}
`;

export const ImageBox = styled.div<{ 'data-src': string; 'data-active': any }>(
  (props) => {
    return {
      width: '100%',
      minHeight: '280px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${props['data-src']})`,
      backgroundSize: props['data-active'] ? '110%' : 'cover',
      position: 'relative',
    };
  }
);

export const CardText = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background: ${colors['palette-white']};
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
        color: ${colors['palette-blue']};
        svg {
          color: ${colors['palette-blue']};
        }
      }
    `;
  }}
`;

export const TopCropBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 0px;
      height: 0px;
      border-bottom: 36px solid transparent;
      border-left: 36px solid ${colors['palette-white']};
      position: absolute;
      top: 0px;
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
      border-right: 36px solid ${colors['palette-white']};
      position: absolute;
      bottom: 0;
      right: 0;
    `;
  }}
`;
