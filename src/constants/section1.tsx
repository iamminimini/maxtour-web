import { useTranslation } from 'react-i18next';

function SectionData() {
  const { t } = useTranslation();
  const cardData = [
    {
      img: '/images/img_function_01.png',
      title: t('main_body_text_11'),
      description: t('main_body_text_12'),
    },
    {
      img: '/images/img_function_02.png',
      title: t('main_body_text_13'),
      description: t('main_body_text_14'),
    },
    {
      img: '/images/img_function_03.png',
      title: t('main_body_text_16'),
      description: t('main_body_text_17'),
    },
    {
      img: '/images/img_function_04.png',
      title: t('main_body_text_18'),
      description: t('main_body_text_19'),
    },
  ];
  return { cardData };
}
export default SectionData;
