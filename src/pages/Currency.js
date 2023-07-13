import axios from 'axios'
import './Currency.css'
import coin from "../coin.svg"
import arrow from "../arrow.svg"
import { useEffect, useState } from 'react'
import Select from 'react-select'
const Currency = () => {

 const  convertURL = "http://data.fixer.io/api/convert?access_key=0ccba43ed82b96bca5e8206f5f1f094a"
const symbolsURL = "http://data.fixer.io/api/symbols?access_key=0ccba43ed82b96bca5e8206f5f1f094a"
const latestURL = "http://data.fixer.io/api/latest?access_key=0ccba43ed82b96bca5e8206f5f1f094a"

  const [value_before, setEnterValue] = useState(null);
  const [value_after, setAfterValue] = useState(null);
  const [country1, setCountry1] = useState(null);
  const [country2, setCountry2] = useState(null);
  const [exchangeRate, setRate] = useState(null);

  const inputHandler = (e) => {
    e.preventDefault();
    setEnterValue(e.target.value);
  };

  useEffect(() => {
    getData();
  },[])

  async function getData(){
    const result = await axios.get(symbolsURL);
    console.log(result.data);
  }
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
        <div className="arrow-container">
          <button onClick={()=>{}} className="convert-button">
            Convert!
          </button>
          <img src={arrow} alt="Arrow" className="arrow" />
        </div>

        <div className="to-container">
          <h4>To: </h4>
          {value_after === null ? null : (
            <div className="result-container">
              <p className="result-text">{value_after}</p>
            </div>
          )}
          <div className="kind-dropdown">
            <Select
              options={[]}
              isDisabled={true}
              value={country2}
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

        <div className="ratio-container">
          <h4>Exchange Rate: </h4>
          {country2 === null || value_after === null ? null : (
            <div className="formula-container">
              <p className="formula-text">{exchangeRate}</p>
            </div>
          )}
        </div>
      </div>
      </>
   
  )
}

export default Currency;