/**
 * Footer Component
 */

import React from 'react'
import { Link, Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import footerStyles from './Footer.module.less'
import logoSymbolLight from '../assets/images/light/logo-symbol.png'
import logoSymbolDark from '../assets/images/dark/logo-symbol.png'
import iconTopLight from '../assets/images/light/icon-top.png'
import iconTopDark from '../assets/images/dark/icon-top.png'
import twitterLight from '../assets/images/light/twitter_24px.png'
import twitterDark from '../assets/images/dark/twitter_24px.png'
import telegramLight from '../assets/images/light/telegram_24px.png'
import telegramDark from '../assets/images/dark/telegram_24px.png'
import discordLight from '../assets/images/light/discord_24px.png'
import discordDark from '../assets/images/dark/discord_24px.png'
import mediumLight from '../assets/images/light/medium_24px.png'
import mediumDark from '../assets/images/dark/medium_24px.png'
import gitLight from '../assets/images/light/git_24px.png'
import gitDark from '../assets/images/dark/git_24px.png'
import weiboLight from '../assets/images/light/weibo_24px.png'
import weiboDark from '../assets/images/dark/weibo_24px.png'
import kakaotalkLight from '../assets/images/light/kakao-talk_24px.png'
import kakaotalkDark from '../assets/images/dark/kakao-talk_24px.png'
import wechatLight from '../assets/images/light/wechat_24px.png'
import wechatDark from '../assets/images/dark/wechat_24px.png'
import wechatQrcode from '../assets/images/wechat-qrcode.png'
import youtubeLight from '../assets/images/light/youtube_24px.png'
import youtubeDark from '../assets/images/dark/youtube_24px.png'
import naverLight from '../assets/images/light/naver_24px.png'
import naverDark from '../assets/images/dark/naver_24px.png'
import confluxLight from '../assets/images/light/conflux_24px.png'
import confluxDark from '../assets/images/dark/conflux_24px.png'
import redditLight from '../assets/images/light/reddit_24px.png'
import redditDark from '../assets/images/dark/reddit_24px.png'

export default ({ type = 'light' }) => {
  const { languages, originalPath, language } = useI18next()
  const { t } = useTranslation('seo')
  return (
    <footer className={footerStyles.footer}>
      <div className={`container ${type}`}>
        <div className="row">
          <div className="col col-7 col-lg-2 logo">
            <Link className={footerStyles.logo} to="/" title={t('Home title')}>
              <img src={type === 'light' ? logoSymbolLight : logoSymbolDark} alt={t('Home title')} />
            </Link>
          </div>
          <div className="col col-5 mobile-lang">
            <ul>
              <h4>
                <Trans ns="footer">LANGUAGES</Trans>
              </h4>
              <li>
                {languages.map((lng) =>
                  lng !== language ? (
                    <Link key={lng} to={originalPath} language={lng}>
                      <Trans>lang {lng}</Trans>
                    </Link>
                  ) : null
                )}
              </li>
            </ul>
          </div>
          <div className="col col-12 col-lg-8 nav-links">
            <div className="row">
              <div className="col col-lg-3 col-7">
                <ul>
                  <h4>
                    <Trans ns="footer">CONFLUX NETWORK</Trans>
                  </h4>
                  <li>
                    <Link to="/developers/resources">
                      <Trans ns="footer">About Conflux Network</Trans>
                    </Link>
                    <Link to="/ecosystem">
                      <Trans ns="footer">Ecosystem</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col col-lg-2 col-5">
                <ul>
                  <h4>
                    <Trans ns="footer">COMPANY</Trans>
                  </h4>
                  <li>
                    <Link to="/about">
                      <Trans ns="footer">About Us</Trans>
                    </Link>
                    <a href="https://www.figma.com/file/DiFjJ9P45xIa2WRHpqKf09/Conflux-Brand-Guidelines?node-id=0%3A1" target="_blank">
                      <Trans ns="footer">Brand</Trans>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col col-lg-2 col-7">
                <ul>
                  <h4>
                    <Trans ns="footer">COMMUNITY</Trans>
                  </h4>
                  <li>
                    <Link to="/community/media">
                      <Trans ns="footer">Media Feed</Trans>
                    </Link>
                    <Link to="/community/joinus">
                      <Trans ns="footer">Join Us</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col col-lg-3 col-5">
                <ul>
                  <h4>
                    <Trans ns="footer">DEVELOPERS</Trans>
                  </h4>
                  <li>
                    <Link to="/developers/resources">
                      <Trans ns="footer">Resources</Trans>
                    </Link>
                    <Link to="/developers/grants">
                      <Trans ns="footer">Grants</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col col-lg-2 col-6 pc-lang">
                <ul>
                  <h4>
                    <Trans ns="footer">LANGUAGES</Trans>
                  </h4>
                  <li>
                    {languages.map((lng) => (
                      <Link key={lng} to={originalPath} language={lng}>
                        <Trans>lang {lng}</Trans>
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col col-24 address">
                <ul className="social">
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
          <div className="col col-12 col-lg-2 d-flex justify-content-end gotop">
            <a className={footerStyles.goTop} href="#" title="Back to Top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={type === 'light' ? iconTopLight : iconTopDark} alt="Back to Top" />
            </a>
          </div>
        </div>
        <div className="row copyright">
          <div className="col col-12 col-lg-6">
            <p>© 2021 Conflux. All Rights Reserved.</p>
          </div>
          <div className="col col-12 col-lg-6 d-flex justify-content-end">
            <ul>
              <li>
                <Link to="/privacy">
                  <Trans ns="footer">Privacy Policy</Trans>
                </Link>
                <Link to="/terms">
                  <Trans ns="footer">Terms of Use</Trans>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
