import './Currency.css'
import coin from "../coin.svg"
const Currency = () => {
  return(
    <>
    <div>
      <h1 className='header'>Currency Conversion</h1>
      <img src={coin} alt='Coin' className='coin' />
      <div className='currency-container'>

      </div>
    </div>
    </>
  )
}

export default Currency;