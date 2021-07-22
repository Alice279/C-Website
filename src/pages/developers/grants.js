import React, { useState } from 'react'
import { Link, Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import grantsStyles from './grants.module.less'

import bgBlock from '../../assets/images/developers/bgGrantsBlock.png'

export default () => {
  const { language } = useI18next()
  const { t } = useTranslation('seo')
  const [show, setShow] = useState(false)
  const [activedTab, setActivedTab] = useState(1)

  return (
    <Layout type="light" className={`${show ? 'lock' : ''}`}>
      <SEO
        title={t('Grants title')}
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
      <div className={grantsStyles.grants}>
        <div className={`sub-header container ${show ? 'show' : ''}`}>
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
            <Trans ns="header">Grants</Trans>
          </div>
          <ul className={show ? 'show' : ''}>
            <li>
              <Link to="/developers/resources">
                <Trans ns="header">Resources</Trans>
              </Link>
            </li>
            <li>
              <a href="#" className="active">
                <Trans ns="header">Grants</Trans>
              </a>
            </li>
          </ul>
        </div>
        <section className={grantsStyles.head}>
          <div className="container">
            <div className="row m-auto d-flex align-items-center flex-row-reverse">
              <div className="col-12 col-lg-6 block">
                <img src={bgBlock} alt="Block" />
              </div>
              <div className="col-12 col-lg-6">
                <p className="link-title">
                  <Trans ns="header">Developers</Trans>
                </p>
                <h1>
                  <Trans ns="grants">Grants</Trans>
                </h1>
                <h3>
                  <Trans ns="grants">Grants desc</Trans>
                </h3>
                <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" className="btn btn-primary btn-ex-link" target="_blank">
                  <Trans ns="grants">Apply</Trans>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={grantsStyles.build}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <h2>
                  <Trans ns="grants">Let&#39;s Start Building</Trans>
                </h2>
                <p className="subtitle">
                  <Trans ns="grants">Build desc</Trans>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={grantsStyles.categories}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <Trans ns="grants">Grant Categories</Trans>
                </h2>
                <div className="tabs">
                  <div className="tab-links">
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setActivedTab(1)}
                      onKeyDown={() => setActivedTab(1)}
                      className={activedTab === 1 ? 'active' : ''}
                    >
                      <div className="flex-column has-subtitle">
                        <p>
                          <Trans ns="grants">Categories 1</Trans>
                        </p>
                        <p className="sub-sub-title">
                          <Trans ns="grants">Categories 1 desc</Trans>
                        </p>
                      </div>
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
                          <Trans ns="grants">Categories 2</Trans>
                        </p>
                        <p className="sub-sub-title">
                          <Trans ns="grants">Categories 2 desc</Trans>
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
                      <div className="flex-column has-subtitle">
                        <p>
                          <Trans ns="grants">Categories 3</Trans>
                        </p>
                        <p className="sub-sub-title">
                          <Trans ns="grants">Categories 3 desc</Trans>
                        </p>
                      </div>
                    </div>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setActivedTab(4)}
                      onKeyDown={() => setActivedTab(4)}
                      className={activedTab === 4 ? 'active' : ''}
                    >
                      <div className="flex-column has-subtitle">
                        <p>
                          <Trans ns="grants">Categories 4</Trans>
                        </p>
                        <p className="sub-sub-title">
                          <Trans ns="grants">Categories 4 desc</Trans>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`tab-content ${activedTab === 1 ? 'show' : ''}`}>
                    <p className="sub-title">
                      <Trans ns="grants">Categories 1</Trans>
                      <p className="sub-sub-title">
                        <Trans ns="grants">Categories 1 desc</Trans>
                      </p>
                    </p>
                    <ul>
                      <li>
                        <Trans ns="grants">Categories 1 content 1</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 1 content 2</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 1 content 3</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 1 content 4</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 1 content 5</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 1 content 6</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 1 content 7</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 1 content 8</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 1 content 9</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 1 content 10</Trans>
                      </li>
                    </ul>
                  </div>
                  <div className={`tab-content ${activedTab === 2 ? 'show' : ''}`}>
                    <p className="sub-title">
                      <Trans ns="grants">Categories 2</Trans>
                      <p className="sub-sub-title">
                        <Trans ns="grants">Categories 2 desc</Trans>
                      </p>
                    </p>
                    <ul>
                      <li>
                        <Trans ns="grants">Categories 2 content 1</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 2 content 2</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 2 content 3</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 2 content 4</Trans>
                      </li>
                    </ul>
                  </div>
                  <div className={`tab-content ${activedTab === 3 ? 'show' : ''}`}>
                    <p className="sub-title">
                      <Trans ns="grants">Categories 3</Trans>
                      <p className="sub-sub-title">
                        <Trans ns="grants">Categories 3 desc</Trans>
                      </p>
                    </p>
                    <ul>
                      <li>
                        <Trans ns="grants">Categories 3 content 1</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 3 content 2</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 3 content 3</Trans>
                      </li>
                    </ul>
                  </div>
                  <div className={`tab-content ${activedTab === 4 ? 'show' : ''}`}>
                    <p className="sub-title">
                      <Trans ns="grants">Categories 4</Trans>
                      <p className="sub-sub-title">
                        <Trans ns="grants">Categories 4 desc</Trans>
                      </p>
                    </p>
                    <ul>
                      <li>
                        <Trans ns="grants">Categories 4 content 1</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 4 content 2</Trans>
                      </li>
                      <li>
                        <Trans ns="grants">Categories 4 content 3</Trans>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={grantsStyles.explore}>
          <div className="container">
            <h2>
              <Trans ns="grants">Explore Open Grants</Trans>
            </h2>
            <div className="row">
              <div className="col-12 col-lg-6 outer-left">
                <ul>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore left 1 title</Trans>
                    </a>
                    <Trans ns="grants">explore left 1 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore left 2 title</Trans>
                    </a>
                    <Trans ns="grants">explore left 2 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore left 3 title</Trans>
                    </a>
                    <Trans ns="grants">explore left 3 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore left 4 title</Trans>
                    </a>
                    <Trans ns="grants">explore left 4 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore left 5 title</Trans>
                    </a>
                    <Trans ns="grants">explore left 5 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore left 6 title</Trans>
                    </a>
                    <Trans ns="grants">explore left 6 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore left 7 title</Trans>
                    </a>
                    <Trans ns="grants">explore left 7 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore left 8 title</Trans>
                    </a>
                    <Trans ns="grants">explore left 8 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore left 9 title</Trans>
                    </a>
                    <Trans ns="grants">explore left 9 content</Trans>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-6 outer-right">
                <ul>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore right 1 title</Trans>
                    </a>
                    <Trans ns="grants">explore right 1 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore right 2 title</Trans>
                    </a>
                    <Trans ns="grants">explore right 2 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore right 3 title</Trans>
                    </a>
                    <Trans ns="grants">explore right 3 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore right 4 title</Trans>
                    </a>
                    <Trans ns="grants">explore right 4 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore right 5 title</Trans>
                    </a>
                    <Trans ns="grants">explore right 5 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore right 6 title</Trans>
                    </a>
                    <Trans ns="grants">explore right 6 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore right 7 title</Trans>
                    </a>
                    <Trans ns="grants">explore right 7 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore right 8 title</Trans>
                    </a>
                    <Trans ns="grants">explore right 8 content</Trans>
                  </li>
                  <li>
                    <a href="https://confluxnetwork.typeform.com/to/U9mtOyQV" target="_blank">
                      <Trans ns="grants">explore right 9 title</Trans>
                    </a>
                    <Trans ns="grants">explore right 9 content</Trans>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={grantsStyles.rewards}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1">
                <h2>
                  <Trans ns="grants">Rewards</Trans>
                </h2>
                <p className="subtitle">
                  <Trans ns="grants">Rewards desc1</Trans>
                </p>
                <p className="subtitle">
                  <Trans ns="grants">Rewards desc2</Trans>
                </p>
              </div>
              <div className="col-12 d-flex outer justify-content-between">
                <div className="col-lg-6">
                  <div className="wrapper">
                    <p className="title">
                      <Trans ns="grants">Tier 1</Trans>
                    </p>
                    <p>
                      <Trans ns="grants">Tier 1 desc</Trans>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="wrapper">
                    <p className="title">
                      <Trans ns="grants">Tier 2</Trans>
                    </p>
                    <p>
                      <Trans ns="grants">Tier 2 desc</Trans>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="wrapper">
                  <p className="title">
                    <Trans ns="grants">Tier 3</Trans>
                  </p>
                  <p>
                    <Trans ns="grants">Tier 3 desc</Trans>
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="wrapper">
                  <p>
                    <Trans ns="grants">Tier desc</Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={grantsStyles.eligibility}>
          <div className="container">
            <div className="row m-auto d-flex align-items-start">
              <div className="col-12 col-lg-6">
                <h2>
                  <Trans ns="grants">Project Eligibility</Trans>
                </h2>
              </div>
              <div className="col-12 col-lg-6">
                <ul>
                  <li>
                    <Trans ns="grants">Eligibility desc1</Trans>
                  </li>
                  <li>
                    <Trans ns="grants">Eligibility desc2</Trans>
                  </li>
                  <li>
                    <Trans ns="grants">Eligibility desc3</Trans>
                  </li>
                  <li>
                    <Trans ns="grants">Eligibility desc4</Trans>
                  </li>
                  <li>
                    <Trans ns="grants">Eligibility desc5</Trans>
                  </li>
                  <li>
                    <Trans ns="grants">Eligibility desc6</Trans>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={grantsStyles.question}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">
                <h2>
                  <Trans ns="grants">Questions</Trans>
                </h2>
                <a href="https://forum.conflux.fun/t/topic/1586" className="btn btn-primary btn-ex-link" target="_blank">
                  <Trans ns="grants">Go to FAQ</Trans>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
