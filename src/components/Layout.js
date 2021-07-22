/**
 * Base Layout for main pages
 */

import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Header from './Header'
import Footer from './Footer'
import layoutStyles from './Layout.module.less'

/* eslint-disable react/prop-types */
export default ({ children, type = 'dark', className = '' }) => {
  const { language } = useI18next()
  return (
    <div
      className={`${layoutStyles[type]} ${className} ${language === 'ru' ? layoutStyles.ru : ''} ${
        language === 'ko' ? layoutStyles.ko : ''
      }`}
    >
      <Header type={type} />
      <div className={layoutStyles.mainContainer}>{children}</div>
      <Footer type={type} />
    </div>
  )
}
