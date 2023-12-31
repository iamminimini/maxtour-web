import React, { useEffect } from 'react';
import { Title, Text } from '@maxst-designsystem/maxst-design-system';
import Section from '../../common/section';
import MarginBox from '../../common/marginbox';
import * as Style from './sectionContents.style';
import styled from 'styled-components';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { useAnimation } from 'framer-motion';

function SectionContents() {
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

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const BoxVariants = {
    hidden: (i: number) => ({ opacity: 0, y: 100 }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: i > 1 ? 1 : 0,
      },
    }),
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Style.BgTopContainer>
      <Section bgcolor='#374553' padding={'128px 0 52px'}>
        <Style.TitleBox>
          <Title role={4} type='title' size='xl' className='white'>
            <text
              dangerouslySetInnerHTML={{ __html: t('main_body_text_09') }}
            ></text>
          </Title>
        </Style.TitleBox>
        <MarginBox mt={16} />
        <Style.Discription>
          <Title role={4} type='title' size='xs' className='gray'>
            <text
              dangerouslySetInnerHTML={{ __html: t('main_body_text_10') }}
            ></text>
          </Title>
        </Style.Discription>
        <MarginBox mt={70} />
        <Style.CardBox ref={ref}>
          {cardData.map((item: any, index: number) => (
            <Style.CardItem
              key={index}
              ref={ref}
              animate={controls}
              initial='hidden'
              variants={BoxVariants}
              custom={index}
            >
              <Style.CardText>
                <Title role={4} type='title' size='m' className='white'>
                  {item.title}
                </Title>
                <MarginBox mt={7} />
                <Text type='body' size='l'>
                  {item.description}
                </Text>
              </Style.CardText>
              <Style.ImageBox>
                <Image
                  src={item.img}
                  width={240}
                  height={240}
                  alt='img_function.png'
                />
              </Style.ImageBox>
            </Style.CardItem>
          ))}
        </Style.CardBox>
      </Section>
      <Style.BgBottomBox>
        <Style.BottomLine />
        <Style.BottomTriangle />
      </Style.BgBottomBox>
    </Style.BgTopContainer>
  );
}

export default SectionContents;
