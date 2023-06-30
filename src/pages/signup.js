import { Link } from 'react-router-dom'
import Footer from './footer'

export default function SignUp () {

  function handleSubmit(e) {
    e.preventDefault()
    
  }

  return (
    <>
      <div className='signup'>
        <form onSubmit={handleSubmit}>
          <h2>Signup and start learning</h2>
          <input type='text' id='Fullname' placeholder='Full Name'></input>
          <input type='email' id='email' placeholder='Email'></input>
          <input type='password' id='password ' placeholder='Password'></input>
          <div></div>
          <div className='recieve-news'>
            <input type='checkbox' id='radio'></input>
            <div>By signing up, you agree to our Terms of Use and Services</div>
          </div>
          <button type='submit'>Sign Up</button>
        </form>
        <div className='par'>
          <div>
            <p>
              By signing up, you agree to our Terms of Use and Privacy Policy.
            </p>
          </div>
          <div>
            <p>
              Already have an account? <Link to='/signin'>Log in</Link>
            </p>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}
