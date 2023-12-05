import { useTranslation } from 'react-i18next';
import useModal from './useModal';
import { useEffect, useState } from 'react';
import { fetchPublicAddQuestions } from '../api/questions';

type ReturnType = {
  isOpen: boolean;
  inputValue: any;
  isError: any;
  selectOptions: {
    value: string;
    label: string;
  }[];
  handleChangeOptions: (value: string) => void;
  onChangeValue: (type: string, e: any) => void;
  handleChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onClosedModal: () => void;
  onClickGnbButton: (item: any) => void;
};

const useInquiry = (): ReturnType => {
  const { t } = useTranslation();
  const { modalData, onClickCloseModal, onClickOpenModal } = useModal();
  const [inputValue, setInputValue] = useState<any>({
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

  const onClosedModal = () => {
    onClickCloseModal({
      isOpen: false,
      innerData: {},
    });
  };

  useEffect(() => {
    const question_category = modalData?.innerData?.question_category;
    setInputValue({
      question_category: question_category,
      answer_email: '',
      phone_number: '',
      question_content: '',
      agreement: false,
    });
  }, [modalData.isOpen]);

  /**
   * 인풋값 변경시
   */
  const onChangeValue = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setInputValue({ ...inputValue, [type]: value });
    setIsError({
      ...isError,
      [type]: !checkValidation(type, value),
    });
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
  const onSubmit = async () => {
    const { question_category, answer_email, question_content, agreement } =
      inputValue;

    if (
      question_category &&
      answer_email.length > 0 &&
      question_content.length > 0 &&
      agreement
    ) {
      await fetchPublicAddQuestions(inputValue)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log('보내기 실패');
        });
    } else {
      setIsError({
        question_category: !question_category,
        answer_email: !answer_email,
        question_content: !question_content,
        agreement: !agreement,
      });
    }
  };

  const selectOptions = [
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

  const handleChangeOptions = (value: string) => {
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

  const onClickGnbButton = (item: any) => {
    console.log('item', item);
    if (item.openModal) {
      onClickOpenModal({
        isOpen: true,
        innerData: { question_category: item.link },
      });
    } else {
      window.open(item.link);
    }
  };
  return {
    isOpen: modalData.isOpen,
    inputValue,
    isError,
    selectOptions,
    handleChangeOptions,
    onChangeValue,
    handleChangeCheckbox,
    onSubmit,
    onClosedModal,
    onClickGnbButton,
  };
};

export default useInquiry;
