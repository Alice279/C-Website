import React from 'react'
import { Link, Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import indexStyles from './index.module.less'
// import bgValue from '../assets/images/index/bg-value.png'
import bgEcosystem from '../assets/images/index/bg-ecosystem-mobile.png'
import feature1 from '../assets/images/index/feature1.png'
import feature2 from '../assets/images/index/feature2.png'
import feature3 from '../assets/images/index/feature3.png'
import logo1 from '../assets/images/index/logo1.png'
import logo2 from '../assets/images/index/logo2.png'
import logo3 from '../assets/images/index/logo3.png'
import logo4 from '../assets/images/index/logo4.png'
import logo5 from '../assets/images/index/logo5.png'
import logo6 from '../assets/images/index/logo6.png'
import logo7 from '../assets/images/index/logo7.png'

// import Notice from '../components/Notice'

// TODO animation

export default () => {
  const { language } = useI18next()
  const { t } = useTranslation('seo')
  const { t: tIndex } = useTranslation('index')

  return (
    <Layout type="dark">
      <SEO
        title={t('Home title')}
        keywords={t('Home keywords', { returnObjects: true })}
        lang={language}
        description={t('Home description')}
      />
      <div className={indexStyles.index}>
        {/* <Notice /> */}
        <section className={indexStyles.ad}>
          <div className="container d-flex align-items-center">
            <div className="row">
              <div className="col-12">
                <h1 className="col-lg-10">
                  <Trans ns="index">Slogan</Trans>
                </h1>
                <h2 className="col-lg-9">
                  <Trans ns="index">Slogan Desc</Trans>
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/* 
        <section className={indexStyles.value}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-lg-6">
                <img src={bgValue} alt={tIndex('Internet of Value')} />
              </div>
              <div className="col-12 col-lg-6">
                <h2>
                  <Trans ns="index">Internet of Value</Trans>
                </h2>
                <p>
                  <Trans ns="index">Internet of Value Desc1</Trans>
                </p>
                <p>
                  <Trans ns="index">Internet of Value Desc2</Trans>
                </p>
              </div>
            </div>
          </div>
        </section>
        */}
        <section className={indexStyles.feature}>
          <div className="container">
            <h2>
              <Trans ns="index">Key features</Trans>
            </h2>
            <div className="row">
              <div className="col-12 col-md-4">
                <img src={feature1} alt={tIndex('Key features title1')} />
                <p className="title">
                  <Trans ns="index">Key features title1</Trans>
                </p>
                <p>
                  <Trans ns="index">Key features desc1</Trans>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <img src={feature2} alt={tIndex('Key features title2')} />
                <p className="title">
                  <Trans ns="index">Key features title2</Trans>
                </p>
                <p>
                  <Trans ns="index">Key features desc2</Trans>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <img src={feature3} alt={tIndex('Key features title3')} />
                <p className="title">
                  <Trans ns="index">Key features title3</Trans>
                </p>
                <p>
                  <Trans ns="index">Key features desc3</Trans>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={indexStyles.partner}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">
                <h2>
                  <Trans ns="index">Our Partners</Trans>
                </h2>
                <p className="subtitle">
                  <Trans ns="index">Our Partners desc</Trans>
                </p>
              </div>
              <div className="col-12">
                <ul>
                  <li>
                    <img src={logo1} alt="SEQUOIA" />
                  </li>
                  <li>
                    <img src={logo2} alt="f2pool" />
                  </li>
                  <li>
                    <img src={logo3} alt="Huobi Capital" />
                  </li>
                  <li>
                    <img src={logo4} alt="Shanghai Tree-Graph Blockchain Research Institute" />
                  </li>
                  <li>
                    <img src={logo5} alt="Tsinghua University" />
                  </li>
                  <li>
                    <img src={logo6} alt="University of Toronto" />
                  </li>
                  <li>
                    <img src={logo7} alt="MetaStable" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={indexStyles.future}>
          <div className="container">
            <h2>
              <Trans ns="index">Build the Decentralized Future</Trans>
            </h2>
            <p className="subtitle">
              <Trans ns="index">Build the Decentralized Future desc</Trans>
            </p>
            <div className="row">
              <div className="col-12 col-md-4">
                <p className="title">
                  <Trans ns="index">Build the Decentralized Future title1</Trans>
                </p>
                <p>
                  <Trans ns="index">Build the Decentralized Future desc1</Trans>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <p className="title">
                  <Trans ns="index">Build the Decentralized Future title2</Trans>
                </p>
                <p>
                  <Trans ns="index">Build the Decentralized Future desc2</Trans>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <p className="title">
                  <Trans ns="index">Build the Decentralized Future title3</Trans>
                </p>
                <p>
                  <Trans ns="index">Build the Decentralized Future desc3</Trans>
                </p>
              </div>
            </div>
            <Link to="/developers/resources" className="btn btn-primary btn-in-link">
              <Trans ns="index">Get Started</Trans>
            </Link>
          </div>
        </section>
        <section className={indexStyles.program}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">
                <h2>
                  <Trans ns="index">Ecosystem Grants Program</Trans>
                </h2>
                <p className="subtitle">
                  <Trans ns="index">Ecosystem Grants Program desc</Trans>
                </p>
                <Link to="/developers/grants" className="btn btn-primary btn-in-link">
                  <Trans ns="index">Learn More About Grants</Trans>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className={indexStyles.ecosystem}>
          <div className="container d-flex align-items-center">
            <div className="row">
              <div className="col-12 block">
                <img src={bgEcosystem} alt={tIndex('Ecosystem')} />
              </div>
              <div className="col-12 col-lg-8 offset-lg-2">
                <h2>
                  <Trans ns="index">Ecosystem</Trans>
                </h2>
                <p>
                  <Trans ns="index">Ecosystem desc</Trans>
                </p>
                <Link to="/ecosystem" className="btn btn-primary btn-in-link">
                  <Trans ns="index">Explore Ecosystem</Trans>
                </Link>
              </div>
              <div className="col-12 block">
                <img src={bgEcosystem} alt={tIndex('Ecosystem')} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
