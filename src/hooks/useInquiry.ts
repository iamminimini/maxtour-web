import { useTranslation } from 'react-i18next';
import useModal from './useModal';
import { useEffect, useState } from 'react';
import { fetchPublicAddQuestions } from '../api/questions';
import { ModalFormType } from '../types/modal';

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
  const [inputValue, setInputValue] = useState<ModalFormType>({
    category: undefined,
    email: '',
    phone: '',
    contents: '',
    agreement: false,
  });

  const [isError, setIsError] = useState({
    category: false,
    email: false,
    contents: false,
    agreement: false,
  });

  const onClosedModal = () => {
    onClickCloseModal({
      isOpen: false,
      innerData: {},
    });
  };

  useEffect(() => {
    const category = modalData?.innerData?.category;
    setInputValue({
      category: category,
      email: '',
      phone: '',
      contents: '',
      agreement: false,
    });
    setIsError({
      category: false,
      email: false,
      contents: false,
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
      case 'category':
        return value.length > 0;
      // 휴대폰번호 : 10자리 이하
      case 'email':
        return value.length > 0;
      // 이메일 : 주소앞자리 64자 + @ + 도메인 255자
      case 'contents':
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
    const { category, email, contents, agreement, phone } = inputValue;

    if (category && email.length > 0 && contents.length > 0 && agreement) {
      const payload = {
        category: category,
        email: email,
        contents: contents,
        phone: phone,
      };
      await fetchPublicAddQuestions(payload)
        .then((response) => {
          alert('문의를 보냈습니다.');
          onClosedModal();
        })
        .catch((e) => {
          alert('문의 실패');
        });
    } else {
      setIsError({
        category: !category,
        email: !email,
        contents: !contents,
        agreement: !agreement,
      });
    }
  };

  const selectOptions = [
    {
      value: 'DIGITAL_TWEEN_3D_CONSTRUCTION',
      label: t('modal_dropdown_01'),
    },
    {
      value: 'SPACE_VIEWER_360VR_CONSTRUCTION',
      label: t('modal_dropdown_02'),
    },
    {
      value: 'MAXTOUR',
      label: t('modal_dropdown_03'),
    },
  ];

  const handleChangeOptions = (value: string) => {
    setInputValue({ ...inputValue, category: value });
    setIsError({
      ...isError,
      category: !checkValidation('category', value),
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
        innerData: { category: item.link },
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
