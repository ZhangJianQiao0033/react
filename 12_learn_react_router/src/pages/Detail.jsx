import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class Detail extends PureComponent {
  render() {
    const {params} = this.props.router
    return (
      <div>
        <h1>detail page</h1>
        <h2>id {params.id}</h2>
      </div>
    )
  }
}

export default withRouter(Detail)