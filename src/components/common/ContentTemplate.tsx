import React from 'react'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
    gridTemplateAreas: `"side content" "side footer"`,
    marginLeft: '1rem',
    marginRight: '1rem',
  },
}

interface ContentTemplateProps {
  children: React.ReactNode
}
function ContentTemplate({ children }: ContentTemplateProps) {
  return <div style={styles.container}>{children}</div>
}

export default ContentTemplate
