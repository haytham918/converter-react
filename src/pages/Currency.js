import axios from 'axios'
import './Currency.css'
import coin from "../coin.svg"
import arrow from "../arrow.svg"
import { useEffect, useState } from 'react'
import Select from 'react-select'
const Currency = () => {

const symbolsURL = "http://data.fixer.io/api/symbols?access_key=0ccba43ed82b96bca5e8206f5f1f094a"
const latestURL = "http://data.fixer.io/api/latest?access_key=0ccba43ed82b96bca5e8206f5f1f094a"

  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  const [value_before, setEnterValue] = useState('');
  const [value_after, setAfterValue] = useState('');
  const [countryList, setCountryList] = useState({});
  const [exchangeList, setExchangeList] = useState({});
  const [exchangeRate, setRate] = useState('');


  const inputHandler = (e) => {
   setEnterValue(e.target.value);
  };

  const beforeHandler = (e) => {
    setAfterValue('');
    setCountry1(e.value);
  }

  const afterHandler = (e) => {
    setAfterValue('');
    setCountry2(e.value);

  }

  const pickBoth = () => {
    alert('Please Pick Both Currencies!!!')
  }

  const clickHandler = () => {
    if(country1 !== '' && country2 !== ''){
      let exchangeValue1 = exchangeList[country1];
      let exchangeValue2 = exchangeList[country2];
      let ratio = exchangeValue2 / exchangeValue1; 
      setRate(Number(ratio).toLocaleString('en'));
      setAfterValue(Number(value_before * ratio.toFixed(3)).toLocaleString('en'));
    }else{
      pickBoth();
    }
  }

  useEffect(() => {
    getData();
  },[])

  async function getData(){
    const result = await axios.get(symbolsURL);
    const latestResult = await axios.get(latestURL);
    const data = result.data.symbols;
    const latestData = latestResult.data.rates;
    setCountryList(data);
    setExchangeList(latestData);
    
  }
  let val = Object.keys(countryList).map((key) => {return {label: `(${key}) ` + countryList[key], value: key}});
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
            options={val}
            onChange={beforeHandler}
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
          <button onClick={clickHandler} className="convert-button">
            Convert!
          </button>
          <img src={arrow} alt="Arrow" className="arrow" />
        </div>

        <div className="to-container">
          <h4>To: </h4>
          {value_after === '' ? null : (
            <div className="result-container">
              <p className="result-text">{value_after}</p>
            </div>
          )}
          <div className="kind-dropdown">
            <Select
              options={val}
              onChange={afterHandler}
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
          {country2 === '' || value_after === '' ? null : (
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