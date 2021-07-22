import React, { useState } from 'react'
import { Link, Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import assetsStyles from './resources.module.less'
import assetsBanner from '../../assets/images/assets-banner.png'
import presentation1 from '../../assets/images/developers/presentation1.png'
import presentation2 from '../../assets/images/developers/presentation2.png'
import presentation3 from '../../assets/images/developers/presentation3.png'

export default () => {
  const { language } = useI18next()
  const { t } = useTranslation('seo')
  const { t: tAssets } = useTranslation('assets')
  const [show, setShow] = useState(false)
  const [activedTab, setActivedTab] = useState(1)

  return (
    <Layout type="light" className={`${show ? 'lock' : ''}`}>
      <SEO
        title={t('Resource title')}
        keywords={t('Home keywords', { returnObjects: true })}
        lang={language}
        description={t('Home description')}
      />
      <div
        className={`overlay ${show ? 'show' : ''}`}
        role="button"
        tabIndex={0}
        aria-label="back"
        onClick={() => setShow(!show)}
        onKeyDown={() => setShow(!show)}
      />
      <div className={assetsStyles.index}>
        <div className="container">
          <div className={`sub-header ${show ? 'show' : ''}`}>
            <h3>
              <Trans ns="header">Developers</Trans>
            </h3>
            <div
              role="button"
              tabIndex={0}
              className={`current ${show ? '' : 'collapse'}`}
              onClick={() => setShow(!show)}
              onKeyDown={() => setShow(!show)}
            >
              <Trans ns="header">Resources</Trans>
            </div>
            <ul className={show ? 'show' : ''}>
              <li>
                <a href="#" className="active">
                  <Trans ns="header">Resources</Trans>
                </a>
              </li>
              <li>
                <Link to="/developers/grants">
                  <Trans ns="header">Grants</Trans>
                </Link>
              </li>
            </ul>
          </div>
          <div className={assetsStyles.banner}>
            <div>
              <h2>
                <Trans ns="header">Developers</Trans>
              </h2>
              <h1>
                <Trans ns="resources">Resources</Trans>
              </h1>
              <p>
                <Trans ns="resources">Resources desc</Trans>
              </p>
            </div>
            <div>
              <img src={assetsBanner} alt={tAssets('Assets')} />
            </div>
          </div>
          <div className={`${assetsStyles.section} ${assetsStyles.devdoc}`}>
            <h3>
              <Trans ns="resources">Developer Documents</Trans>
            </h3>
            <div className="row">
              <div className="col-12 col-md-9">
                <p>
                  <Trans ns="resources">Developer desc1</Trans>
                </p>
                <p>
                  <Trans ns="resources">Developer desc2</Trans>
                </p>
                <p>
                  <a
                    href="https://developer.confluxnetwork.org/docs/introduction/en/conflux_overview"
                    className="btn btn-primary btn-ex-link"
                    target="_blank"
                  >
                    <Trans ns="resources">Go to Developer Documents</Trans>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={assetsStyles.section}>
            <h3>
              <Trans ns="resources">Documents</Trans>
            </h3>
            <div className="row">
              <div className="col-12 col-md-6">
                <p>
                  <Trans ns="resources">Documents desc1</Trans>
                </p>
                <p>
                  <Trans ns="resources">Documents desc2</Trans>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  <Trans ns="resources">Documents desc3</Trans>
                </p>
                <p>
                  <Trans ns="resources">Documents desc4</Trans>
                </p>
              </div>
            </div>
          </div>
          <div className={`${assetsStyles.section} ${assetsStyles.presentation}`}>
            <h4>
              <Trans ns="resources">Presentation</Trans>
            </h4>
            <div className="tabs">
              <div className="tab-links">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActivedTab(1)}
                  onKeyDown={() => setActivedTab(1)}
                  className={activedTab === 1 ? 'active' : ''}
                >
                  <p>
                    <Trans ns="resources">issue</Trans>
                  </p>
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActivedTab(2)}
                  onKeyDown={() => setActivedTab(2)}
                  className={activedTab === 2 ? 'active' : ''}
                >
                  <div className="flex-column has-subtitle">
                    <p>
                      <Trans ns="resources">naive</Trans>
                    </p>
                    <p className="sub-sub-title">
                      <Trans ns="resources">naive2</Trans>
                    </p>
                  </div>
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActivedTab(3)}
                  onKeyDown={() => setActivedTab(3)}
                  className={activedTab === 3 ? 'active' : ''}
                >
                  <p>
                    <Trans ns="resources">conflux</Trans>
                  </p>
                </div>
                <div>
                  <a
                    href="/files/Conflux_Technical_Presentation_20200309.pdf"
                    className="btn btn-primary btn-ex-link-secondary"
                    target="_blank"
                  >
                    <Trans ns="resources">Download Technical Presentation</Trans>
                  </a>
                </div>
              </div>
              <div className={`tab-content ${activedTab === 1 ? 'show' : ''}`}>
                <p className="sub-title">
                  <Trans ns="resources">issue</Trans>
                </p>
                <img src={presentation1} alt={tAssets('issue')} />
                <ul>
                  <li>
                    <Trans ns="resources">issue desc1</Trans>
                  </li>
                  <li>
                    <Trans ns="resources">issue desc2</Trans>
                  </li>
                  <li>
                    <Trans ns="resources">issue desc3</Trans>
                  </li>
                </ul>
              </div>
              <div className={`tab-content ${activedTab === 2 ? 'show' : ''}`}>
                <p className="sub-title">
                  <Trans ns="resources">naive</Trans>
                  <p className="sub-sub-title">
                    <Trans ns="resources">naive2</Trans>
                  </p>
                </p>
                <img src={presentation2} alt={tAssets('naive')} />
                <ul>
                  <li>
                    <Trans ns="resources">naive desc1</Trans>
                  </li>
                  <li>
                    <Trans ns="resources">naive desc2</Trans>
                  </li>
                  <li>
                    <Trans ns="resources">naive desc3</Trans>
                  </li>
                </ul>
              </div>
              <div className={`tab-content ${activedTab === 3 ? 'show' : ''}`}>
                <p className="sub-title">
                  <Trans ns="resources">conflux</Trans>
                </p>
                <img src={presentation3} alt={tAssets('conflux')} />
                <ul>
                  <li>
                    <Trans ns="resources">conflux desc1</Trans>
                  </li>
                  <li>
                    <Trans ns="resources">conflux desc2</Trans>
                  </li>
                  <li>
                    <Trans ns="resources">conflux desc3</Trans>
                  </li>
                </ul>
                <p>
                  <Trans ns="resources">conflux desc4</Trans>
                </p>
              </div>
            </div>
            <div className="download">
              <a
                href="/files/Conflux_Technical_Presentation_20200309.pdf"
                className="btn btn-primary btn-ex-link-secondary"
                target="_blank"
              >
                <Trans ns="resources">Download Technical Presentation</Trans>
              </a>
            </div>
          </div>
          <div className={`${assetsStyles.section} ${assetsStyles.techdoc}`}>
            <h4>
              <Trans ns="resources">Technical Documents</Trans>
            </h4>
            <ul>
              <li>
                <a href="https://www.usenix.org/conference/atc20/presentation/li-chenxin" target="_blank">
                  <span>
                    <Trans ns="resources">Technical desc11</Trans>
                  </span>
                  <span className="author">
                    <Trans ns="resources">Technical desc12</Trans>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://arxiv.org/abs/2006.01072" target="_blank">
                  <span>
                    <Trans ns="resources">Technical desc21</Trans>
                  </span>
                  <span className="author">
                    <Trans ns="resources">Technical desc22</Trans>
                  </span>
                </a>
              </li>
              <li>
                <a href="/files/Conflux_Protocol_Specification_20201020.pdf" target="_blank">
                  <span>
                    <Trans ns="resources">Technical desc31</Trans>
                  </span>
                  <span className="author">
                    <Trans ns="resources">Technical desc32</Trans>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className={`${assetsStyles.section} ${assetsStyles.tools}`}>
            <h3>
              <Trans ns="resources">Tools</Trans>
            </h3>
            <div className="row">
              <div className="col-12 col-lg-7">
                <p className="title">
                  <Trans ns="resources">Conflux Studio</Trans>
                </p>
                <p>
                  <Trans ns="resources">Conflux Studio Desc</Trans>
                </p>
                <p>
                  <a href="https://github.com/ObsidianLabs/ConfluxStudio" className="btn btn-primary btn-ex-link" target="_blank">
                    <Trans ns="resources">Download Conflux Studio</Trans>
                  </a>
                </p>
              </div>
              <div className="col-12 col-lg-5">
                <p className="title">
                  <Trans ns="resources">Conflux Truffle</Trans>
                </p>
                <p>
                  <Trans ns="resources">Conflux Truffle desc</Trans>
                </p>
                <p>
                  <a href="https://github.com/Conflux-Chain/conflux-truffle" className="btn btn-primary btn-ex-link" target="_blank">
                    <Trans ns="resources">Install Truffle</Trans>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
