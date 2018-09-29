import React from 'react'
import { Link } from 'gatsby'

const Header = ({ name, title, link }) => (
  <div
    style={{
      background: 'rgb(50,50,100)',
      marginBottom: '1.45rem',
    }}
  >
    {/* Name */}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to={link}
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {name}
        </Link>
      </h1>
    </div>

    {/* Title */}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
          {title}
      </h1>
    </div>
  </div>
)

export default Header
