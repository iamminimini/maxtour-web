import React, { useRef } from 'react';
import { Button, Text, Title } from '@maxst-designsystem/maxst-design-system';
import * as Style from './header.style';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import MarginBox from '../common/marginbox';
import { useInView, useScroll } from 'framer-motion';
import useGnbButton from '@/src/hooks/useGnbButton';

function Header() {
  const { t } = useTranslation();

  const { onClickGnbButton } = useGnbButton();

  const buttonData = [
    {
      text: t('main_hero_button_01'),
      type: 'tertiary',
      openModal: true,
      link: 'DIGITAL_TWEEN_3D_CONSTRUCTION',
    },
    {
      text: t('main_hero_button_02'),
      type: 'primary',
      openModal: false,
      link: 'https://www.naver.com/',
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
        </Style.ButtonBox>
      </Style.Header>
    </Style.Container>
  );
}

export default Header;
