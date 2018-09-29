
import React from 'react'

const Header = ({item}) => (
  <div style={{ backgroundColor: 'rgb(50,50,100)' }}>
    {/* Name */}
    <div
      style={{ padding: '1rem 1rem 0 1rem' }}
    >
      <h1 style={{ margin: 0 }}>
        <div
          style={{
            color: 'white',
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
