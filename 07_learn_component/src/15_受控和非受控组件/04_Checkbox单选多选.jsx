import React, { PureComponent } from 'react'

export class App extends PureComponent {

  constructor() {
    super()

    this.state = {
      username: "",
      password: "",
      isAgree: false,
      hobbies:[
        {value: "sing", text: "唱", isChecked: false},
        {value: "dance", text: "跳", isChecked: false},
        {value: "rap", text: "rap", isChecked: false}
      ]
    }
  }

  handleSubmitClick(event) {
    // 1.阻止默认的行为
    event.preventDefault()

    // 2.获取到所有的表单数据, 对数据进行组件
    console.log("获取所有的输入内容")
    // console.log(this.state.username)
    const hobbies = this.state.hobbies.filter(item => item.isChecked)
    console.log(hobbies);
    // 3.以网络请求的方式, 将数据传递给服务器(ajax/fetch/axios)
  }

  handleInputChange(event) {
    console.log(event.target.name,event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleAgreeChange(e) {
    this.setState({
      isAgree: e.target.checked
    })
  }
  handleHobbyChange(e, index) {
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = e.target.checked
    this.setState({
      hobbies
    })
  }
  render() {
    const { username, password, isAgree, hobbies } = this.state

    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
          {/* 1.用户名和密码 */}
          <label htmlFor="username">
            用户: 
            <input 
              id='username' 
              type="text" 
              name='username' 
              value={username} 
              onChange={e => this.handleInputChange(e)}
            />
          </label>
          <label htmlFor="password">
            用户: 
            <input 
              id='password' 
              type="password" 
              name='password' 
              value={password} 
              onChange={e => this.handleInputChange(e)}
            />
          </label>

          {/* 2. checkbox */}
          <label htmlFor="agree">
            <input id="agree" type="checkbox" checked={isAgree} onChange={e => this.handleAgreeChange(e)} /> 注册协议
          </label>

          {/* 3.checkbox多选 */}
          <div>
            您的爱好
          {
              hobbies.map((item, index) => {
                return (
                  <label htmlFor={item.value} key={item.value}>
                    <input id={item.value} type="checkbox" checked={item.isChecked} onChange={e => this.handleHobbyChange(e, index)} />
                    <span>{item.text}</span> 
                  </label>
                  
                )
              })
            }
          </div>
            
          
          <button type='submit'>注册</button>
        </form>
      </div>
    )
  }
}

export default App