import useModal from './useModal';

type ReturnType = {
  onClickGnbButton: (item: any) => void;
};

const useGnbButton = (): ReturnType => {
  const { onClickOpenModal } = useModal();

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
  return { onClickGnbButton };
};

export default useGnbButton;
