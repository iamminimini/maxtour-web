import useModal from './useModal';

type ReturnType = {
  onClickGnbButton: (item: any) => void;
  onChangeLanguage: () => void;
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

  const onChangeLanguage = () => {
    const URLSearch = new URLSearchParams(location.search);
    const lang = URLSearch.get('lang');
    URLSearch.set('lang', !lang || lang === 'ko' ? 'en' : 'ko');
    const newParam = URLSearch.toString();
    window.open(location.pathname + '?' + newParam, '_self');
  };
  return { onClickGnbButton, onChangeLanguage };
};

export default useGnbButton;
