/**
 * Header Component
 */

import React from 'react'
import { Link, Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import headerStyles from './Header.module.less'
import logoLight from '../assets/images/light/logo.png'
import logoDark from '../assets/images/dark/logo.png'
import iconLangLight from '../assets/images/light/icon-lang.png'
import iconLangDark from '../assets/images/dark/icon-lang.png'

// TODO How to show submenu?

export default ({ type = 'light' }) => {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation('seo')
  const isDeveloperRoute = typeof window !== `undefined` && window.location.href.indexOf('/developers') >= 0
  const isCommunityRoute = typeof window !== `undefined` && window.location.href.indexOf('/community') >= 0
  return (
    <header className={headerStyles.header}>
      <nav className={`navigation navbar fixed-top navbar-expand-lg navbar-${type}`}>
        <div className="container">
          <Link className={`navbar-brand ${headerStyles.logo}`} to="/" title={t('Home title')}>
            <img src={type === 'light' ? logoLight : logoDark} alt={t('Home title')} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className={`navbar-nav justify-content-center ${headerStyles.mainNav}`}>
              <li className="nav-item">
                <Link className="nav-link" to="/ecosystem" activeClassName="active">
                  <Trans ns="header">Ecosystem</Trans>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" activeClassName="active">
                  <Trans ns="header">About</Trans>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isDeveloperRoute ? 'active' : ''}`}
                  to="/developers/resources"
                  activeClassName="active"
                  partiallyActive
                >
                  <Trans ns="header">Developers</Trans>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isCommunityRoute ? 'active' : ''}`}
                  to="/community/media"
                  activeClassName="active"
                  partiallyActive
                >
                  <Trans ns="header">Community</Trans>
                </Link>
              </li>
            </ul>
            <ul className={`navbar-nav ${headerStyles.extraNav}`}>
              <li className="nav-item">
                <a className="btn btn-primary btn-ex-link" href="/files/Conflux_Economic_Paper_20201230.pdf" target="_blank">
                  <Trans ns="header">Economic White Paper</Trans>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${headerStyles.selectLang}`}
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={type === 'light' ? iconLangLight : iconLangDark} alt="Choose Language" />
                </a>
                <div className={`dropdown-menu dropdown-menu-right bg-${type}`}>
                  {languages.map((lng) => (
                    <Link key={lng} to={originalPath} language={lng} className="dropdown-item">
                      <Trans>lang {lng}</Trans>
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`navbar-${type} header-bg fixed-top has-bg`} />
    </header>
  )
}
