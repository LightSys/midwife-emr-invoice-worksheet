import React from 'react'

import Worksheet from '../containers/worksheet'
import data from '../data'

// --------------------------------------------------------
// Assumes subTitle, the midwife and supervisor intials
// are passed like this:
// ...#Page, Reanny/cfg/feh
// --------------------------------------------------------
const deriveSubtitleMidwifeSuper = () => {
  const props = {}

  const hash_array = window.location.hash
    .replace(/%20/, ' ')
    .replace(/#/, '')
    .split('/')

  // subtitle is the first part of the url after the hash.
  // user is the second part of the url after the hash.
  // supervisor is the third part of the url after the hash.
  props.subTitle = hash_array[0]? hash_array[0]: ''
  props.user = hash_array[1]? hash_array[1]: ''
  props.supervisor = hash_array[2]? hash_array[2]: ''

  return props
}

const App = () => {
  // Allow caller to specify a subtitle by passing a hash on the url.
  const {subTitle, user, supervisor} = deriveSubtitleMidwifeSuper()
  return (
    <div className='container'>
      <div className='page-header'>
        <h1>Invoice Worksheet <small>{subTitle} <span className='badge'>{user} / {supervisor}</span></small></h1>
      </div>
      <div className='panel panel-default hidden-print'>
        <ul>
          <li>Click a line in the Qty column to increase qty.</li>
          <li>Click a line in the Total column to decrease qty.</li>
          <li>Print to show only filled lines.</li>
        </ul>
      </div>
      <div className='panel panel-primary'>
        <Worksheet subTitle={subTitle} user={user} supervisor={supervisor} data={data} />
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

