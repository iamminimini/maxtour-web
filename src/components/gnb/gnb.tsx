import React from 'react';
import { Button, Text } from '@maxst-designsystem/maxst-design-system';
import * as Style from './gnb.style';
import { useTranslation } from 'react-i18next';
import { LanguageLineIcon } from '@maxst-designsystem/icons';
import Image from 'next/image';

function Gnb() {
  const { t } = useTranslation();

  const buttonData = [
    {
      text: '지역 구축 신청하기',
      type: 'secondary',
      url: '',
    },
    {
      text: '맥스투어 체험해보기',
      type: 'primary',
      url: '',
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
            <Button key={index} type={item.type} size='xl' className='button'>
              {item.text}
            </Button>
          ))}
        </Style.SiteMap>
      </Style.GnbContent>
    </Style.Container>
  );
}

export default Gnb;
