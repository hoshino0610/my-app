import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">Demo</a>
        <span className="ml-1">&copy; base</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="/" target="_blank" rel="noopener noreferrer">base</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
