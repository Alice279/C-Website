/* eslint-disable jsx-a11y/no-static-element-interactions */
/**
 * Team member
 */

import React, { useState } from 'react'
// import { Trans } from 'gatsby-plugin-react-i18next'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import noticeStyles from './Notice.module.less'
import close from '../assets/images/icon-close.png'

/* eslint-disable react/prop-types */
export default () => {
  const [show, setShow] = useState(false)
  const { t } = useTranslation('notice')

  const date = t('date')
  // isTestNetEnv
  if (typeof localStorage !== 'undefined') {
    // localStorage
    if (!show && localStorage.getItem('notice') !== date) {
      setShow(true)
    }
  }

  return (
    show && (
      <div className={noticeStyles.notice}>
        <h1>{t('Notice')}</h1>
        <p>
          {t('Notice Desc')}
          {t('Link') && (
            <span>
              <span>&nbsp;(</span>
              <a href={t('Link')} target="_blank">
                {t('Details')}
              </a>
              <span>)</span>
            </span>
          )}
        </p>
        <div
          className="closeBtn"
          onClick={(e) => {
            if (typeof localStorage !== 'undefined') {
              localStorage.setItem('notice', date)
            }
            setShow(false)
            e.stopPropagation()
          }}
          role="button"
          aria-label="close"
          tabIndex={0}
          onKeyUp={() => {}}
        >
          <img src={close} alt="Close" />
        </div>
      </div>
    )
  )
}
