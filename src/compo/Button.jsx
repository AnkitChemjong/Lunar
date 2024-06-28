import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className="btn btn-info btn-outline-secondary">{props.type}</button>
    </div>
  )
}
