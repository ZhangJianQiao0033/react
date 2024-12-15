import React, { PureComponent } from 'react'
import ThemeContext from '../context/theme_context'
import withTheme from '../hoc/with_theme'

export class Product extends PureComponent {
  render() {
    return (
      <div>
        Product
        <h2>theme: {this.props.color}-{this.props.size}</h2>
      </div>
    )
  }
}

export default withTheme(Product)