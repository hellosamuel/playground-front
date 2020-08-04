import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
    gridTemplateAreas: `"side content" "side footer"`,
    marginLeft: '1rem',
    marginRight: '1rem',
  },
}

function ContentTemplate({ children }) {
  return <div style={styles.container}>{children}</div>
}

ContentTemplate.propTypes = {
  children: PropTypes.array.isRequired,
}

export default ContentTemplate
