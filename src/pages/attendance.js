import Images from '../images/image'
export default function Attendance () {
  return (
    <>
      <div className='profile_logo'>
        <img src={Images.attend} /> Login History
      </div>
      <div className='attendanc'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Friday 26 May, 2023</td>
              <td>12:50pm</td>
            </tr>
            <tr>
              <td>Monday 29 May, 2023</td>
              <td>12:50pm</td>
            </tr>
            <tr>
              <td>Tuesday 30 May, 2023</td>
              <td>12:50pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
