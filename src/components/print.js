import React from 'react'

const Print = ({propsData, stateData}) => {
  let grandTotal = 0
  let items = propsData.map((cat) => {
    return cat.items.map((item) => {
      if (stateData[item.code] > 0) {
        let total = stateData[item.code] * item.rate
        grandTotal += total
        return (
          <tr>
            <td>{item.code}</td>
            <td>{cat.category}: {item.desc}</td>
            <td>{item.rate}</td>
            <td>{stateData[item.code]}</td>
            <td>{total}</td>
          </tr>
        )
      }
    })
  })
  return (
    <div className='panel panel-default visible-print-block'>
      <div className='panel-body'>
        <h4 className='text-center'>Invoice Line Items</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>Code</th>
              <th>Description</th>
              <th>Unit Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
        <div className='text-right'><strong>Worksheet total: {grandTotal}</strong></div>
      </div>
    </div>
  )
}

export default Print
