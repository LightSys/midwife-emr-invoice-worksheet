import React, {PropTypes} from 'react'


const Total = ({grandTotal, amtPaid}) => {
  let netTotal = grandTotal - amtPaid
  if (netTotal < 0) netTotal = 0
  return (
    <div>
      <strong>Net Total: {netTotal}</strong>
    </div>
  )
}

Total.propTypes = {
  grandTotal: PropTypes.number.isRequired,
  amtPaid: PropTypes.number
}

Total.defaultProps = {
  grandTotal: 0,
  amtPaid: 0
}

export default Total
