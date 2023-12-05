import React from 'react';
import { Text } from '@maxst-designsystem/maxst-design-system';
import * as Style from './footer.style';
import { useTranslation } from 'react-i18next';
import { LanguageLineIcon } from '@maxst-designsystem/icons';

function Footer() {
  const { t } = useTranslation();

  const siteMapData = [
    {
      text: '맥스버스 바로가기',
      url: '',
    },
    {
      text: '서비스 약관',
      url: '',
    },
    {
      text: '개인정보 처리방침',
      url: '',
    },
    {
      text: '개인위치정보사업 약관',
      url: '',
    },
  ];

  return (
    <Style.Container>
      <Style.Footer>
        <Style.SiteMap>
          {siteMapData?.map((item: any, index: number) => (
            <Text type='body' size='m'>
              {item.text}
            </Text>
          ))}
        </Style.SiteMap>
        <Style.Company>
          <Text type='body' size='m'>
            {t('main_footer_06')}
          </Text>
          <LanguageLineIcon />
        </Style.Company>
      </Style.Footer>
    </Style.Container>
  );
}

export default Footer;
