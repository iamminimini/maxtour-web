import { motion } from 'framer-motion';
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

export const CardBox = styled.div({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  '& div:nth-child(n+3)': {
    marginTop: 24,
  },
});

export const CardItem = styled(motion.div)({
  width: 'calc(50% - 12px)',
  display: 'flex',
  justifyContent: 'space-between',
  height: 240,
  background: '#fff',
  '& > p': {
    color: '#606060',
  },
});

export const CardText = styled.div({
  padding: 32,
  width: 330,
});
