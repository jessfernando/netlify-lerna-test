import React from 'react'
import PropTypes from 'prop-types'
import shared from 'shared'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>
  	<h1>{shared.foo}</h1>
  	{content}
  </div>
)

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
