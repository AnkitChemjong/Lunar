import React from 'react'

export default function Button(props) {
  const {func}=props;
  const {name}=props.o;
  return (
    <div>
      <button onClick={func}>{name}</button>
    </div>
  )
}
