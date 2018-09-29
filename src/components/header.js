
import React from 'react'

const Header = ({item}) => (
  <div>
    {/* Name */}
    <div
      style={{
        padding: '1rem 1rem 0 1rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <div
          // to={data.link}
          style={{
            color: 'cyan',
            textDecoration: 'none',
          }}
        >
          {item.name}
        </div>
      </h1>
    </div>

    {/* Title */}
    <div
      style={{
        padding: '0.1rem 1rem',
        color: 'lightgrey',
      }}
    >
      <h3>
          {item.title}
      </h3>
    </div>
  </div>
)

export default Header
