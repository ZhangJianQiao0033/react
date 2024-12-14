import React, { Component } from 'react'
import PropTypes from "prop-types"

export class MainBanner extends Component {
  

  render() {
    const {banners, title} = this.props
    return (
      <div>
        <div>{title}</div>
        {banners.map(item => {
          return (
            <h2>{item.title}</h2>
          )
        })}
      </div>

    )
  }
}

// MainBanner传入的props类型进行验证
MainBanner.propTypes = {
  banners: PropTypes.array,
  title: PropTypes.string
}

// MainBanner传入的props的默认值
MainBanner.defaultProps = {
  banners: [],
  title: "默认标题"
}

export default MainBanner