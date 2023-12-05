import styled, { css } from 'styled-components';
import { Row, Select, Modal as AntdModal, Input } from 'antd';

const { TextArea } = Input;

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

export const StyleTextArea = styled(TextArea)(({ theme }) => ({
  ['&&.ant-input']: {
    borderColor: '#C2C2C2',
    borderRadius: 0,
    height: 200,
    resize: 'none',
    padding: '10px 12px',
    fontSize: 16,
  },
}));

export const StyleRow = styled(Row)(({ theme }) => ({
  ['&&.ant-row']: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 16,
    gap: 8,
    ['& .ant-col:nth-child(2)']: {
      height: 48,
    },
    ['& .ant-col:nth-child(1)']: {
      display: 'flex',
    },
  },
}));

export const StyleModal = styled(AntdModal)(({ theme }) => ({
  button: {
    maxWidth: '100% !important',
  },
}));

export const SelectSelect = styled(Select)(({ theme }) => ({
  ['&.ant-select:not(.ant-select-customize-input) .ant-select-selector']: {
    height: 48,
    borderRadius: 0,
    borderColor: '#C2C2C2',
    fontSize: 16,
  },
  '&.ant-select .ant-select-arrow': {
    marginTop: 2,
  },
}));

export const StyleInput = styled(Input)(({ theme }) => ({
  ['&&.ant-input']: {
    height: 48,
    borderRadius: 0,
    borderColor: '#C2C2C2',
    fontSize: 16,
  },
}));

export const Required = styled.div((props) => ({
  color: '#0FCBDD',
  position: 'relative',
  top: 2,
  left: 3,
}));
