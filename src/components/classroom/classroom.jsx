import Images from '../../images/image'
import '../classroom/classroom.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Classroom () {
  const [isTopic, setIsTopic] = useState(true)
  const [isTabs, setIsTabs] = useState('video')
  const [toggle, setToggle] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
    return (
    <>
      <div className='check' >
        <Link to='/profile'>
          <img src={Images.yourcourses} style={{ marginRight: 10 }} />
          Your Courses
        </Link>
        <div className='tabs'>
          <div className='tabs-1'>
            <div className='tab-1'>
              <ul>
                <li
                  className={isTopic ? 'activetab' : ' '}
                  onClick={() => setIsTopic(true)}
                >
                  <span href='#'>
                    <img src={Images.topic} />
                    Topics
                  </span>
                </li>
                <li
                  className={!isTopic ? 'activetab' : ' '}
                  onClick={() => setIsTopic(false)}
                >
                  <span href='#'>
                    <img src={Images.student} />
                    Students|7
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className='tab-2'>
            <ul>
              <li
                className={isTabs == 'video' ? 'activetab' : ' '}
                onClick={() => setIsTabs('video')}
              >
                <span>
                  <img src={Images.vdeo} />
                  Video
                </span>
              </li>
              <li
                className={isTabs == 'lab' ? 'activetab' : ' '}
                onClick={() => setIsTabs('lab')}
              >
                <span>
                  <img src={Images.attend} />
                  Tasks
                </span>
              </li>
              <li
                className={isTabs == 'note' ? 'activetab' : ' '}
                onClick={() => setIsTabs('note')}
              >
                <span>
                  <img src={Images.note} />
                  Note
                </span>
              </li>
              <li
                className={isTabs == 'chat' ? 'activetab' : ' '}
                onClick={() => setIsTabs('chat')}
              >
                <span>
                  <img src={Images.chat} />
                  Chat
                </span>
              </li>
            </ul>
          </div>
        </div>
        <section className='class-main'>
          <div className='left-side'>
            {isTopic == true && (
              <div className='courses-2 topics'>
                <ul>
                  <li>
                    <img src={Images.vdeo} />
                    Introduction to BlockChain Teachnology
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Types of BlockChain
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Opportunities/Career in B.T
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Terminologies
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Understading CoinMarketcap and Coingecko
                  </li>
                  
                  <li>
                    <img src={Images.vdeo} />
                    Analyzing projects before Investing
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Exchanges; CEXs, DEXs & AMMs
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Trading on Centralized Exchanges
                  </li>
                  
                  <li>
                    <img src={Images.vdeo} />
                    Learn Higher HTML
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Learn CSS
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Animations and Transitions
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Responsiveness
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Parralax designs
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Learn Basic Javascript
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Concepts of consitional statements
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Loops
                  </li>
                  <li>
                    <img src={Images.vdeo} />
                    Creating a stop watch
                  </li>
                </ul>
              </div>
            )}
            {isTopic == false && (
              <div className='courses-2 students'>
                <ul>
                  <li>
                    <div>
                      <img src={Images.msg} />
                      Funzi
                    </div>
                    <div>
                      <img src={Images.msg} />
                      Write a message
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={Images.msg} />
                      Toks
                    </div>
                    <div>
                      <img src={Images.msg} />
                      Write a message
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={Images.msg} />
                    Mambart
                    </div>
                    <div>
                      <img src={Images.msg} />
                      Write a message
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={Images.msg} />
                     Favour Osas
                    </div>
                    <div>
                      <img src={Images.msg} />
                      Write a message
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={Images.msg} />
                     David
                    </div>
                    <div>
                      <img src={Images.msg} />
                      Write a message
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={Images.msg} />
                     Afolabi
                    </div>
                    <div>
                      <img src={Images.msg} />
                      Write a message
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={Images.msg} />
                      Dagr8
                    </div>
                    <div>
                      <img src={Images.msg} />
                      Write a message
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={Images.msg} />
                     Sapphire
                    </div>
                    <div>
                      <img src={Images.msg} />
                      Write a message
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={Images.msg} />
                      CCodes
                    </div>
                    <div>
                      <img src={Images.msg} />
                      Write a message
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className='right-side'>
            {isTabs == 'video' && (
              <div className='videos'>
                <video controls width='730px'>
                  <source src={Images.video} type='video/mp4' />
                </video>
              </div>
            )}
            <div className='fixed'>
              {isTabs == 'note' && (
                <div className='notes'>
                  <ul>
                    <li>
                      <div>
                        <div>
                          <img src={Images.vdeo} />
                          Learn Product Design
                        </div>
                        <div>Go to the Video</div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, conuuusectetur adipisicing
                        elit. Delectus quo voluptate ducimus quisquam blanditiis
                        nesciunt. Undhhe tempora rem culpa dolorum magni
                        perspiciatis veritatis, expedita eligendi eos explicabo
                        enitttkkkm. Voluptatum, veniam.
                      </p>
                    </li>
                    <li>
                      <div>
                        <div>
                          <img src={Images.vdeo} />
                          Learn Product Design
                        </div>
                        <div>Go to the Video</div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, conuuusectetur adipisicing
                        elit. Delectus quo voluptate ducimus quisquam blanditiis
                        nesciunt. Undhhe tempora rem culpa dolorum magni
                        perspiciatis veritatis, expedita eligendi eos explicabo
                        enitttkkkm. Voluptatum, veniam.
                      </p>
                    </li>
                    <li>
                      <div>
                        <div>
                          <img src={Images.vdeo} />
                          Learn Product Design
                        </div>
                        <div>Go to the Video</div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, conuuusectetur adipisicing
                        elit. Delectus quo voluptate ducimus quisquam blanditiis
                        nesciunt. Undhhe tempora rem culpa dolorum magni
                        perspiciatis veritatis, expedita eligendi eos explicabo
                        enitttkkkm. Voluptatum, veniam.
                      </p>
                    </li>
                    <li>
                      <div>
                        <div>
                          <img src={Images.vdeo} />
                          Learn Product Design
                        </div>
                        <div>Go to the Video</div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, conuuusectetur adipisicing
                        elit. Delectus quo voluptate ducimus quisquam blanditiis
                        nesciunt. Undhhe tempora rem culpa dolorum magni
                        perspiciatis veritatis, expedita eligendi eos explicabo
                        enitttkkkm. Voluptatum, veniam.
                      </p>
                    </li>
                    <li>
                      <div>
                        <div>
                          <img src={Images.vdeo} />
                          Learn Product Design
                        </div>
                        <div>Go to the Video</div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, conuuusectetur adipisicing
                        elit. Delectus quo voluptate ducimus quisquam blanditiis
                        nesciunt. Undhhe tempora rem culpa dolorum magni
                        perspiciatis veritatis, expedita eligendi eos explicabo
                        enitttkkkm. Voluptatum, veniam.
                      </p>
                    </li>
                  </ul>
                </div>
              )}
              {isTabs == 'lab' && (
                <div className='labs'>
                  <div className='lab-head'>Labs for Lab Design in HTML</div>
                  <ul>
                    <li>
                      <h4 />
                      <p>
                        In this Lab we will be discussing an alternative to
                        using your PC and IDE (Integrated Development
                        environment ) for running and writing your python
                        programs, interesting right? Yeah. This alternative is
                        using your mobile phone to run your codes. There are
                        several application available for doing this, but for
                        the sake of this lab, we will be focusing on Qpython3.
                        Feel free to research and use other. 1. Download the
                        Application
                      </p>
                      <br />
                      <h4> Note :</h4>
                      <p>
                        Qpython3 is available on both the Google Playstore and
                        Apple Appstore.
                      </p>
                      <br />
                      <h4>Task:</h4>
                      <p>
                        Download Qpython3 from either store according to the
                        make of your phone Or visit their website on
                        https://www.qpython.com/ and follow this instructions.
                      </p>
                      <br />
                      <h4> Hint:</h4>
                    </li>
                    <div className='task-subs section-5'>
                      <div>
                        <form>
                          <input
                            type='file'
                            id='file-upload'
                            style={{ display: 'none' }}
                          />
                          <label htmlFor='file-upload'>
                            <img src={Images.upload} />
                            Upload Lab
                          </label>
                          <div id='file-upload-filename'>
                            <img src={Images.file} />
                            <i>Your file will be here</i>
                          </div>
                          <div>
                            <button type='submit'>
                              Submit the task
                              <img src={Images.submit} />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <li>
                      <h4 />
                      <p>
                        In this Lab we will be discussing an alternative to
                        using your PC and IDE (Integrated Development
                        environment ) for running and writing your python
                        programs, interesting right? Yeah. This alternative is
                        using your mobile phone to run your codes. There are
                        several application available for doing this, but for
                        the sake of this lab, we will be focusing on Qpython3.
                        Feel free to research and use other. 1. Download the
                        Application
                      </p>
                      <br />
                      <h4> Note :</h4>
                      <p>
                        Qpython3 is available on both the Google Playstore and
                        Apple Appstore.
                      </p>
                      <br />
                      <h4>Task:</h4>
                      <p>
                        Download Qpython3 from either store according to the
                        make of your phone Or visit their website on
                        https://www.qpython.com/ and follow this instructions.
                      </p>
                      <br />
                      <h4> Hint:</h4>
                    </li>
                    <div className='task-subs section-5'>
                      <div className='fail'>
                        <div>
                          <img src={Images.fail} />
                          Fail
                        </div>
                        <div>
                          <img src={Images.file} />
                          <i>funzi.jpg</i>
                        </div>
                        <div onClick={() => setIsOpen(true)}>
                          Read Feedback
                          <img src={Images.submit} />
                        </div>
                      </div>
                    </div>

                    <li>
                      <h4 />
                      <p>
                        In this Lab we will be discussing an alternative to
                        using your PC and IDE (Integrated Development
                        environment ) for running and writing your python
                        programs, interesting right? Yeah. This alternative is
                        using your mobile phone to run your codes. There are
                        several application available for doing this, but for
                        the sake of this lab, we will be focusing on Qpython3.
                        Feel free to research and use other. 1. Download the
                        Application
                      </p>
                      <br />
                      <h4> Note :</h4>
                      <p>
                        Qpython3 is available on both the Google Playstore and
                        Apple Appstore.
                      </p>
                      <br />
                      <h4>Task:</h4>
                      <p>
                        Download Qpython3 from either store according to the
                        make of your phone Or visit their website on
                        https://www.qpython.com/ and follow this instructions.
                      </p>
                      <br />
                      <h4> Hint:</h4>
                    </li>
                    <div className='task-subs section-5'>
                      <div className='pass'>
                        <div>
                          <img src={Images.h} />
                          Pass
                        </div>
                        <div>
                          <img src={Images.file} />
                          <i>funzi.jpg</i>
                        </div>
                        <div onclick='openFeedBack()'>
                          Read Feedback
                          <img src={Images.submit} />
                        </div>
                      </div>
                    </div>
                  </ul>

                  {isOpen == true && (
                    <div className='closefeedback'>
                      <div
                        className='cover'
                        onClick={() => setIsOpen(false)}
                      ></div>
                      <div className='read-feed'>
                        <div
                          className='closed'
                          onClick={() => setIsOpen(false)}
                        >
                          <img src={Images.close} />
                        </div>
                        <div className='feed-back'>
                          <div>
                            <img src={Images.profilelogo} />
                          </div>
                          <div>
                            <h4>Nwankwo Emmanuel</h4>
                            <h4>
                              <i>Instructor</i>
                            </h4>
                          </div>
                        </div>
                        <br />
                        <p>
                          In this Lab we will be discussing an alternative to
                          using your PC and IDE (Integrated Development
                          environment ) for running and writing your python
                          programs, interesting right? Yeah. This alternative is
                          using your mobile phone to run your codes. There are
                          several application available for doing this, but for
                          the sake of this lab, we will be focusing on Qpython3.
                          Feel free to research and use other. 1. Download the
                          Application In this Lab we will be discussing an
                          alternative to using your PC and IDE (Integrated
                          Development environment ) for running and writing your
                          python programs, interesting right? Yeah. This
                          alternative is using your mobile phone to run your
                          codes. There are several application available for
                          doing this, but for the sake of this lab, we will be
                          focusing on Qpython3. Feel free to research and use
                          other. 1. Download the Application
                        </p>
                        <br />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            {isTabs == 'chat' && (
              <div className='chat'>
                <div className='chat-1'>
                  <div className='chats'>
                    <div className='select-user'>
                      <img src={Images.search} />
                      Select User
                    </div>
                    <ul>
                      <li>
                        <div className='general'>
                          <div>
                            <img src={Images.chat} style={{ marginLeft: 15 }} />
                          </div>
                          <div>
                            <h4>General Chat</h4>
                          </div>
                          <img src={Images.ar1} style={{ marginLeft: 55 }} />
                        </div>
                      </li>
                      <li>
                        <div className='members'>
                          <div>
                            <img src={Images.profilelogo} />
                          </div>
                          <div>
                            <h4>Mary Shiwauva</h4>
                            <p>Working with you..</p>
                          </div>{' '}
                          <img src={Images.ar1} style={{ marginLeft: 15 }} />
                        </div>
                      </li>
                      <li>
                        <div className='members'>
                          <div>
                            <img src={Images.profilelogo} />
                          </div>
                          <div>
                            <h4>Mary Shiwauva</h4>
                            <p>Working with you..</p>
                          </div>{' '}
                          <img src={Images.ar1} style={{ marginLeft: 15 }} />
                        </div>
                      </li>
                      <li>
                        <div className='members'>
                          <div>
                            <img src={Images.profilelogo} />
                          </div>
                          <div>
                            <h4>Mary Shiwauva</h4>
                            <p>Working with you..</p>
                          </div>{' '}
                          <img src={Images.ar1} style={{ marginLeft: 15 }} />
                        </div>
                      </li>
                      <li>
                        <div className='members'>
                          <div>
                            <img src={Images.profilelogo} />
                          </div>
                          <div>
                            <h4>Mary Shiwauva</h4>
                            <p>Working with you..</p>
                          </div>{' '}
                          <img src={Images.ar1} style={{ marginLeft: 15 }} />
                        </div>
                      </li>
                      <li>
                        <div className='members'>
                          <div>
                            <img src={Images.profilelogo} />
                          </div>
                          <div>
                            <h4>Mary Shiwauva</h4>
                            <p>Working with you..</p>
                          </div>{' '}
                          <img src={Images.ar1} style={{ marginLeft: 15 }} />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='chats-mgs'>
                    <div className='parts'>
                      <div className='pp'>
                        <img src={Images.ham} />
                        List of Participants
                      </div>
                      <div className='poin' onClick={() => setToggle(!toggle)}>
                        <img src={Images.downarrow} />
                      </div>
                    </div>
                    {toggle && (
                      <div className='block'>
                        <div className='showParticipants'>
                          <div className='part-members'>
                            <img src={Images.profilelogo} />
                            Mary Shiwauva
                          </div>
                          <div className='part-members'>
                            <img src={Images.profilelogo} />
                            Mary Shiwauva
                          </div>
                          <div className='part-members'>
                            <img src={Images.profilelogo} />
                            Mary Shiwauva
                          </div>
                          <div className='part-members'>
                            <img src={Images.profilelogo} />
                            Mary Shiwauva
                          </div>
                          <div className='part-members'>
                            <img src={Images.profilelogo} />
                            Mary Shiwauva
                          </div>
                          <div className='part-members'>
                            <img src={Images.profilelogo} />
                            Mary Shiwauva
                          </div>
                          <div className='part-members'>
                            <img src={Images.profilelogo} />
                            Mary Shiwauva
                          </div>
                          <div className='part-members'>
                            <img src={Images.profilelogo} />
                            Mary Shiwauva
                          </div>
                          <div className='part-members'>
                            <img src={Images.profilelogo} />
                            Mary Shiwauva
                          </div>
                          <div className='part-members'>
                            <img src={Images.profilelogo} />
                            Mary Shiwauva
                          </div>
                          <div className='part-members'>
                            <img src={Images.profilelogo} />
                            Mary Shiwauva
                          </div>
                          <div className='part-members'>
                            <img src={Images.profilelogo} />
                            Mary Shiwauva
                          </div>
                        </div>
                      </div>
                    )}
                    <div className='convo'>
                      <div className=''>
                        <div className='part-name'>
                          <img src={Images.profilelogo} />
                          Mary Shiwauva:
                        </div>
                        <div className='conversations'>
                          <span style={{ color: '#ACB7EB' }}>09:15</span>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </div>
                      </div>
                      <div className=''>
                        <div className='part-name'>
                          <img src={Images.profilelogo} />
                          Mary Shiwauva:
                        </div>
                        <div className='conversations'>
                          <span style={{ color: '#ACB7EB' }}>09:15</span>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </div>
                      </div>
                      <div className=''>
                        <div className='my-conversations'>
                          <span style={{ color: '#ACB7EB' }}>You:</span>
                          <span style={{ color: '#ACB7EB' }}>09:15</span>
                          funziem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </div>
                      </div>
                      <div className=''>
                        <div className='part-name'>
                          <img src={Images.profilelogo} />
                          Mary Shiwauva:
                        </div>
                        <div className='conversations'>
                          <span style={{ color: '#ACB7EB' }}>09:15</span>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </div>
                      </div>
                    </div>
                    <div className='online-chats'>
                      <div className='sendmsgs'>
                        <img src={Image.emoji} />
                        <input type='text' placeholder='Type a message' />
                        <img src={Images.file} />
                      </div>
                      <button className='sendbtn'>Send</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
