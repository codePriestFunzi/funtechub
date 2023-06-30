import Images from './images/image'
import './App.css'
import SignUp from './pages/signup'
import SignIn from './pages/signin'
import Profile from './components/profile/profile'
import Classroom from './components/classroom/classroom'
import Teach from './pages/teach'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/home/home'

function App () {
  return (
    <>
      <BrowserRouter>
        <nav className='nav'>
          <div >
            <Link to='/' className='mylogo'>
              <img src={Images.logo} />
            </Link>
          </div>
          <div>
            {/* <div className='nav-div'>
            <ul>
                <li>
                  <div className='cart'>
                   <Link to='/signin'>
                      Be a tutor
                    </Link>
                    <Link to='/signin'>
                      <img src={Images.cart} />
                    </Link>
                    <Link to='/signin' className='bb'>
                      Log in
                    </Link>
                    <Link to='/signup' className='bb'>
                      Sign up
                    </Link>
                  </div>
                </li>
              </ul>
            </div> */}
            <div>
              <ul>
                <li>
                  <div className='cart'>
                    <Link to='/profile'>
                      Profile
                      <img src={Images.prof} />
                    </Link>
                    <Link to=''>
                      <img src={Images.cart} />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className='main'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='profile' element={<Profile />} />
            <Route exact path='classroom' element={<Classroom />} />
            <Route exact path='signup' element={<SignUp />} />
            <Route exact path='signin' element={<SignIn />} /> 
            <Route exact path='teach' element={<Teach />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
