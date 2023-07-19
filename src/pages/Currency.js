import axios from 'axios'
import './Currency.css'
import coin from "../coin.svg"
import arrow from "../arrow.svg"
import { useEffect, useState } from 'react'
import Select from 'react-select'
const Currency = () => {

  let  countryCode = {
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
}

const symbolsURL = "http://data.fixer.io/api/symbols?access_key=0ccba43ed82b96bca5e8206f5f1f094a"
const latestURL = "http://data.fixer.io/api/latest?access_key=0ccba43ed82b96bca5e8206f5f1f094a"

  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  const [value_before, setEnterValue] = useState('');
  const [value_after, setAfterValue] = useState('');
  const [countryList, setCountryList] = useState({});
  const [exchangeList, setExchangeList] = useState({});
  const [exchangeRate, setRate] = useState('');

  const [flag1, setFlag1] = useState('');
  const [flag2, setFlag2] = useState('');

  const createFlag1 = (str) => {
    setFlag1(`https://flagsapi.com/${str}/shiny/32.png`);
  }

  const createFlag2 = (str) => {
    setFlag2(`https://flagsapi.com/${str}/shiny/32.png`)
  }


  const inputHandler = (e) => {
   setEnterValue(e.target.value);
  };

  const beforeHandler = (e) => {
    setAfterValue('');
    setCountry1(e.value);
    createFlag1(countryCode[e.value]);
  }

  const afterHandler = (e) => {
    setAfterValue('');
    setCountry2(e.value);
    createFlag2(countryCode[e.value]);
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