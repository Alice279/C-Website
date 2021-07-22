/* eslint-disable jsx-a11y/no-static-element-interactions */
/**
 * Team member
 */

import React, { useState } from 'react'
import { Trans } from 'gatsby-plugin-react-i18next'
import memberStyles from './Member.module.less'
import close from '../assets/images/icon-close.png'

/* eslint-disable react/prop-types */
export default ({ name, pic, title, desc }) => {
  const [show, setShow] = useState(false)

  return (
    <div
      className={memberStyles.item}
      onClick={(e) => {
        setShow(true)
        console.log('click2')
        e.preventDefault()
      }}
      onKeyUp={() => {}}
    >
      <img alt="memeber" src={pic} className={memberStyles.pic} />
      <div className={memberStyles.name}>
        <Trans ns="about">{name}</Trans>
      </div>
      <div className={memberStyles.title}>
        <Trans ns="about">{title}</Trans>
      </div>

      {show && (
        <div className={memberStyles.popup}>
          <div className="container">
            <div className="row align-items-start justify-content-between">
              <div className="col-12 col-lg-4">
                <img alt="memeber" src={pic} className={memberStyles.pic} />
                <div className={memberStyles.name}>
                  <Trans ns="about">{name}</Trans>
                </div>
                <div className={memberStyles.title}>
                  <Trans ns="about">{title}</Trans>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <h2>
                  <Trans ns="about">About</Trans>
                </h2>
                <p>
                  <Trans ns="about">{desc}</Trans>
                </p>
              </div>
              <div className="col-12 col-lg-2">
                <div
                  className="closeBtn"
                  onClick={(e) => {
                    console.log('click')
                    setShow(false)
                    e.stopPropagation()
                  }}
                  onKeyUp={() => {}}
                >
                  <img src={close} alt="Close" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
