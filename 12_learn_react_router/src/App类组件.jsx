import React, { PureComponent } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import './style.css'
import NotFound from './pages/NotFound'
import HomeRanking from './pages/HomeRanking'
import HomeRecommend from './pages/HomeRecommend'
export class App extends PureComponent {
  render() {
    return (
      <div className='App'>
        <div className="header">
          <span>header</span>
          <div className="nav">
            <Link to='/home' >首页</Link>
            <Link to='/about'>关于</Link>
            <Link to='/login'>登录</Link>
          </div>
        </div>
        <hr />
        <div className="content">
          {/* 映射关系 */}
          <Routes>

            <Route path='/' element= {<Navigate to="/home"/>}/>
            <Route path='/home' element={<Home/>} >
              <Route path='/home/ranking' element={<HomeRanking />}/>
              <Route path='/home/recommend' element={<HomeRecommend />}/>
            </Route>
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
        <hr />
        <div className="footer">footer</div>
      </div>
    )
  }
}

export default App