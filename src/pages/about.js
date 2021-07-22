import React from 'react'
import { Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import aboutStyles from './about.module.less'
import story from '../assets/images/about/story.png'
import Member from '../components/Member'
import longfan from '../assets/images/about/longfan.png'
import zhoudong from '../assets/images/about/zhoudong.png'
import yuanjie from '../assets/images/about/yuanjie.png'
import wuming from '../assets/images/about/wuming.png'
import eden from '../assets/images/about/eden.png'
import veneris from '../assets/images/about/veneris.png'
import park from '../assets/images/about/park.png'

const team = [
  {
    name: 'BIOS1',
    title: 'BIOS1 title',
    pic: longfan,
    desc: 'BIOS1 info',
  },
  {
    name: 'BIOS2',
    title: 'BIOS2 title',
    pic: zhoudong,
    desc: 'BIOS2 info',
  },
  {
    name: 'BIOS3',
    title: 'BIOS3 title',
    pic: yuanjie,
    desc: 'BIOS3 info',
  },
  {
    name: 'BIOS4',
    title: 'BIOS4 title',
    pic: wuming,
    desc: 'BIOS4 info',
  },
  // {
  //   name: 'BIOS5',
  //   title: 'BIOS5 title',
  //   pic: logo,
  //   desc: 'BIOS5 info',
  // },
  {
    name: 'BIOS6',
    title: 'BIOS6 title',
    pic: eden,
    desc: 'BIOS6 info',
  },
  {
    name: 'BIOS7',
    title: 'BIOS7 title',
    pic: veneris,
    desc: 'BIOS7 info',
  },
  {
    name: 'BIOS8',
    title: 'BIOS8 title',
    pic: park,
    desc: 'BIOS8 info',
  },
]

export default () => {
  const { language } = useI18next()
  const { t, i18n } = useTranslation('seo')
  const iszh = i18n.language.includes('zh')
  return (
    <Layout type="light">
      <SEO
        title={t('About title')}
        keywords={t('Home keywords', { returnObjects: true })}
        lang={language}
        description={t('Home description')}
      />
      <div className={aboutStyles.about}>
        <section className={aboutStyles.story}>
          <div className="container">
            <h2 className="need-bg">
              <Trans ns="header">About</Trans>
            </h2>
            <div className="row">
              <div className="col-12 col-lg-6 ">
                <div className="text">
                  <h1>
                    <Trans ns="about">Our Story</Trans>
                  </h1>
                  <p>
                    <Trans ns="about">Story desc1</Trans>
                  </p>
                  <p>
                    <Trans ns="about">Story desc2</Trans>
                  </p>
                  <p>
                    <Trans ns="about">Story desc3</Trans>
                  </p>
                  <p>
                    <Trans ns="about">Story desc4</Trans>
                  </p>
                  <p>
                    <Trans ns="about">Story desc5</Trans>
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 mobile-img">
                <img src={story} alt="Our Story" />
              </div>
            </div>
          </div>
        </section>
        <section className={aboutStyles.team}>
          <div className="container">
            <div className="text">
              <div className="row mobile-padding">
                <div className="col-12">
                  <h2>
                    <Trans ns="about">Team</Trans>
                  </h2>
                </div>
              </div>
              <div className="row mobile-padding justify-content-end">
                <div className="col-12 col-lg-6">
                  <p style={{ marginRight: 9 }}>
                    <Trans ns="about">Team desc1</Trans>
                  </p>
                  <p style={{ marginRight: 9 }}>
                    <Trans ns="about">Team desc2</Trans>
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <p style={{ marginLeft: 9 }}>
                    <Trans ns="about">Team desc3</Trans>
                  </p>
                  <a
                    href={iszh ? 'http://www.tree-graph.org.cn/about' : 'http://www.tree-graph.org.cn/en/about'}
                    className="btn btn-primary btn-ex-link-secondary"
                    target="_blank"
                    style={{ marginLeft: 9 }}
                  >
                    <Trans ns="about">Goto TreeGraph</Trans>
                  </a>
                </div>
              </div>
              <div className="row member d-flex flex-wrap justify-content-between">
                {team.map((item) => (
                  <Member key={item.name} pic={item.pic} name={item.name} desc={item.desc} title={item.title} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
