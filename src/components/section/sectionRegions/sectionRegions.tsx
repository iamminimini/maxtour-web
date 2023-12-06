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
        url: '',
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
        url: '',
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
        url: '',
      },
    },
  ];

  const BoxVariants = {
    hidden: (i: number) => ({ opacity: 1, y: 140, x: i * -405 }),
    visible: (i: number) => ({
      x: 0,
      y: i === 1 ? -20 : 20,
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

  return (
    <BgTopContainer>
      <BgTopBox>
        <TopTriangle />
        <TopLine />
      </BgTopBox>
      <Section padding={'48px 0 52px'}>
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
        <CardBox ref={ref}>
          {cardData.map((item: any, index: number) => (
            <CardItem
              key={index}
              ref={ref}
              animate={controls}
              initial='hidden'
              variants={BoxVariants}
              custom={index}
              onMouseOver={() => setActive(item.id)}
              onMouseOut={() => setActive(false)}
            >
              <ImageBox
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
                  >
                    {item.button.text}
                  </Button>
                </Style.ButtonWrapper>
              </Style.CardText>
            </CardItem>
          ))}
        </CardBox>
      </Section>
    </BgTopContainer>
  );
}

const BgTopContainer = styled.div({
  width: '100%',
  '& > img': {
    width: '100%',
  },
});

const CardBox = styled.div({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

const CardItem = styled(motion.div)({
  width: 'calc(33.3% - 14px)',
  border: '8px solid transparent',
  '&:hover': {
    borderColor: '#99EEF4',
  },
  '&:hover .cardCropBox': {
    background: '#606060',
    display: 'none',
  },
  '&:hover .button': {
    visibility: 'visible',
  },
});

const ImageBox = styled.div<{ 'data-src': string; 'data-active': any }>(
  (props) => {
    return {
      width: '100%',
      minHeight: '280px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${props['data-src']})`,
      backgroundSize: props['data-active'] ? '110%' : 'cover',
      position: 'relative',
    };
  }
);

const BgTopBox = styled.div({
  width: '100%',
  height: 80,
  position: 'relative',
  display: 'flex',
});

const TopLine = styled.div({
  height: '80px',
  width: '100%',
  background: '#fff',
});

const TopTriangle = styled.div({
  width: 0,
  height: 0,
  borderTop: '80px solid transparent',
  borderRight: '80px solid #fff',
});
export default SectionRegions;
