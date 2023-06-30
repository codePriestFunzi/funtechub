import { Link } from 'react-router-dom'
import Footer from './footer'
import { useState } from 'react'
import Images from '../images/image'
export default function SignIn () {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <div className='signup'>
        <form>
          <h4>Login to your account</h4>

          <input type='email' id='email' placeholder='Email' required></input>

          <div className='test'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className='hide'
            >
              {showPassword ? (
                <img src={Images.hide} className='f-hide'></img>
              ) : (
                <img src={Images.see} className='f-hide'></img>
              )}
            </div>
          </div>
          <br></br>
          <button type='submit'>Sign In</button>
        </form>
        <div className='par'>
          <div>
            <p>
              or <Link to='#'>Forgot password</Link>
            </p>
          </div>
          <br></br>
          <div>
            <p>
              Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
          </div>
        </div>
        <div className='test'> test</div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )

}
