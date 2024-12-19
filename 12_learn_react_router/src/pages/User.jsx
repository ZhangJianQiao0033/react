import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class User extends PureComponent {
  render() {
    const {router} = this.props
    const {query} = router
    return (
      <div>
        <h2>user page</h2>
        <h2>{query.name} - {query.age}</h2>
      </div>
    )
  }
}

export default withRouter(User)