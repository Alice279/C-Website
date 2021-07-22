import React from 'react'
import { Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ecosystemStyles from './ecosystem.module.less'
import scan from '../assets/images/ecosystem/scan.png'
import portal from '../assets/images/ecosystem/portal.png'
import bounty from '../assets/images/ecosystem/bounty.png'
import moonswap from '../assets/images/ecosystem/moonswap.png'
import moondex from '../assets/images/ecosystem/moondex.png'
import flux from '../assets/images/ecosystem/flux.png'
import confi from '../assets/images/ecosystem/confi.png'
import ins3 from '../assets/images/ecosystem/INS3.png'

export default () => {
  const { language } = useI18next()
  const { t } = useTranslation('seo')
  const url = language === 'zh' ? 'https://defi.confluxnetwork.org/zh/explore/' : 'https://defi.confluxnetwork.org/en/explore/'
  return (
    <Layout type="dark">
      <SEO
        title={t('Ecosystem title')}
        keywords={t('Home keywords', { returnObjects: true })}
        lang={language}
        description={t('Home description')}
      />
      <div className={ecosystemStyles.ecosystem}>
        <section className={ecosystemStyles.subheader}>
          <p className="need-bg">
            <Trans ns="header">Ecosystem</Trans>
          </p>
        </section>
        <section className={ecosystemStyles.city}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <h1>
                  <Trans ns="ecosystem">Ecosystem</Trans>
                </h1>
                <p>
                  <Trans ns="ecosystem">Description</Trans>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={ecosystemStyles.defi}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4">
                <p className="title">
                  <Trans ns="ecosystem">Conflux Defi</Trans>
                </p>
                <p className={language === 'zh' ? 'desc-zh' : 'desc'}>
                  <Trans ns="ecosystem">Conflux Defi desc</Trans>
                </p>
                <a href="https://defi.confluxnetwork.org/en/" className="btn btn-primary btn-ex-link" target="_blank">
                  <Trans ns="ecosystem">Go to Conflux Defi</Trans>
                </a>
              </div>
              <div className="col-12 col-lg-4">
                <p className="title">
                  <Trans ns="ecosystem">ShuttleFlow</Trans>
                </p>
                <p className={language === 'zh' ? 'desc-zh' : 'desc'}>
                  <Trans ns="ecosystem">ShuttleFlow desc</Trans>
                </p>
                <a href="https://shuttleflow.io/" className="btn btn-primary btn-ex-link" target="_blank">
                  <Trans ns="ecosystem">Go to ShuttleFlow</Trans>
                </a>
              </div>
              <div className="col-12 col-lg-4">
                <p className="title">
                  <Trans ns="ecosystem">Dual Protocol</Trans>
                </p>
                <p className={language === 'zh' ? 'desc-zh' : 'desc'}>
                  <Trans ns="ecosystem">Dual Protocol desc</Trans>
                </p>
                <a href="https://defi.confluxnetwork.org/en/dual-protocol/" className="btn btn-primary btn-ex-link" target="_blank">
                  <Trans ns="ecosystem">Go to Conflux Defi</Trans>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={ecosystemStyles.structure}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <Trans ns="ecosystem">Infrastructure</Trans>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <img src={scan} alt="scan logo" />
                <p className="title">ConfluxScan</p>
                {/* <p className="desc"> */}
                <p className={language === 'zh' ? 'desc-zh' : 'desc'}>
                  <Trans ns="ecosystem">ConfluxScan desc</Trans>
                </p>
                <a href="https://confluxscan.io/" className="btn btn-primary btn-ex-link" target="_blank">
                  <Trans ns="ecosystem">Go to ConfluxScan</Trans>
                </a>
              </div>
              <div className="col-12 col-lg-4">
                <img src={portal} alt="portal logo" />
                <p className="title">ConfluxPortal</p>
                {/* <p className="desc"> */}
                <p className={language === 'zh' ? 'desc-zh' : 'desc'}>
                  <Trans ns="ecosystem">ConfluxPortal desc</Trans>
                </p>
                <a href="https://portal.confluxnetwork.org/" className="btn btn-primary btn-ex-link" target="_blank">
                  <Trans ns="ecosystem">Install ConfluxPortal</Trans>
                </a>
              </div>
              <div className="col-12 col-lg-4">
                <img src={bounty} alt="bounty logo" />
                <p className="title">ConfluxBounty</p>
                {/* <p className="desc"> */}
                <p className={language === 'zh' ? 'desc-zh' : 'desc'}>
                  <Trans ns="ecosystem">ConfluxBounty desc</Trans>
                </p>
                <a href="https://bounty.confluxnetwork.org" className="btn btn-primary btn-ex-link" target="_blank">
                  <Trans ns="ecosystem">Go to ConfluxBounty</Trans>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={ecosystemStyles.product}>
          <div className="container">
            <div className="row">
              <div className="col-12 eco-title">
                <h2>
                  <Trans ns="ecosystem">Ecosystem Products</Trans>
                </h2>
                <a href={url} className="btn btn-primary btn-in-link" target="_blank">
                  <Trans ns="ecosystem">see more</Trans>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <img src={moonswap} alt="moonswap logo" />
                <p className="title">MoonSwap</p>
                <p className="desc">
                  <Trans ns="ecosystem">MoonSwap desc</Trans>
                </p>
              </div>
              <div className="col-12 col-lg-4">
                <img src={moondex} alt="moondex logo" />
                <p className="title">MoonDEX</p>
                <p className="desc">
                  <Trans ns="ecosystem">MoonDEX desc</Trans>
                </p>
              </div>
              <div className="col-12 col-lg-4">
                <img src={flux} alt="flux logo" />
                <p className="title">Flux</p>
                <p className="desc">
                  <Trans ns="ecosystem">Flux desc</Trans>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <img src={confi} alt="confi logo" />
                <p className="title">Tspace</p>
                <p className="desc">
                  <Trans ns="ecosystem">Confi City desc</Trans>
                </p>
              </div>
              <div className="col-12 col-lg-4">
                <img src={ins3} alt="confi logo" />
                <p className="title">Ins3</p>
                <p className="desc">
                  <Trans ns="ecosystem">ins3 desc</Trans>
                </p>
              </div>
            </div>
            <a href={url} className="btn btn-primary btn-in-link mobile-a" target="_blank">
              <Trans ns="ecosystem">see more</Trans>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}
