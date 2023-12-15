import { Row } from 'antd';
import styled from 'styled-components';

type CheckboxPropsTypes = {
  label?: string;
  value?: boolean;
  isError: boolean;
  handleChangeCheckbox: any;
};

export default function Checkbox({
  label,
  value,
  isError,
  handleChangeCheckbox,
}: CheckboxPropsTypes) {
  return (
    <StyledLabel htmlFor={label}>
      <StyledInput
        type='checkbox'
        id={label}
        name={label}
        is-error={isError}
        onChange={handleChangeCheckbox}
        checked={value}
      />
      <StyledP>{label}</StyledP>
    </StyledLabel>
  );
}

const StyledInput = styled.input<{ 'is-error': any }>((props) => {
  const { colors } = props.theme;
  return {
    appearance: 'none',
    width: 18,
    height: 18,
    borderRadius: 0,
    border: props['is-error']
      ? `1px solid ${colors['palette-red']}`
      : `1px solid ${colors['palette-gray-400']}`,
    '&:checked': {
      borderColor: 'transparent',
      backgroundImage: 'url(/images/checkbox.svg)',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
  };
});

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledP = styled.p`
  margin-left: 0.25rem;
`;
