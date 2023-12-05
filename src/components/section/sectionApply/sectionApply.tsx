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
import useGnbButton from '@/src/hooks/useGnbButton';

function SectionApply() {
  const { t } = useTranslation();
  const controls = useAnimation();
  const { onClickGnbButton } = useGnbButton();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardData = [
    {
      img: '/images/bg_contact_place.png',
      title: t('main_body_text_21'),
      description: t('main_body_text_22'),
      button: {
        text: t('main_body_text_23'),
        openModal: true,
        link: '1',
      },
    },
    {
      img: '/images/bg_contact_space.png',
      title: t('main_body_text_24'),
      description: t('main_body_text_25'),
      button: {
        text: t('main_body_text_26'),
        openModal: true,
        link: '2',
      },
    },
  ];

  const boxVariants = {
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
      <Style.CardBox ref={ref}>
        {cardData.map((item: any, index: number) => (
          <motion.div
            key={index}
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={boxVariants}
            custom={index}
          >
            <Style.CardItem
              data-src={item.img}
              onClick={() => onClickGnbButton(item?.button)}
            >
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
            </Style.CardItem>
          </motion.div>
        ))}
      </Style.CardBox>
    </Section>
  );
}

export default SectionApply;
