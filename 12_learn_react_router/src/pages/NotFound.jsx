import React, { PureComponent } from 'react'

export class NotFound extends PureComponent {
  render() {
    return (
      <div>
        <h1>NotFound</h1>
        <p>进入的路径不存在,请检测之后再操作</p>
      </div>
    )
  }
}

export default NotFound