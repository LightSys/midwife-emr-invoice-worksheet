import React, {Component} from 'react'

import ItemGroup from '../components/item_group'
import Print from '../components/print'

class Worksheet extends Component {
  constructor(props) {
    super(props)

    // --------------------------------------------------------
    // Set starting state using code as the key and the qty as
    // the value.
    // --------------------------------------------------------
    const data = this.props.data
    let state = {rates: {}}
    data.forEach((group) => {
      group.items.forEach((item) => {
        state.rates[item.code] = 0
      })
    })
    state.patientName = ''
    this.state = state

    this.render = this.render.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  render() {
    const data = this.props.data
    let grandTotal = 0
    const groups = data.map((d) => {
      // Insert the qty and the total per the code from the state.
      let newItems = d.items.map((item) => {
        let qty = this.state.rates[item.code]
        let total = qty * item.rate
        grandTotal += total
        return Object.assign({}, item, {qty: qty, total: total})
      })
      return (
        <ItemGroup
          key={d.category}
          title={d.category}
          items={newItems}
          increment={this.increment}
          decrement={this.decrement}
        />
      )
    })
    return (
      <div>
        {groups}
        <Print propsData={this.props.data} stateData={this.state.rates} />
        <div className='panel panel-default hidden-print'>
          <div className='panel-body text-right'>
            <strong>Worksheet Total: {grandTotal}</strong>
          </div>
        </div>
      </div>
    )
  }

  increment(code) {
    let newRates = Object.assign({}, this.state.rates)
    newRates[code] = newRates[code] + 1
    this.setState({rates: newRates})
  }

  decrement(code) {
    let newRates = Object.assign({}, this.state.rates)
    newRates[code] = newRates[code] !== 0? newRates[code] - 1: newRates[code]
    this.setState({rates: newRates})
  }

}

export default Worksheet
