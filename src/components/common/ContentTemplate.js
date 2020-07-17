import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
  },
}

function ContentTemplate({ children }) {
  return <div style={styles.container}>{children}</div>
}

ContentTemplate.propTypes = {
  children: PropTypes.array.isRequired,
}

export default ContentTemplate
