import React, { useState } from 'react'
import { Link, Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import joinusStyles from './joinus.module.less'

import twitterLight from '../../assets/images/light/twitter_24px.png'
import twitterDark from '../../assets/images/dark/twitter_24px.png'
import telegramLight from '../../assets/images/light/telegram_24px.png'
import telegramDark from '../../assets/images/dark/telegram_24px.png'
import discordLight from '../../assets/images/light/discord_24px.png'
import discordDark from '../../assets/images/dark/discord_24px.png'
import mediumLight from '../../assets/images/light/medium_24px.png'
import mediumDark from '../../assets/images/dark/medium_24px.png'
import gitLight from '../../assets/images/light/git_24px.png'
import gitDark from '../../assets/images/dark/git_24px.png'
import weiboLight from '../../assets/images/light/weibo_24px.png'
import weiboDark from '../../assets/images/dark/weibo_24px.png'
import kakaotalkLight from '../../assets/images/light/kakao-talk_24px.png'
import kakaotalkDark from '../../assets/images/dark/kakao-talk_24px.png'
import wechatLight from '../../assets/images/light/wechat_24px.png'
import wechatDark from '../../assets/images/dark/wechat_24px.png'
import wechatQrcode from '../../assets/images/wechat-qrcode.png'
import youtubeLight from '../../assets/images/light/youtube_24px.png'
import youtubeDark from '../../assets/images/dark/youtube_24px.png'
import naverLight from '../../assets/images/light/naver_24px.png'
import naverDark from '../../assets/images/dark/naver_24px.png'
import confluxLight from '../../assets/images/light/conflux_24px.png'
import confluxDark from '../../assets/images/dark/conflux_24px.png'
import redditLight from '../../assets/images/light/reddit_24px.png'
import redditDark from '../../assets/images/dark/reddit_24px.png'

import pic1 from '../../assets/images/community/joinus-pic1.png'

export default ({ type = 'light' }) => {
  const { language } = useI18next()
  const { t } = useTranslation('seo')
  const [show, setShow] = useState(false)

  return (
    <Layout type={type} className={`${show ? 'lock' : ''}`}>
      <SEO
        title={t('Join title')}
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
      <div className={joinusStyles.joinus}>
        <div className={`sub-header container ${show ? 'show' : ''}`}>
          <h3>
            <Trans ns="header">Community</Trans>
          </h3>
          <div
            role="button"
            tabIndex={0}
            className={`current ${show ? '' : 'collapse'}`}
            onClick={() => setShow(!show)}
            onKeyDown={() => setShow(!show)}
          >
            <Trans ns="header">Join Us</Trans>
          </div>
          <ul className={show ? 'show' : ''}>
            <li>
              <Link to="/community/media">
                <Trans ns="header">Media Feed</Trans>
              </Link>
            </li>
            <li>
              <a href="#" className="active">
                <Trans ns="header">Join Us</Trans>
              </a>
            </li>
          </ul>
        </div>
        <section className={joinusStyles.ad}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">
                <p className="link-title">
                  <Trans ns="joinus">COMMUNITY</Trans>
                </p>
                <h1>
                  <Trans ns="joinus">Join Us</Trans>
                </h1>
                <p className="subtitle">
                  <Trans ns="joinus">Join Us desc1</Trans>
                </p>
                <p>
                  <Trans ns="joinus">Join Us desc2</Trans>
                </p>
                <ul className="social d-flex justify-content-center">
                  <li>
                    <a href="https://twitter.com/@Conflux_Network" target="_blank">
                      <img src={type === 'light' ? twitterLight : twitterDark} alt="twitter" />
                    </a>
                    <a href={type === 'ko' ? 'https://t.me/ConfluxKorea' : 'https://t.me/Conflux_English'} target="_blank">
                      <img src={type === 'light' ? telegramLight : telegramDark} alt="telegram" />
                    </a>
                    <a href="https://discord.com/invite/aCZkf2C" target="_blank">
                      <img src={type === 'light' ? discordLight : discordDark} alt="discord" />
                    </a>
                    <a href="https://medium.com/@ConfluxNetwork" target="_blank">
                      <img src={type === 'light' ? mediumLight : mediumDark} alt="medium" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/conflux-chain" target="_blank">
                      <img src={type === 'light' ? gitLight : gitDark} alt="git" />
                    </a>
                    <a href="https://weibo.com/confluxchain" target="_blank">
                      <img src={type === 'light' ? weiboLight : weiboDark} alt="weibo" />
                    </a>
                    <a href="https://open.kakao.com/o/gmyEjl2b" target="_blank">
                      <img src={type === 'light' ? kakaotalkLight : kakaotalkDark} alt="kakaotalk" />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      <img src={type === 'light' ? wechatLight : wechatDark} alt="wechat" />
                      <img className="qrcode" src={wechatQrcode} alt="wechat qrcode" />
                    </a>
                  </li>
                  <li className="last-a">
                    <a href="https://www.youtube.com/channel/UCFSTmjoSU8jn6DE_4V2TIzA" target="_blank">
                      <img src={type === 'light' ? youtubeLight : youtubeDark} alt="youtube" />
                    </a>
                    <a href="https://blog.naver.com/conflux-chain" target="_blank">
                      <img src={type === 'light' ? naverLight : naverDark} alt="naver" />
                    </a>
                    <a href="https://forum.conflux.fun/" target="_blank">
                      <img src={type === 'light' ? confluxLight : confluxDark} alt="conflux" />
                    </a>
                    <a href="https://www.reddit.com/r/Conflux_Network/" target="_blank">
                      <img src={type === 'light' ? redditLight : redditDark} alt="reddit" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={joinusStyles.education}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-lg-6">
                <img className="m-auto d-flex" src={pic1} alt="conflux" />
              </div>
              <div className="col-12 col-lg-6">
                <div className="wrapper">
                  <h2>
                    <Trans ns="joinus">Education</Trans>
                  </h2>
                  <p>
                    <Trans ns="joinus">Education desc1</Trans>
                  </p>
                  <p>
                    <Trans ns="joinus">Education desc2</Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={joinusStyles.ambassador}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">
                <h2>
                  <Trans ns="joinus">Ambassador</Trans>
                </h2>
                <p>
                  <Trans ns="joinus">Ambassador desc1</Trans>
                </p>
                <p>
                  <Trans ns="joinus">Ambassador desc2</Trans>
                </p>
                <a href="https://confluxnetwork.typeform.com/to/oGonGPPJ" className="btn btn-primary btn-ex-link" target="_blank">
                  <Trans ns="joinus">Become an Ambassador</Trans>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={joinusStyles.question}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">
                <h2>
                  <Trans ns="joinus">Question</Trans>
                </h2>
                <a href="mailto:hello@confluxnetwork.org" className="btn btn-primary btn-mail-link">
                  <Trans ns="joinus">Question Email</Trans>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
