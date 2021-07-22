import React from 'react'
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import faqStyles from './faq.module.less'

export default () => {
  const { language } = useI18next()
  const { t } = useTranslation('seo')
  return (
    <Layout type="light">
      <SEO
        title={t('Home title')}
        keywords={t('Home keywords', { returnObjects: true })}
        lang={language}
        description={t('Home description')}
      />
      <div className={faqStyles.index}>
        <div className="container">
          <h1>FAQ</h1>
        </div>
      </div>
    </Layout>
  )
}
