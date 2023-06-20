import './Currency.css'
import coin from "../coin.svg"
const Currency = () => {
  return(
  
    <>
      <h1 className='header'>Currency Conversion</h1>
      <img src={coin} alt='Coin' className='coin' />
      <div className='currency-container'>

      </div>
      </>
   
  )
}

export default Currency;