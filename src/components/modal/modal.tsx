import React from 'react';
import { Button, Title, Text } from '@maxst-designsystem/maxst-design-system';
import { useTranslation } from 'react-i18next';
import { Col, Row, Select, Modal as AntdModal, Input } from 'antd';
import styled from 'styled-components';
import MarginBox from '../common/marginbox';
import Checkbox from '../common/checkbox';
import useInquiry from '@/src/hooks/useInquiry';
import * as Style from './modal.style';

const { TextArea } = Input;

function Modal() {
  const { t } = useTranslation();
  const {
    isOpen,
    inputValue,
    isError,
    selectOptions,
    onClosedModal,
    handleChangeOptions,
    onChangeValue,
    handleChangeCheckbox,
    onSubmit,
  } = useInquiry();

  return (
    <Style.StyleModal open={isOpen} onCancel={onClosedModal} footer={null}>
      <Title role={4} type='title' size='s' className='white'>
        {t('modal_text_01')}
      </Title>
      <MarginBox mt={8} />
      <Text type='body' size='m'>
        {t('modal_text_02')}
      </Text>
      {/* 요청타입 */}
      <Style.StyleRow>
        <Col>
          <Text type='body' size='m'>
            {t('modal_text_03')}
          </Text>
          <Style.Required>*</Style.Required>
        </Col>
        <Col>
          <Style.SelectSelect
            placeholder={t('modal_dropdown_placeholder_01')}
            defaultValue={inputValue?.question_category}
            value={inputValue?.question_category}
            onChange={handleChangeOptions}
            style={{ width: '100%' }}
            options={selectOptions}
            status={isError.question_category ? 'error' : ''}
          />
        </Col>
      </Style.StyleRow>
      {/* 회신받을 이메일 */}
      <Style.StyleRow>
        <Col>
          <Text type='body' size='m'>
            {t('modal_text_04')}
          </Text>
          <Style.Required>*</Style.Required>
        </Col>
        <Col>
          <Style.StyleInput
            placeholder={t('modal_textinput_placeholder_01')}
            value={inputValue.answer_email}
            onChange={(e) => onChangeValue('answer_email', e)}
            status={isError.answer_email ? 'error' : ''}
          />
        </Col>
      </Style.StyleRow>
      {/* 전화번호 */}
      <Style.StyleRow>
        <Col>
          <Text type='body' size='m'>
            {t('modal_text_05')}
          </Text>
        </Col>
        <Col>
          <Style.StyleInput
            placeholder={t('modal_dropdown_placeholder_02')}
            value={inputValue.phone_number}
            onChange={(e) => onChangeValue('phone_number', e)}
          />
        </Col>
      </Style.StyleRow>
      {/* 내용 */}
      <Style.StyleRow>
        <Col>
          <Text type='body' size='m'>
            {t('modal_text_06')}
          </Text>
          <Style.Required>*</Style.Required>
        </Col>
        <Style.StyleTextArea
          placeholder={t('modal_dropdown_placeholder_03')}
          value={inputValue.question_content}
          onChange={(e) => onChangeValue('question_content', e)}
          status={isError.question_content ? 'error' : ''}
        />
      </Style.StyleRow>
      <MarginBox mt={16} />
      <Checkbox
        value={inputValue.agreement}
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
    </Style.StyleModal>
  );
}

export default Modal;
