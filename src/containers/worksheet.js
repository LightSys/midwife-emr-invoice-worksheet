import React, {Component} from 'react'

import ItemGroup from '../components/item_group'
import Print from '../components/print'
import AmountPaid from '../components/amount_paid'
import Total from '../components/total'

class Worksheet extends Component {
  constructor(props) {
    super(props)

    // --------------------------------------------------------
    // Set starting state using code as the key and the qty as
    // the value.
    // --------------------------------------------------------
    const data = this.props.data
    const state = {rates: {}, amtPaid: null}
    data.forEach((group) => {
      group.items.forEach((item) => {
        state.rates[item.code] = 0
      })
    })
    this.state = state

    this.render = this.render.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.updateAmtPaid = this.updateAmtPaid.bind(this)
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
    grandTotal = this.sanePositiveNumber(grandTotal)
    return (
      <div>
        {groups}
        <Print
          propsData={this.props.data}
          stateData={this.state.rates}
          user={this.props.user}
          supervisor={this.props.supervisor}
          amtPaid={this.state.amtPaid}
        k/>
        <div className='panel panel-default hidden-print'>
          <div className='panel-body text-right'>
            <div>
              <strong>Worksheet Total: {grandTotal}</strong>
            </div>
            <div>
              <AmountPaid
                update={this.updateAmtPaid}
                user={this.props.user}
                supervisor={this.props.supervisor}
                amtPaid={this.state.amtPaid}
              />
            </div>
            <div>
              <Total
                amtPaid={this.state.amtPaid}
                grandTotal={grandTotal}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // --------------------------------------------------------
  // Return a non-negative integer from the input and return
  // 0 if things don't make sense.
  // --------------------------------------------------------
  sanePositiveNumber(val) {
    let newVal
    try {
      newVal = parseInt(val, 10)
    } catch (e) {
      newVal = 0
    }
    if (isNaN(newVal)) newVal = 0
    if (newVal < 0) newVal = 0
    return newVal
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

  updateAmtPaid(evt) {
    this.setState({amtPaid: this.sanePositiveNumber(evt.target.value)})
  }

}

export default Worksheet
