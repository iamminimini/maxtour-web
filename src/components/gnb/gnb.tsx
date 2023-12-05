import React from 'react';
import { Button } from '@maxst-designsystem/maxst-design-system';
import * as Style from './gnb.style';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import useGnbButton from '@/src/hooks/useGnbButton';

function Gnb() {
  const { t } = useTranslation();
  const { onClickGnbButton } = useGnbButton();

  const buttonData = [
    {
      text: t('main_hero_button_01'),
      type: 'secondary',
      openModal: true,
      link: '1',
    },
    {
      text: t('main_hero_button_02'),
      type: 'primary',
      openModal: false,
      link: 'https://www.naver.com/',
    },
  ];
  return (
    <Style.Container className='ul-sticky'>
      <Style.GnbContent>
        <Style.Company>
          <Image src='/images/logo.png' width={160} height={32} />
        </Style.Company>
        <Style.SiteMap>
          {buttonData?.map((item: any, index: number) => (
            <Button
              key={index}
              type={item.type}
              size='xl'
              className='button'
              onClick={() => onClickGnbButton(item)}
            >
              {item.text}
            </Button>
          ))}
        </Style.SiteMap>
      </Style.GnbContent>
    </Style.Container>
  );
}

export default Gnb;
