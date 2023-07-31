import React from 'react'

export const Keduit = (props) => {
  const { no, name, lcx, lcy } = props.keduit;
  return (
    <div style={props.style}>{`${name}(${lcx},${lcy})`}</div>
    // <tr>
    //   <td>
    //     {no}
    //   </td>
    //   <td>
    //     {name}
    //   </td>
    //   <td>
    //     {lcx*10+lcy*10}
    //   </td>
    // </tr>
  )
}


