import React, { useState } from 'react'

export const Count = (props) => {
  return (
    <div>
      <h1>{props.number}</h1>
      <button className='mn' onClick={function(e){props.onCN(e)}}>-1</button>
      <button className='pn' onClick={function(e){props.onCN(e)}}>+1</button>
    </div>

  )
}

export default Count;