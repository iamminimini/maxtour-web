import useModal from './useModal';

type ReturnType = {
  onClickGnbButton: (item: any) => void;
};

const useGnbButton = (): ReturnType => {
  const { onClickOpenModal } = useModal();

  const onClickGnbButton = (item: any) => {
    if (item.openModal) {
      onClickOpenModal({
        isOpen: true,
        innerData: { category: item.link },
      });
    } else {
      window.open(item.link);
    }
  };
  return { onClickGnbButton };
};

export default useGnbButton;
