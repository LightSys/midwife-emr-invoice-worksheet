import React from 'react'

import Worksheet from '../containers/worksheet'
import data from '../data'

const App = () => {
  // Allow caller to specify a subtitle by passing a hash on the url.
  let subTitle = window.location.hash
  if (subTitle.length > 0) {
    subTitle = subTitle.replace(/\#/, '')
    subTitle = subTitle.replace(/%20/, ' ')   // Firefox adds %20 for spaces.
  }
  return (
    <div className='container'>
      <div className='page-header'>
        <h1>Invoice Worksheet <small>{subTitle}</small></h1>
      </div>
      <div className='panel panel-default hidden-print'>
        <ul>
          <li>Click a line in the Qty column to increase qty.</li>
          <li>Click a line in the Total column to decrease qty.</li>
          <li>Print to show only filled lines.</li>
        </ul>
      </div>
      <div className='panel panel-primary'>
        <Worksheet data={data} />
      </div>
      <div className='panel panel-default hidden-print'>
        <div className='panel-body'>
          Please complete, print and include this worksheet in the patient chart.
        </div>
      </div>
    </div>
  )
}

export default App

