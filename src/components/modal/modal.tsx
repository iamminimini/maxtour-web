import React, { useState } from 'react';
import { Button, Title, Text } from '@maxst-designsystem/maxst-design-system';
import { useTranslation } from 'react-i18next';
import { Col, Row, Select, Modal as AntdModal, Input } from 'antd';
import styled from 'styled-components';
import MarginBox from '../common/marginbox';
import Checkbox from '../common/checkbox';

const { TextArea } = Input;

function Modal() {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState({
    question_category: undefined,
    answer_email: '',
    phone_number: '',
    question_content: '',
    agreement: false,
  });

  const [isError, setIsError] = useState({
    question_category: false,
    answer_email: false,
    question_content: false,
    agreement: false,
  });

  /**
   * 인풋값 변경시
   */
  const onChangeValue = (type: string, e: any) => {
    const { value } = e.target;
    setInputValue({ ...inputValue, [type]: value });
    setIsError({
      ...isError,
      [type]: !checkValidation(type, value),
    });
  };

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const onOpenModal = () => {
    console.log('sample open', isOpen);
    setIsOpen(true);
  };
  const onCloseModal = () => {
    console.log('sample close', isOpen);
    setIsOpen(false);
  };

  /**
   * 인풋값 validation 체크
   */
  const checkValidation = (type: string, value: any) => {
    switch (type) {
      // 성함 : 1 ~ 10자리 이하
      case 'question_category':
        return value.length > 0;
      // 휴대폰번호 : 10자리 이하
      case 'answer_email':
        return value.length > 0;
      // 이메일 : 주소앞자리 64자 + @ + 도메인 255자
      case 'question_content':
        return value.length > 0;
      // 문의내용 : 1000자 초과시
      case 'agreement':
        return value;
      default:
        return true;
    }
  };

  /**
   * 문의하기 버튼 클릭
   */
  const onSubmit = () => {
    const { question_category, answer_email, question_content, agreement } =
      inputValue;

    console.log('inputValue', inputValue);

    if (
      question_category &&
      answer_email.length > 0 &&
      question_content.length > 0 &&
      agreement
    ) {
    } else {
      setIsError({
        question_category: !question_category,
        answer_email: !answer_email,
        question_content: !question_content,
        agreement: !agreement,
      });

      console.log('test ', agreement);
    }
  };

  const options = [
    {
      value: '1',
      label: t('modal_dropdown_01'),
    },
    {
      value: '2',
      label: t('modal_dropdown_02'),
    },
    {
      value: '3',
      label: t('modal_dropdown_03'),
    },
  ];

  const handleChange = (value: any) => {
    setInputValue({ ...inputValue, question_category: value });
    setIsError({
      ...isError,
      question_category: !checkValidation('question_category', value),
    });
  };

  const handleChangeCheckbox = (e: any) => {
    const { checked } = e.target;
    setInputValue({ ...inputValue, agreement: checked });
    setIsError({
      ...isError,
      agreement: !checked,
    });
  };

  return (
    <StyleModal open={isOpen}>
      <Title role={4} type='title' size='s' className='white'>
        {t('modal_text_01')}
      </Title>
      <MarginBox mt={8} />
      <Text type='body' size='m'>
        {t('modal_text_02')}
      </Text>
      {/* 요청타입 */}
      <StyleRow>
        <Col>
          <Text type='body' size='m'>
            {t('modal_text_03')}
          </Text>
          <Required>*</Required>
        </Col>
        <Col>
          <SelectSelect
            placeholder={t('modal_dropdown_placeholder_01')}
            defaultValue={inputValue?.question_category}
            onChange={handleChange}
            style={{ width: '100%' }}
            options={options}
            status={isError.question_category ? 'error' : ''}
          />
        </Col>
      </StyleRow>
      {/* 회신받을 이메일 */}
      <StyleRow>
        <Col>
          <Text type='body' size='m'>
            {t('modal_text_04')}
          </Text>
          <Required>*</Required>
        </Col>
        <Col>
          <StyleInput
            placeholder={t('modal_textinput_placeholder_01')}
            value={inputValue.answer_email}
            onChange={(e) => onChangeValue('answer_email', e)}
            status={isError.answer_email ? 'error' : ''}
          />
        </Col>
      </StyleRow>
      {/* 전화번호 */}
      <StyleRow>
        <Col>
          <Text type='body' size='m'>
            {t('modal_text_05')}
          </Text>
        </Col>
        <Col>
          <StyleInput
            placeholder={t('modal_dropdown_placeholder_02')}
            value={inputValue.phone_number}
            onChange={(e) => onChangeValue('phone_number', e)}
          />
        </Col>
      </StyleRow>
      {/* 내용 */}
      <StyleRow>
        <Col>
          <Text type='body' size='m'>
            {t('modal_text_06')}
          </Text>
          <Required>*</Required>
        </Col>
        <StyleTextArea
          placeholder={t('modal_dropdown_placeholder_03')}
          value={inputValue.question_content}
          onChange={(e) => onChangeValue('question_content', e)}
          status={isError.question_content ? 'error' : ''}
        />
      </StyleRow>
      <MarginBox mt={16} />
      <Checkbox
        isError={isError.agreement}
        label={t('modal_checkbox_01')}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <MarginBox mt={30} />
      <Button
        onClick={() => onSubmit()}
        size='xl'
        type='primary'
        buttonWidth='500px'
      >
        {t('modal_button_01')}
      </Button>
    </StyleModal>
  );
}

const StyleRow = styled(Row)(({ theme }) => ({
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

const StyleModal = styled(AntdModal)(({ theme }) => ({
  button: {
    maxWidth: '100% !important',
  },
}));

const SelectSelect = styled(Select)(({ theme }) => ({
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

const StyleInput = styled(Input)(({ theme }) => ({
  ['&&.ant-input']: {
    height: 48,
    borderRadius: 0,
    borderColor: '#C2C2C2',
    fontSize: 16,
  },
}));

const StyleTextArea = styled(TextArea)(({ theme }) => ({
  ['&&.ant-input']: {
    borderColor: '#C2C2C2',
    borderRadius: 0,
    height: 200,
    resize: 'none',
    padding: '10px 12px',
    fontSize: 16,
  },
}));

const Required = styled.div((props) => ({
  color: '#0FCBDD',
  position: 'relative',
  top: 2,
  left: 3,
}));
export default Modal;
