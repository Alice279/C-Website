import React from 'react'
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import bountyStyles from './bounty.module.less'

export default () => {
  const { language } = useI18next()
  const { t } = useTranslation('seo')
  return (
    <Layout type="light">
      <SEO
        title={t('Bounty title')}
        keywords={t('Home keywords', { returnObjects: true })}
        lang={language}
        description={t('Home description')}
      />
      <div className={bountyStyles.index}>
        <div className="container">
          <h1>Bounty</h1>
        </div>
      </div>
    </Layout>
  )
}
