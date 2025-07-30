import React from 'react'
import './middleline.css'
export default function Middleline() {
  return (
    <div
              style={{
                marginTop: "5px",
                height: "2px",
                backgroundColor: "#2b79ecff",
                maxWidth: "100%",
              }}
              className="animated-line"
            ></div>
  )
}
