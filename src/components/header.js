import React from 'react'

export default function Header() {
  return (
        <header style={{ backgroundColor: '#114491ff', padding: '4px 0' }}>
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <p
            style={{
              color: 'white',
              margin: '0 20px 0 0',
              fontFamily: 'Arial, sans-serif',
              fontSize: '13px',
            }}
          >
            <span style={{ display: 'inline-block', verticalAlign: 'middle',  }}>📞</span>
            +48 22 513 04 13
          </p>
          <p
            style={{
              color: 'white',
              margin: '0',
              fontFamily: 'Arial, sans-serif',
              fontSize: '16px',
            }}
          >
            <span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '5px' }}>✉️</span>
            info@millice.pl
          </p>
        </div>
      </header>
  )
}
