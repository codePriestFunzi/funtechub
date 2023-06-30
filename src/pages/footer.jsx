import { Link } from 'react-router-dom'
import Images from '../images/image'
export default function Footer () {
  return (
    <>
      <div className='foots'>
        <div className='foot-img'>
          <img src={Images.logo} />
        </div>
        <div className='foot1'>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to='/teach'>Be a Tutor</Link>
            </li>
            <li>
              <Link to='/signin'>SignIn</Link>
            </li>
            <li>
              <Link to='/signup'>SignUp</Link>
            </li>
           
          </ul>
        </div>
        <div className='foot1'>
          <h3>Socials</h3>
          <ul>
            <li>
              <a href=''>Twitter</a>
            </li>
            <li>
              <a href=''>Discord</a>
            </li>
            <li>
              <a href=''>Facebook</a>
            </li>
            <li>
              <a href=''>LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className='foot1'>
          <ul>
            <li>
              <a href=''>About US</a>
            </li>
            <li>
              <a href=''>Contact Us</a>
            </li>
            <li>
              <a href=''>Policies</a>
            </li>
            <li>
              <a href=''>Job Search</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
