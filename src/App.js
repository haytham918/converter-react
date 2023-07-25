import Units from "./pages/Units";
import "./App.css";
import NavBar from "./NavBar";
import Currency from "./pages/Currency";
import Time from "./pages/Time";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const symbolsURL =
    "http://data.fixer.io/api/symbols?access_key=0ccba43ed82b96bca5e8206f5f1f094a";
  const latestURL =
    "http://data.fixer.io/api/latest?access_key=0ccba43ed82b96bca5e8206f5f1f094a";
  const [countryList, setCountryList] = useState('');
  const [exchangeList, setExchangeList] = useState('');

  // useEffect(() => {
  //   getData();
  // }, []);

  console.log(countryList)

  async function getData() {
    const result = await axios.get(symbolsURL);
    const latestResult = await axios.get(latestURL);
    if (latestResult.data.success) {
      const data = result.data.symbols;
      const latestData = latestResult.data.rates;
      setCountryList(data);
      setExchangeList(latestData);
    }
  }
  return (
    <div className="overall">
      <div className="top-bar">
        <NavBar className="top-bar" />
      </div>
      <div className="page-container">
        <Routes>
          <Route path="/" Component={Units} />
          <Route path="/units" Component={Units} />
          <Route path="/currency" exact element={<Currency countryList={countryList} exchangeList={exchangeList} />}/>
            
          <Route path="/time" Component={Time} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
