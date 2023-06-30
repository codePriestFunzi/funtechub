import Courses from '../../pages/courses'
import Attendance from '../../pages/attendance'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Images from '../../images/image'

export default function Profile () {
  const [isStudent, setIsStudent] = useState(undefined)
  const [isGraduate, setIsGraduate] = useState(undefined)
  const [postGraduate, setPostgraduate] = useState(undefined)
  const [completed, isCompleted] = useState(undefined)
  const [menu, setMenu] = useState('courses')
  const [next, isNext] = useState('page1')
  return (
    <>
      <section className='main'>
        <div className='left'>
          <div className='profile'>
            <ul className='profile-img'>
              <li>
                <img src={Images.profilelogo} />
              </li>
              <li>MANBART</li>
            </ul>
            <div className='upload'>
              <input type='file' id='files' style={{ display: 'none' }} />
              <label htmlFor='files'>
                <img src={Images.camera} />
              </label>
            </div>
          </div>
          <div className='menus'>
            <ul className='menu'>
              <li
                onClick={() => setMenu('profile')}
                className={menu == 'profile' ? 'acts' : ' '}
              >
                <Link>
                  <img src={Images.profile} /> Profile
                  <img src={Images.arrow} />
                </Link>
              </li>
              <li
                onClick={() => setMenu('courses')}
                className={menu == 'courses' ? 'acts' : ' '}
              >
                <Link href=''>
                  <img src={Images.courses} /> Courses
                  <img src={Images.arrow} />
                </Link>
              </li>
              <li
                onClick={() => setMenu('attendance')}
                className={menu == 'attendance' ? 'acts' : ' '}
              >
                <Link href=''>
                  <img src={Images.attend} style={{ padding: '15px 12px' }} />
                  Attendance
                  <img src={Images.arrow} />
                </Link>
              </li>
              <li className=''>
                <Link to=''>
                  <img
                    src={Images.logout}
                    style={{ backgroundColor: 'white' }}
                  />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='right'>
          {menu == 'profile' && (
            <div>
              {next == 'page1' && (
                <div className='section-1 one'>
                  <div className='tick'>
                    <img src={Images.attend} />
                  </div>
                  <div className='section'>
                    <ol>
                      <li>
                        <div>
                          <label htmlFor='course'>
                            Course of study in school
                          </label>
                          <input
                            type='text'
                            id='course'
                            placeholder='Course of study'
                          />
                        </div>
                      </li>
                      <li>
                        <div>
                          <label htmlFor=''>Are you a student?</label>
                          <div className='yesNo'>
                            {isStudent == true && (
                              <span className='yes1'>
                                <img src={Images.check} /> Yes
                              </span>
                            )}

                            {isStudent == false && (
                              <span className='no1'>
                                <img src={Images.close} /> No
                              </span>
                            )}
                          </div>
                          <div>
                            <button onClick={() => setIsStudent(true)}>
                              Yes
                            </button>
                            <button onClick={() => setIsStudent(false)}>
                              No
                            </button>
                          </div>
                          {isStudent == true && (
                            <div className='course_study'>
                              <input
                                type='text'
                                id='course'
                                placeholder='Course of study'
                              />
                              <input
                                type='text'
                                id='course'
                                placeholder='Expected Graduation date'
                              />
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div>
                          <label htmlFor=''>Did you graduate?</label>
                          <div className='yesNo'>
                            {isGraduate == true && (
                              <span className='yes2'>
                                <img src={Images.check} /> Yes
                              </span>
                            )}
                            {isGraduate == false && (
                              <span className='no2'>
                                <img src={Images.close} /> No
                              </span>
                            )}
                          </div>
                          <div>
                            <button onClick={() => setIsGraduate(true)}>
                              Yes
                            </button>
                            <button onClick={() => setIsGraduate(false)}>
                              No
                            </button>
                          </div>
                          {isGraduate == false && (
                            <div className='graduate'>
                              <input
                                type='text'
                                id=''
                                placeholder='Current Occupation'
                              />
                            </div>
                          )}

                          {isGraduate == true && (
                            <div className='yesGraduate'>
                              <input
                                type='text'
                                id='course'
                                placeholder='Course of study'
                              />
                              <input
                                type='text'
                                id='course'
                                placeholder='Graduation date'
                              />
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div>
                          <label htmlFor=''>
                            Does your country require post graduation services?
                          </label>
                          <div className='yesNon'>
                            {postGraduate == true && (
                              <span className='yes3'>
                                <img src={Images.check} /> Yes
                              </span>
                            )}
                            {postGraduate == false && (
                              <span className='no3'>
                                <img src={Images.close} /> No
                              </span>
                            )}
                          </div>
                          <div>
                            <button onClick={() => setPostgraduate(true)}>
                              Yes
                            </button>
                            <button onClick={() => setPostgraduate(false)}>
                              No
                            </button>
                          </div>
                          <div className='completed'>
                            {postGraduate == true && (
                              <div>
                                <label htmlFor=''>Have you completed?</label>
                                <div className='yesN'>
                                  {completed == true && (
                                    <span className='yes4'>
                                      <img src={Images.check} /> Yes
                                    </span>
                                  )}
                                  {completed == false && (
                                    <span className='no4'>
                                      <img src={Images.close} /> No
                                    </span>
                                  )}
                                </div>

                                <div>
                                  <button onClick={() => isCompleted(true)}>
                                    Yes
                                  </button>
                                  <button onClick={() => isCompleted(false)}>
                                    No
                                  </button>
                                </div>
                              </div>
                            )}
                            {completed == false && (
                              <div className='notCompleted'>
                                <input
                                  type='text'
                                  id='course'
                                  placeholder='Expected date of completion'
                                  style={{ width: '60%' }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className='next'>
                    <button onClick={() => isNext('page2')}>
                      Next Step <img src={Images.arrow} />
                    </button>
                  </div>
                </div>
              )}
              {next == 'page2' && (
                <div className='section-2  two'>
                  <div className='tick'>
                    <img src={Images.attend} />
                  </div>
                  <h3 style={{ margin: '30px 0 0px' }}>
                    Score your level of interest in these job titles:
                  </h3>
                  <br />
                  <div className='section-level'>
                    <div className='box'>
                      <div className='fool'>
                        <div>
                          <label htmlFor='course'>Cybersecurity</label>
                        </div>
                        <div>
                          <span id='myrange1'>0</span>
                          <span>/10</span>
                        </div>
                      </div>
                      <input
                        type='range'
                        oninput='rangeChange(this.id)'
                        min={1}
                        max={10}
                        defaultValue={0}
                        className='slider'
                        id={1}
                      />
                    </div>
                    <div className='box'>
                      <div className='fool'>
                        <div>
                          <label htmlFor='course'>Cybersecurity</label>
                        </div>
                        <div>
                          <span id='myrange2'>0</span>
                          <span>/10</span>
                        </div>
                      </div>
                      <input
                        type='range'
                        oninput='rangeChange(this.id)'
                        min={1}
                        max={10}
                        defaultValue={0}
                        className='slider'
                        id={2}
                      />
                    </div>
                    <div className='box'>
                      <div className='fool'>
                        <div>
                          <label htmlFor='course'>Cybersecurity</label>
                        </div>
                        <div>
                          <span id='myrange3'>0</span>
                          <span>/10</span>
                        </div>
                      </div>
                      <input
                        type='range'
                        oninput='rangeChange(this.id)'
                        min={1}
                        max={10}
                        defaultValue={0}
                        className='slider'
                        id={3}
                      />
                    </div>
                    <div className='box'>
                      <div className='fool'>
                        <div>
                          <label htmlFor='course'>Cybersecurity</label>
                        </div>
                        <div>
                          <span id='myrange4'>0</span>
                          <span>/10</span>
                        </div>
                      </div>
                      <input
                        type='range'
                        oninput='rangeChange(this.id)'
                        min={1}
                        max={10}
                        defaultValue={0}
                        className='slider'
                        id={4}
                      />
                    </div>
                    <div className='box'>
                      <div className='fool'>
                        <div>
                          <label htmlFor='course'>Cybersecurity</label>
                        </div>
                        <div>
                          <span id='myrange5'>0</span>
                          <span>/10</span>
                        </div>
                      </div>
                      <input
                        type='range'
                        oninput='rangeChange(this.id)'
                        min={1}
                        max={10}
                        defaultValue={0}
                        className='slider'
                        id={5}
                      />
                    </div>
                    <div className='box'>
                      <div className='fool'>
                        <div>
                          <label htmlFor='course'>Cybersecurity</label>
                        </div>
                        <div>
                          <span id='myrange6'>0</span>
                          <span>/10</span>
                        </div>
                      </div>
                      <input
                        type='range'
                        oninput='rangeChange(this.id)'
                        min={1}
                        max={10}
                        defaultValue={0}
                        className='slider'
                        id={6}
                      />
                    </div>
                    <div className='box'>
                      <div className='fool'>
                        <div>
                          <label htmlFor='course'>Cybersecurity</label>
                        </div>
                        <div>
                          <span id='myrange7'>0</span>
                          <span>/10</span>
                        </div>
                      </div>
                      <input
                        type='range'
                        oninput='rangeChange(this.id)'
                        min={1}
                        max={10}
                        defaultValue={0}
                        className='slider'
                        id={7}
                      />
                    </div>
                    <div className='box'>
                      <div className='fool'>
                        <div>
                          <label htmlFor='course'>Cybersecurity</label>
                        </div>
                        <div>
                          <span id='myrange8'>0</span>
                          <span>/10</span>
                        </div>
                      </div>
                      <input
                        type='range'
                        oninput='rangeChange(this.id)'
                        min={1}
                        max={10}
                        defaultValue={0}
                        className='slider'
                        id={8}
                      />
                    </div>
                  </div>
                  <h3>
                    <i id='errorDiv' className='d-none'>
                      * You cannot pick a number twice
                    </i>
                  </h3>
                  <br />

                  <div className='done'>
                    <button onClick={() => isNext('page1')} className='done'>
                      Prev
                    </button>
                    <button onClick={() => isNext('page3')} className='done'>
                      Next
                    </button>
                  </div>
                </div>
              )}
              {next == 'page3' && (
                <div className='section-3 three'>
                  <div className='profile_logo'>
                    <img src={Images.profile} /> Your Profile
                  </div>
                  <div className='part-1'>
                    <div className='tick'>
                      <img src={Images.attend} />
                    </div>
                    <div>
                      <label htmlFor='first-name'>First Name:</label>
                      <input type='text' id='first-name' placeholder='Funzi' />
                    </div>
                    <div>
                      <label htmlFor='last-name'>Last Name:</label>
                      <input type='text' id='last-name' placeholder='Funzi' />
                    </div>
                    <div>
                      <label htmlFor='email'>Email:</label>
                      <input
                        type='email'
                        id='email'
                        placeholder='funzi@gmail.com'
                      />
                    </div>
                  </div>
                  <div className='part-1'>
                    <div className='tick'>
                      <img src={Images.attend} />
                    </div>
                    <div>
                      <label htmlFor='first-name'>
                        Course of study in school:
                      </label>
                      <input
                        type='text'
                        id='first-name'
                        placeholder='Medical Lab Science'
                      />
                    </div>
                    <div>
                      <label htmlFor='last-name'>I am a student:</label>
                      <input
                        type='text'
                        id='last-name'
                        placeholder='Developer'
                      />
                    </div>
                    <div>
                      <label htmlFor='email'>Graduation date:</label>
                      <input
                        type='email'
                        id='email'
                        placeholder='October 4th, 2022'
                      />
                    </div>
                  </div>
                  <div className='part-1 interest'>
                    <div>My Interests:</div>
                    <div className='section-level'>
                      <div className='box'>
                        <div className='fool'>
                          <div>
                            <label htmlFor='course'>Cybersecurity</label>
                          </div>
                          <div>
                            <span id='demo'>3</span>
                            <span>/10</span>
                          </div>
                        </div>
                        <input
                          type='range'
                          min={1}
                          max={10}
                          defaultValue={3}
                          id='myRange'
                          disabled=''
                        />
                      </div>
                      <div className='box'>
                        <div className='fool'>
                          <div>
                            <label htmlFor='course'>Developer</label>
                          </div>
                          <div>
                            <span id='demo'>5</span>
                            <span>/10</span>
                          </div>
                        </div>
                        <input
                          type='range'
                          min={1}
                          max={10}
                          defaultValue={5}
                          id='myRange'
                          disabled=''
                        />
                      </div>
                      <div className='box'>
                        <div className='fool'>
                          <div>
                            <label htmlFor='course'>DevOps</label>
                          </div>
                          <div>
                            <span id='demo'>9</span>
                            <span>/10</span>
                          </div>
                        </div>
                        <input
                          type='range'
                          min={1}
                          max={10}
                          defaultValue={9}
                          id='myRange'
                          disabled=''
                        />
                      </div>
                      <div className='box'>
                        <div className='fool'>
                          <div>
                            <label htmlFor='course'>Designer</label>
                          </div>
                          <div>
                            <span id='demo'>6</span>
                            <span>/10</span>
                          </div>
                        </div>
                        <input
                          type='range'
                          min={1}
                          max={10}
                          defaultValue={6}
                          id='myRange'
                          disabled=''
                        />
                      </div>
                      <div className='box'>
                        <div className='fool'>
                          <div>
                            <label htmlFor='course'>Project_Manager</label>
                          </div>
                          <div>
                            <span id='demo'>8</span>
                            <span>/10</span>
                          </div>
                        </div>
                        <input
                          type='range'
                          min={1}
                          max={10}
                          defaultValue={8}
                          id='myRange'
                          disabled=''
                        />
                      </div>
                      <div className='box'>
                        <div className='fool'>
                          <div>
                            <label htmlFor='course'>Product_Manager</label>
                          </div>
                          <div>
                            <span id='demo'>10</span>
                            <span>/10</span>
                          </div>
                        </div>
                        <input
                          type='range'
                          min={1}
                          max={10}
                          defaultValue={10}
                          id='myRange'
                          disabled=''
                        />
                      </div>
                      <div className='box'>
                        <div className='fool'>
                          <div>
                            <label htmlFor='course'>Marketer</label>
                          </div>
                          <div>
                            <span id='demo'>7</span>
                            <span>/10</span>
                          </div>
                        </div>
                        <input
                          type='range'
                          min={1}
                          max={10}
                          defaultValue={7}
                          id='myRange'
                          disabled=''
                        />
                      </div>
                      <div className='box'>
                        <div className='fool'>
                          <div>
                            <label htmlFor='course'>Writer</label>
                          </div>
                          <div>
                            <span id='demo'>1</span>
                            <span>/10</span>
                          </div>
                        </div>
                        <input
                          type='range'
                          min={1}
                          max={10}
                          defaultValue={1}
                          id='myRange'
                          disabled=''
                        />
                      </div>
                    </div>
                  </div>
                  <div className='done'>
                    <button onClick={() => isNext('page2')} className='done'>
                      Prev
                    </button>
                    <button onSubmit={() => isNext('')} className='done'>
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {menu == 'courses' && (
            <div className='courses'>
              <Courses />
            </div>
          )}
          {menu == 'attendance' && <Attendance />}
        </div>
      </section>
    </>
  )
}
