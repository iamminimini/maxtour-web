import styled, { css } from 'styled-components';
import { Row, Select, Modal as AntdModal, Input } from 'antd';

const { TextArea } = Input;

export const StyleModal = styled(AntdModal)(({ theme }) => ({
  button: {
    maxWidth: '100% !important',
  },
}));

export const StyleTextArea = styled(TextArea)(({ theme: { colors } }) => ({
  ['&&.ant-input']: {
    borderColor: colors['palette-gray-400'],
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

export const SelectSelect = styled(Select)(({ theme: { colors } }) => ({
  ['&.ant-select:not(.ant-select-customize-input) .ant-select-selector']: {
    height: 48,
    borderRadius: 0,
    borderColor: colors['palette-gray-400'],
    fontSize: 16,
  },
  '&.ant-select .ant-select-arrow': {
    marginTop: 2,
  },
}));

export const StyleInput = styled(Input)(({ theme: { colors } }) => ({
  ['&&.ant-input']: {
    height: 48,
    borderRadius: 0,
    borderColor: colors['palette-gray-400'],
    fontSize: 16,
  },
}));

export const Required = styled.div(({ theme: { colors } }) => ({
  color: colors['palette-mint-600'],
  position: 'relative',
  top: 2,
  left: 3,
}));
