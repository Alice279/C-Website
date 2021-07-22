import React, { useState, useEffect } from 'react'
import { Link, Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import axios from 'axios'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import mediaStyles from './media.module.less'
import loadingGif from '../../assets/images/community/loading-black.gif'

export default () => {
  const { language } = useI18next()
  const { t } = useTranslation('seo')
  const { t: tMedia } = useTranslation('media')
  const [show, setShow] = useState(false)
  const [media, setMedia] = useState([])
  const [loadGif, setLoad] = useState(true)

  let isTestNetEnv = true
  if (typeof document !== 'undefined') {
    isTestNetEnv = document.URL.indexOf('test') !== -1
  }
  const url = `${isTestNetEnv ? tMedia('test_url') : tMedia('prod_url')}?_sort=created_time`

  const zeroFill = (s) => {
    s = '' + s
    if (s.length < 2) return '0' + s
    return s
  }

  const getDate = (dateStr) => {
    let date = new Date(dateStr).toLocaleDateString().split('/')
    if (date[0].length === 4) {
      return [date[0], zeroFill(date[1]), zeroFill(date[2])]
    }
    return [date[2], zeroFill(date[0]), zeroFill(date[1])]
  }

  const rebuildDateEn = (ISOdate) => {
    // "2021-01-12T04:00:00.000Z"
    // "Jan 12, 2021"
    const date = getDate(ISOdate)
    const dict = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sept',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec',
    }
    return `${dict[date[1]]} ${date[2]}, ${date[0]}`
  }

  const rebuildDateZh = (ISOdate) => {
    // "2021-01-12T04:00:00.000Z"
    // "2021年01月12日"
    const date = getDate(ISOdate)
    return `${date[0]}年${date[1]}月${date[2]}日`
  }

  const rebuildDateOther = (ISOdate) => {
    // "2021-01-12T04:00:00.000Z
    // "2021.01.12"
    const date = getDate(ISOdate)
    return `${date[0]}.${date[1]}.${date[2]}`
  }

  let rebuildDate
  switch (language) {
    case 'en':
      rebuildDate = rebuildDateEn
      break
    case 'zh':
      rebuildDate = rebuildDateZh
      break
    default:
      rebuildDate = rebuildDateOther
      break
  }

  const rebuildMedia = (oldMedia) => {
    let result = []
    for (let i = oldMedia.length - 1; i >= 0; i -= 1) {
      let item = oldMedia[i]
      let imgUrl =
        item.source.toLowerCase() === 'medium'
          ? 'http://conflux-web-test.oss-cn-beijing.aliyuncs.com/admin/medium_32743d15dc.png'
          : item.brandImage.url
      result.push({
        link: item.url,
        img: imgUrl,
        type: item.source,
        title: item.title,
        date: rebuildDate(item.created_time),
      })
    }
    return result
  }

  useEffect(() => {
    async function getData() {
      const result = await axios.get(url)
      setMedia(rebuildMedia(result.data))
      setLoad(false)
    }
    getData()
  }, [])

  return (
    <Layout type="light" className={`${show ? 'lock' : ''}`}>
      <SEO
        title={t('Media title')}
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
      <div className={mediaStyles.index}>
        <div className="container">
          <div className={`sub-header ${show ? 'show' : ''}`}>
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
              <Trans ns="header">Media Feed</Trans>
            </div>
            <ul className={show ? 'show' : ''}>
              <li>
                <a href="#" className="active">
                  <Trans ns="header">Media Feed</Trans>
                </a>
              </li>
              <li>
                <Link to="/community/joinus">
                  <Trans ns="header">Join Us</Trans>
                </Link>
              </li>
            </ul>
          </div>
          <h2>
            <Trans ns="header">Community</Trans>
          </h2>
          <h1>
            <Trans ns="media">Media Feed</Trans>
          </h1>
          <div className={mediaStyles.load}>{loadGif && <img src={loadingGif} alt="loadingGif" />}</div>
          <ul className={mediaStyles.mediaList}>
            {media.map((m) => (
              <li key={m.title} className="item">
                <div className="image">
                  <img src={m.img} alt={m.title} />
                </div>
                <div>
                  <div className="type">{m.type}</div>
                  <div className="title">
                    <a href={m.link} target="_blank" title={m.title}>
                      {m.title}
                    </a>
                  </div>
                  <div className="date">{m.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
