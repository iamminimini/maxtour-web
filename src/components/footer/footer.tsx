import React from 'react';
import i18n from 'i18next';
import { Text, Button } from '@maxst-designsystem/maxst-design-system';
import * as Style from './footer.style';
import { useTranslation } from 'react-i18next';
import { LanguageLineIcon } from '@maxst-designsystem/icons';
import useGnbButton from '@/src/hooks/useGnbButton';

function Footer() {
  const { t } = useTranslation();
  const { onClickGnbButton } = useGnbButton();

  const siteMapData = [
    {
      text: t('main_footer_01'),
      link: `https://www.maxverse.io/${i18n.language}`,
    },
    {
      text: t('main_footer_02'),
      link: `https://www.maxverse.io/${i18n.language}/terms`,
    },
    {
      text: t('main_footer_03'),
      link: `https://www.maxverse.io/${i18n.language}/privacy`,
    },
    {
      text: t('main_footer_04'),
      link: `https://www.maxverse.io/${i18n.language}/location`,
    },
  ];

  return (
    <Style.Container>
      <Style.Footer>
        <Style.SiteMap>
          {siteMapData?.map((item: any, index: number) => (
            <Button
              key={index}
              size='s'
              type='text'
              onClick={() => onClickGnbButton(item)}
            >
              {item.text}
            </Button>
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
