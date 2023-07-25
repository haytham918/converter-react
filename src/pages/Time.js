import './Time.css'
import clock from '../clock.svg'
const Time = () => {
  return(
    <>
    <h1 className='header'>Time Conversion</h1>
    <img src={clock} alt="Clock" className="clock" />
    <div className='time-container'>

    </div>
    </>
  )
}

export default Time;