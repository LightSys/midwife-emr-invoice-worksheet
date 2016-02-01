import React from 'react'

require('./amount_paid.css')

const AmountPaid = ({user, supervisor, update, amtPaid}) => {
  let userSpan
  let superSpan
  if (user) userSpan = <span> by <span className='text-info'>{user}</span></span>
  if (user && supervisor) superSpan = <span className='text-info'> / {supervisor}</span>
  return (
    <form className='form-inline'>
      <div className='form-group'>
        <label>Amount collected {userSpan}{superSpan}</label>
        <input
          type='text'
          className='form-control text-right'
          id='amountInput'
          onChange={update}
          value={amtPaid}
        />
      </div>
    </form>
  )
}

export default AmountPaid
