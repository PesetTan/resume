
import React from 'react'

const Footer = ({item}) => (
  <div style={{ backgroundColor: 'rgb(250,250,250)' }}>
    {/* Name */}
    <div
      style={{ 
          padding: '1rem 1rem 0 1rem',
          textDecoration: 'none',
        }}
    >
      This site was created using <a href="https://www.gatsbyjs.org/">Gatsby</a>
      , an application stack incorporating <a href="https://reactjs.org/">React</a>.
      The code for this site can be found here: <a href="https://github.com/PesetTan/resume">https://github.com/PesetTan/resume</a>
    </div>

  </div>
)

export default Footer
