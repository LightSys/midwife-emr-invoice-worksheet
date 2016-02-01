import React, {PropTypes} from 'react'
import _ from 'lodash'

const Print = ({propsData, stateData, user, supervisor, amtPaid}) => {
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
  if (_.isNull(amtPaid)) amtPaid = 0
  const netTotal = grandTotal - amtPaid
  let userSpan
  let superSpan
  if (user) userSpan = <span> by <span className='text-info'>{user}</span></span>
  if (user && supervisor) superSpan = <span className='text-info'> / {supervisor}</span>
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
        <table className='table'>
          <tbody>
            <tr>
              <td className='text-right'><strong>Worksheet total</strong></td>
              <td className='text-right'><strong>{grandTotal}</strong></td>
            </tr>
            <tr>
              <td className='text-right'><strong>Amount collected {userSpan}{superSpan}</strong></td>
              <td className='text-right'><strong>{amtPaid}</strong></td>
            </tr>
            <tr>
              <td className='text-right'><strong>Net total</strong></td>
              <td className='text-right'><strong>{netTotal}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Print
