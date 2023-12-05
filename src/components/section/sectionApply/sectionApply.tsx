import React, { useEffect } from 'react';
import { Title, Button } from '@maxst-designsystem/maxst-design-system';
import Section from '../../common/section';
import * as Style from './sectionApply.style';
import MarginBox from '../../common/marginbox';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { ArrowRightLineIcon } from '@maxst-designsystem/icons';

function SectionApply() {
  const { t } = useTranslation();

  const cardData = [
    {
      img: '/images/bg_contact_place.png',
      title: t('main_body_text_21'),
      description: t('main_body_text_22'),
      button: {
        text: t('main_body_text_23'),
        url: '',
      },
    },
    {
      img: '/images/bg_contact_space.png',
      title: t('main_body_text_24'),
      description: t('main_body_text_25'),
      button: {
        text: t('main_body_text_26'),
        url: '',
      },
    },
  ];
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const BoxVariants = {
    hidden: (i: number) => ({ opacity: [0, 0.1], y: 100 }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.67, delay: 0.5 },
    }),
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Section>
      <Style.TitleBox ref={ref}>
        <Title role={4} type='title' size='xl'>
          {t('main_body_text_20')}
        </Title>
      </Style.TitleBox>
      <MarginBox mt={93} />
      <CardBox ref={ref}>
        {cardData.map((item: any, index: number) => (
          <motion.div
            key={index}
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={BoxVariants}
            custom={index}
          >
            <CardItem data-src={item.img}>
              <Style.CropBox className={'cardCropBox'}></Style.CropBox>
              <Style.CardText>
                <Title role={4} type='title' size='s' className='white'>
                  {item.title}
                </Title>
                <MarginBox mt={24} />
                <Title role={4} type='title' size='l' className='white'>
                  {item.description}
                </Title>
              </Style.CardText>
              <Style.ButtonWrapper>
                <Button
                  type='ghost'
                  size='l'
                  className='button'
                  iconRight={<ArrowRightLineIcon />}
                >
                  {item.button.text}
                </Button>
              </Style.ButtonWrapper>
            </CardItem>
          </motion.div>
        ))}
      </CardBox>
    </Section>
  );
}

const CardBox = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

const CardItem = styled.div<{ 'data-src': string }>((props) => {
  return {
    width: 'calc(100% - 24px)',
    height: 580,
    display: 'flex',
    justifyContent: 'space-between',
    background: '#fff',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${props['data-src']})`,
    backgroundSize: 'cover',
    cursor: 'pointer',
    '& > p': {
      color: '#606060',
    },
    '&:hover': {
      backgroundSize: '110%',
      '.cardCropBox': {
        display: 'block',
      },
      '.button': {
        background: '#fff',
        color: '#222222',
        borderColor: '#C2C2C2',
        '& svg': {
          color: '#222222',
        },
      },
    },
    position: 'relative',
  };
});

export default SectionApply;
