import './Currency.css'
import coin from "../coin.svg"
import { useState } from 'react'
import Select from 'react-select'
const Currency = () => {
  const [value_before, setEnterValue] = useState(null);
  const [before, setBefore] = useState(null);
  const inputHandler = (e) => {
    setEnterValue(e.target.value);
  };

  return(
  
    <>
      <h1 className='header'>Currency Conversion</h1>
      <img src={coin} alt='Coin' className='coin' />
      <div className='currency-container'>
        <div className='original-container'>
          <h4>From: </h4>
          <input
            className="value-enter"
            placeholder="Value"
            type="number"
            value={value_before}
            onChange={inputHandler}
          />
          <div className="kind-dropdown">
            <Select
            options={[]}
            isDisabled={true}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderColor: "green",
                  borderRadius: "0.5rem",
                  fontSize: "120%",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "Verdana",
                }),
              }}
            />
          </div>
        </div>
      </div>
      </>
   
  )
}

export default Currency;