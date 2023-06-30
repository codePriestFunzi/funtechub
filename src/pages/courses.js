import { Link } from 'react-router-dom'
import Images from '../images/image'
export default function Courses () {
  return (
    <>
      <div>
        <div className='profile_logo'>
          <img src={Images.courses} /> My Courses
        </div>
        <div className='coirse'>
          <div className='course-wrap'>
            <div>
              <h4>React.JS</h4>
              <img src={Images.react} />
            </div>
            <div>
              <ul>
                <li>Course Videos : 21</li>
                <li>Tutor : Funzi</li>
                <li className='remove-course'>
                  <Link to='/classroom'>Go to Classroom</Link>
                </li>
                <li className='remove-course'>Remove Course</li>
              </ul>
            </div>
          </div>
          <div className='course-wrap'>
            <div>
              <h4>JavaScript</h4>
              <img src={Images.react} />
            </div>
            <div>
              <ul>
                <li>Course Videos : 21</li>
                <li>Tutor : Funzi</li>
                <li className='remove-course'>
                  <Link to='/classroom'>Go to Classroom</Link>
                </li>
                <li className='remove-course'>Remove Course</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <div className='profile_logo'>
          <img src={Images.courses} /> Available Courses
        </div>
        <div className='coirse'>
          <div className='course-wrap'>
            <div>
              <h4>Digital Marketing</h4>
              <img src={Images.react} />
            </div>
            <div>
              <ul>
                <li>Course Videos : 21</li>
                <li>Tutor : Funzi</li>
                <li className='take-course'>Buy Course</li>
                <li className='take-course'>N 5,000</li>
              </ul>
            </div>
          </div>
          <div className='course-wrap'>
            <div>
              <h4>Product Management</h4>
              <img src={Images.react} />
            </div>
            <div>
              <ul>
                <li>Course Videos : 21</li>
                <li>Tutor : Funzi</li>
                <li className='take-course'>Buy Course</li>
                <li className='take-course'>N 5,000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
