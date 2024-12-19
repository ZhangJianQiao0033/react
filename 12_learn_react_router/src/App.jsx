import React, { PureComponent } from 'react'
import { Link, Navigate, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import './style.css'

import routes from './router'
function App() {
  const navigate = useNavigate()
  function navigateTo(path) {
    console.log("Test");
    navigate(path)
  }
  return (
    <div className='App'>
      <div className="header">
        <span>header</span>
        <div className="nav">
          <Link to='/home' >首页</Link>
          <Link to='/about'>关于</Link>
          <Link to='/login'>登录</Link>
          <button onClick={e => navigateTo('/category')}>分类</button>
          <span onClick={e => navigateTo('/order')}>订单</span>
          <Link to='/user?name=why&age=18'>用户</Link>
        </div>
      </div>
      <hr />
      <div className="content">
        {/* 映射关系 */}
        {/* <Routes>

          <Route path='/' element= {<Navigate to="/home"/>}/>
          <Route path='/home' element={<Home/>} >
            <Route path='/home/ranking' element={<HomeRanking />}/>
            <Route path='/home/recommend' element={<HomeRecommend />}/>
            <Route path='/home/song' element={<HomeSongMenu/>} />
          </Route>
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/category' element={<Category/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/user' element={<User/>} />
          
          <Route path='*' element={<NotFound/>}/>
        </Routes> */}
        {useRoutes(routes)}
      </div>
      <hr />
      <div className="footer">footer</div>
    </div>
  )
}


export default App