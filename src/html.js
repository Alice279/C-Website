/**
 * Customizing html.js
 */

import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.5.2/css/bootstrap.min.css" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
        <script src="https://cdn.staticfile.org/jquery/3.5.1/jquery.slim.min.js" />
        <script src="https://cdn.staticfile.org/twitter-bootstrap/4.5.2/js/bootstrap.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `function setNavbarBackground(){const bg=$(".header-bg");if(0===$(".sub-header").length&&0===$(".need-bg").length){let opacity;if($(window).scrollTop()>100)opacity=1;else{let scrollTop;opacity=$(window).scrollTop()/100}bg.css("opacity",opacity)}else bg.css("opacity",1)}document.addEventListener("touchstart",(function(){}),!0),$(window).on("scroll",setNavbarBackground),setNavbarBackground();`,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
