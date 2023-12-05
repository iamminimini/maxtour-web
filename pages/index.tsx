import SectionRegions from '@/src/components/section/sectionRegions/sectionRegions';
import SectionContents from '@/src/components/section/sectionContents/sectionContents';
import SectionApply from '@/src/components/section/sectionApply/sectionApply';
import styled from 'styled-components';
import Footer from '@/src/components/footer/footer';
import Header from '@/src/components/header/header';
import Gnb from '@/src/components/gnb/gnb';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';
import Modal from '@/src/components/modal/modal';
import i18n from '@/src/locales/i18n';

function Index() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isGnbActive, setIsGnbAtive] = useState(false);
  const TOP_HEIGHT = 630;

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const lang = queryParameters.get('lang') || 'ko';
    console.log('lang', lang);
    onChangeLang(lang);
  }, []);

  const onChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    scrollY.onChange((latest) => {
      if (latest <= TOP_HEIGHT) {
        return setIsGnbAtive(false);
      } else {
        return setIsGnbAtive(true);
      }
    });
  }, [scrollY, scrollYProgress]);

  return (
    <Container className='container'>
      {isGnbActive && <Gnb />}
      <Modal />
      <Contents>
        <Header />
        <SectionRegions />
        <SectionContents />
        <SectionApply />
        <Footer />
      </Contents>
    </Container>
  );
}

const Container = styled.div((props) => ({
  background: '#fff',
}));

const Contents = styled.div((props) => ({
  background: '#fff',
  width: '100%',
  marginTop: 738,
  position: 'relative',
  top: -80,
}));

// const Section = styled.div((props) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'flex-start',
//   justifyContent: 'center',
//   width: '100%',
//   maxWidth: 1400,
//   marginTop: 200,
//   padding: props.theme.isMobile
//     ? '20px 24px 120px 24px'
//     : '24px 24px 200px 24px',
// }));

const InnerContainer = styled.div((props) => ({
  // maxWidth: props.theme.isMobile ? '100%' : 1400,
}));

export default Index;
