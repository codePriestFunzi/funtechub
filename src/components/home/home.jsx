import Images from '../../images/image'
import '../home/home.css'
import Footer from '../../pages/footer'
export default function Home () {
  return (
    <>
      <div>
        <div className='home1'>
          <h2>Get Started </h2>
          <h2>Take Classes online at your own pace.</h2>
          <br />
          <p>
            Register today to learn the best of programming from world class
            tutors around the world. Earn certificates by completing our courses
            and increase your chance of getting a job
          </p>
          <br />
          <div className='sign-sign'>
            <div className='sign-in'>Signin</div>
            <div className='sign-in'>Signup</div>
          </div>
          <div className='socials'>
            <ul>
              <li>
                <a href=''>
                  <img src={Images.twitter} />
                </a>
              </li>
              <li>
                <a href=''>
                  <img src={Images.linkden} />
                </a>
              </li>
              <li>
                <a href=''>
                  <img src={Images.facebook} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='how-it-works'>
          <div className='works'>
           
          </div>
          <div className='works'>
            <h1>How it works</h1>
            <p>
              The Work Experience program simulates the actual work that you
              will be performing if you were working for a company. You will be
              assigned a project manager that will assign tasks for the sprint
              as it is done on the job. This program will help you gain real
              -world experience as if you have worked in the industry and you
              will also gain the knowledge and confidence that you need for
              interviews.
              <p>
                The Work Experience program simulates the actual work that you
                will be performing if you were working for a company. You will
                be assigned a project manager that will assign tasks for the
                sprint as it is done on the job. This program will help you gain
                real -world experience as if you have worked in the industry and
                you will also gain the knowledge and confidence that you need
                for interviews.
              </p>
              <p>
                The Work Experience program simulates the actual work that you
                will be performing if you were working for a company. You will
                be assigned a project manager that will assign tasks for the
                sprint as it is done on the job. This program will help you gain
                real -world experience as if you have worked in the industry and
                you will also gain the knowledge and confidence that you need
                for interviews.
              </p>
            </p>
          </div>
        </div>

        <div className='course-opt'>
          <h1>Courses we offer</h1>
          <ul>
            <li>
              <h4>Technical Analysis</h4>
              <p>
                You will be inspired by other teammates who are accomplishing
                tasks and that is usually sufficient to motivate most people to
                get involved, take learning steps, and perform practical tasks
                that will lead to successsful completion of the online course
              </p>
            </li>
            <li>
              <h4>Blockchain Technology</h4>
              <p>
                You will be inspired by other teammates who are accomplishing
                tasks and that is usually sufficient to motivate most people to
                get involved, take learning steps, and perform practical tasks
                that will lead to successsful completion of the online course
              </p>
            </li>
            <li>
              <h4>DeFi</h4>
              <p>
                You will be inspired by other teammates who are accomplishing
                tasks and that is usually sufficient to motivate most people to
                get involved, take learning steps, and perform practical tasks
                that will lead to successsful completion of the online course
              </p>
            </li>
          </ul>
        </div>

        <div className='serve'>
          <div className='services'>
            <h1>More Services to help you</h1>
            <ul>
              <li>
                <h4>Teaching</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis quaerat quisquam optio autem non earum laudantium
                  delectus adipisci voluptates provident repellendus deserunt
                  voluptatibus nihil error, rerum quas itaque dolore sapiente.
                </p>
              </li>
              <li>
                <h4>Teaching</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis quaerat quisquam optio autem non earum laudantium
                  delectus adipisci voluptates provident repellendus deserunt
                  voluptatibus nihil error, rerum quas itaque dolore sapiente.
                </p>
              </li>
              <li>
                <h4>Teaching</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis quaerat quisquam optio autem non earum laudantium
                  delectus adipisci voluptates provident repellendus deserunt
                  voluptatibus nihil error, rerum quas itaque dolore sapiente.
                </p>
              </li>
              <li>
                <h4>Teaching</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis quaerat quisquam optio autem non earum laudantium
                  delectus adipisci voluptates provident repellendus deserunt
                  voluptatibus nihil error, rerum quas itaque dolore sapiente.
                </p>
              </li>
            </ul>
          </div>
        
        </div>
        <div className='why-join'>
          <span></span> <h1>Why Join us?</h1> <span></span>
          <ul>
            <li>
              <h4>Participants Have a Common Goal</h4>
              <p>
                In a group class, all the participants are focused on achieving
                the same goal and they typically have similar background so
                learning is easier and collaboration with other members often
                yield better results. .
              </p>
            </li>
            <li>
              <h4>Learning + Networking + Socializing.</h4>
              <p>
                The group works together on the hands-on tasks and every
                individual is free to contribute as much as he or she is willing
                to contribute. This encourages talking, learning, explaining,
                and knowledge sharing from all participants.
              </p>
            </li>
            <li>
              <h4>Team Motivation = Success</h4>
              <p>
                You will be inspired by other teammates who are accomplishing
                tasks and that is usually sufficient to motivate most people to
                get involved, take learning steps, and perform practical tasks
                that will lead to successsful completion of the online course
              </p>
            </li>
          </ul>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}
