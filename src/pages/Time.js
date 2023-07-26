import './Time.css'
import clock from '../clock.svg'
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react';
import axios from 'axios';
const Time = () => {

  let accessKey = 'f83fbd2c6cae458e98932caf70f5b5c5';

  const [place, setPlace] = useState('');
  const [requestTime, setRequestTime] = useState('');

  const getTime = async () => {
    const result = await axios.get(`https://timezone.abstractapi.com/v1/current_time/?api_key=${accessKey}&location=${place}`)
    console.log(result);
    if(result.data !== {}){
      setRequestTime(result.data.datetime + ' (' + result.data.timezone_name + ') ')
    }else{
      setRequestTime('Oops... The location you request is invalid. Be More Specific')
    }
  }
  const requestInputHandler = (e) => {
    setPlace(e.target.value);
  }

  const searchHandler = () => {
    if(place !== ''){
      getTime();
    }
  }

  return(
    <>
    <h1 className='header'>Time Conversion</h1>
    <img src={clock} alt="Clock" className="clock" />
    <div className='time-container'>
      <div className='request-time-container'>
        <h2 className='request-time-text'>Get the crurent time of a location:</h2>
        <div className='enter-bar'>
          <input placeholder='Type the location(e.g: Colts Neck, NJ)' className='location-input' onChange={requestInputHandler}/>
          <button className='btn-grad' onClick={searchHandler}>
            <FaSearch size='2.5em'/>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Time;