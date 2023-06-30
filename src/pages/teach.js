import Images from '../images/image'
import { useState } from 'react'
import 'animate.css'
import Footer from './footer'

export default function Teach () {
  const [toggleSet, setToggleSet] = useState('plan')

  return (
    <>
      <div className='teachh'>
        <div className='teach'>
          <div>
            <h2>Come teach with us</h2>
            <p>Become an instructor and change lives — including your own</p>
            <button>Get Started</button>
          </div>
        </div>
        <div className='t-start'>
          <h2>So many reasons to start</h2>
          <div className='t-flex'>
            <div>
              <img src={Images.ar1}></img>
              <h3>Teach your way</h3>
              <p>
                Publish the course you want, in the way you want, and always
                have control of your own content. sh the course you want, in the
                way you want, and al
              </p>
            </div>

            <div>
              <img src={Images.ar1}></img>
              <h3> Inspire learners</h3>
              <p>
                Teach what you know and help learners explore their interests,
                gain new skills, and advance their careers.
              </p>
            </div>

            <div>
              <img src={Images.ar1}></img>
              <h3> Get rewarded</h3>
              <p>
                Expand your professional network, build your expertise, and earn
                money on each paid enrollment.
              </p>
            </div>
          </div>
        </div>
        <div className='t-begin'>
          <h2>How to begin</h2>
          <div className='t-title'>
            <div
              className={
                toggleSet == 'plan'
                  ? 't-titles animate__animated animate__headShake'
                  : ' '
              }
              onClick={() => setToggleSet('plan')}
            >
              Plan your curriculum
            </div>
            <div
              className={
                toggleSet == 'record'
                  ? 't-titles animate__animated animate__headShake'
                  : ' '
              }
              onClick={() => setToggleSet('record')}
            >
              Record your video
            </div>
            <div
              className={
                toggleSet == 'launch'
                  ? 't-titles animate__animated animate__headShake'
                  : ' '
              }
              onClick={() => setToggleSet('launch')}
            >
              Launch your course
            </div>
          </div>

          {toggleSet == 'plan' && (
            <div className='t-toggle'>
              <div>
                <p>
                  You start with your passion and knowledge. Then choose a
                  promising topic with the help of our Marketplace Insights
                  tool.
                </p>{' '}
                <br></br>
                <p>
                  The way that you teach — what you bring to it — is up to you.
                </p>{' '}
                <br></br>
                <p>How we help you</p>
                <br></br>
                <p>
                  We offer plenty of resources on how to create your first
                  course. And, our instructor dashboard and curriculum pages
                  help keep you organized.
                </p>
              </div>
              <div>
                <img src='https://s.udemycdn.com/teaching/plan-your-curriculum-2x-v3.jpg'></img>
              </div>
            </div>
          )}

          {toggleSet == 'record' && (
            <div className='t-toggle'>
              <div>
                <p>
                  Use basic tools like a smartphone or a DSLR camera. Add a good
                  microphone and you’re ready to start.
                </p>{' '}
                <br></br>
                <p>
                  If you don’t like being on camera, just capture your screen.
                  Either way, we recommend two hours or more of video for a paid
                  course.
                </p>{' '}
                <br></br>
                <p>How we help you</p>
                <br></br>
                <p>
                  Our support team is available to help you throughout the
                  process and provide feedback on test videos.
                </p>
              </div>
              <div>
                <img src='https://s.udemycdn.com/teaching/record-your-video-2x-v3.jpg'></img>
              </div>
            </div>
          )}

          {toggleSet == 'launch' && (
            <div className='t-toggle'>
              <div>
                <p>
                  Gather your first ratings and reviews by promoting your course
                  through social media and your professional networks.
                </p>
                <br></br>
                <p>
                  Your course will be discoverable in our marketplace where you
                  earn revenue from each paid enrollment.
                </p>{' '}
                <br></br>
                <p>How we help you</p>
                <br></br>
                <p>
                  Our custom coupon tool lets you offer enrollment incentives
                  while our global promotions drive traffic to courses. There’s
                  even more opportunity for courses chosen for Udemy Business.
                </p>
              </div>
              <div>
                <img src='https://s.udemycdn.com/teaching/launch-your-course-2x-v3.jpg'></img>
              </div>
            </div>
          )}
        </div>
        <div className='t-alone'>
          <div>
            <img src={Images.sus1}></img>
          </div>
          <div>
            <h2>You won’t have to do it alone</h2>
            <p>
              Our Instructor Support Team is here to answer your questions and
              review your test video, while our Teaching Center gives you plenty
              of resources to help you through the process. Plus, get the
              support of experienced instructors in our online community.
            </p>
          </div>
          <div>
            <img src={Images.sus2}></img>
          </div>
        </div>
        <div className='t-become'>
            <h2>Become an instructor today</h2>
            <p>Join one of the world’s largest online learning marketplaces.</p>
            <button>Get Started</button>
        </div>
        <Footer/>
      </div>
    </>
  )
}
