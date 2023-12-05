import React, { useRef } from 'react';
import { Button, Text, Title } from '@maxst-designsystem/maxst-design-system';
import * as Style from './header.style';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import MarginBox from '../common/marginbox';
import { useInView, useScroll } from 'framer-motion';

function Header() {
  const { t } = useTranslation();

  const headerRef = useRef(null);
  const headerView = useInView(headerRef);

  const buttonData = [
    {
      text: '지역 구축 신청하기',
      type: 'tertiary',
      url: '',
    },
    {
      text: '맥스투어 체험해보기',
      type: 'primary',
      url: '',
    },
  ];

  return (
    <Style.Container>
      <Style.Header>
        <Style.TitleBox>
          <Image src='/images/logo_hero_maxtour.png' width={215} height={44} />
          <MarginBox mt={48} />
          <Title role={4} type='title' size='xl' className='white'>
            <text
              dangerouslySetInnerHTML={{ __html: t('main_hero_text_01') }}
            ></text>
          </Title>
          <MarginBox mt={48} />
        </Style.TitleBox>
        <Style.ButtonBox>
          {buttonData?.map((item: any, index: number) => (
            <Button key={index} type={item.type} size='xl' className='button'>
              {item.text}
            </Button>
          ))}
        </Style.ButtonBox>
      </Style.Header>
      <div ref={headerRef} />
    </Style.Container>
  );
}

export default Header;
