import React, {Component} from 'react'

import ItemLine from './item_line'

class ItemGroup extends Component {
  constructor(props) {
    super(props)

    this.render = this.render.bind(this)
  }

  render() {
    let groupTotal = 0
    const itemLines = this.props.items.map((i) => {
      groupTotal += i.total
      return (
        <ItemLine
          key={i.code}
          code={i.code}
          desc={i.desc}
          rate={i.rate}
          qty={i.qty}
          total={i.total}
          increment={this.props.increment}
          decrement={this.props.decrement}
        />
      )
    })
    return (
      <div className='panel panel-default hidden-print'>
        <div className='panel-body'>
          <h4><strong>{this.props.title}</strong></h4>
          <form>
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Description</th>
                  <th>Unit Price</th>
                  <th>Qty (+)</th>
                  <th>Total (-)</th>
                </tr>
              </thead>
              <tbody>
                {itemLines}
              </tbody>
              <tfoot>
                <tr className='info'>
                  <td colSpan='3'></td>
                  <td><strong>Total:</strong></td>
                  <td><strong>{groupTotal}</strong></td>
                </tr>
              </tfoot>
            </table>
          </form>
        </div>
      </div>
    )
  }
}

export default ItemGroup
