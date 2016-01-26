import React from 'react'

const ItemLine = ({code, desc, rate, qty=0, total=0, increment, decrement}) => {
  const incr = () => {
    increment(code)
  }

  const decr = () => {
    decrement(code)
  }

  // Set lines apart that are not empty.
  let className = 'item-line'
  if (total > 0) className = 'item-line success'

  return (
    <tr className={className}>
      <td>{code}</td>
      <td>{desc}</td>
      <td>{rate}</td>
      <td onClick={incr}>{qty}</td>
      <td onClick={decr}>{total}</td>
    </tr>
  )
}

export default ItemLine
