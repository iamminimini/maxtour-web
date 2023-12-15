import React, { useEffect, useState } from 'react';
import { Title, Button, Text } from '@maxst-designsystem/maxst-design-system';
import Section from '../../common/section';
import * as Style from './sectionRegions.style';
import MarginBox from '../../common/marginbox';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { ArrowOutwardLineIcon } from '@maxst-designsystem/icons';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

function SectionRegions() {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [active, setActive] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardData = [
    {
      id: 1,
      img: '/images/img_place_01_crop.png',
      activeImg: '/images/img_place_01_full.png',
      title: t('main_body_text_03'),
      description: t('main_body_text_04'),
      button: {
        text: t('main_body_text_27'),
        url: 'https://map.maxtour.io/?area=busan',
      },
    },
    {
      id: 2,
      img: '/images/img_place_02_crop.png',
      activeImg: '/images/img_place_02_full.png',
      title: t('main_body_text_05'),
      description: t('main_body_text_06'),
      button: {
        text: t('main_body_text_27'),
        url: 'https://map.maxtour.io/?area=ulsan',
      },
    },
    {
      id: 3,
      img: '/images/img_place_03_crop.png',
      activeImg: '/images/img_place_03_full.png',
      title: t('main_body_text_07'),
      description: t('main_body_text_08'),
      button: {
        text: t('main_body_text_27'),
        url: 'https://map.maxtour.io/?area=gyeongnam',
      },
    },
  ];

  const BoxVariants = {
    hidden: (i: number) => ({ opacity: 1, y: 140, x: i * -405 }),
    visible: (i: number) => ({
      x: 0,
      y: i === 1 ? 20 : -20,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    }),
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const onClickMaxtour = (item: any) => {
    window.open(item.url);
  };

  return (
    <Style.BgTopContainer>
      <Style.BgTopBox>
        <Style.TopTriangle />
        <Style.TopLine />
      </Style.BgTopBox>
      <Section padding={'48px 0 122px'}>
        <Style.TitleBox ref={ref}>
          <Title role={4} type='title' size='xl'>
            <text
              dangerouslySetInnerHTML={{ __html: t('main_body_text_01') }}
            ></text>
          </Title>
        </Style.TitleBox>
        <MarginBox mt={16} />
        <Style.Discription>
          <Title role={4} type='title' size='xs' className='gray'>
            <text
              dangerouslySetInnerHTML={{ __html: t('main_body_text_02') }}
            ></text>
          </Title>
        </Style.Discription>
        <MarginBox mt={80} />
        <Style.CardBox ref={ref}>
          {cardData.map((item: any, index: number) => (
            <Style.CardItem
              key={index}
              ref={ref}
              animate={controls}
              initial='hidden'
              variants={BoxVariants}
              custom={index}
              onMouseOver={() => setActive(item.id)}
              onMouseOut={() => setActive(false)}
            >
              <Style.ImageBox
                data-src={active === item.id ? item.activeImg : item.img}
                data-active={active === item.id}
                className='image-box'
              />
              <Style.TopCropBox className={'cardCropBox'} />
              <Style.BottomCropBox className={'cardCropBox'} />
              <Style.CardText>
                <Title role={4} type='title' size='m'>
                  {item.title}
                </Title>
                <MarginBox mt={8} />
                <Text type='body' size='m'>
                  {item.description}
                </Text>
                <Style.ButtonWrapper>
                  <MarginBox mt={12} />
                  <Button
                    type='text'
                    size='l'
                    className='button'
                    iconRight={<ArrowOutwardLineIcon />}
                    onClick={() => onClickMaxtour(item.button)}
                  >
                    {item.button.text}
                  </Button>
                </Style.ButtonWrapper>
              </Style.CardText>
            </Style.CardItem>
          ))}
        </Style.CardBox>
      </Section>
    </Style.BgTopContainer>
  );
}

export default SectionRegions;
