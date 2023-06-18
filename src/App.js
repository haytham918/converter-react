import Units from './pages/Units';
import './App.css';
import NavBar from './NavBar';
import Currency from './pages/Currency';
import Time from './pages/Time';
import { Routes, Route } from 'react-router-dom';

const  App = () => {
  return (
    <div className='overall'>
      <div className='top-bar'>
    <NavBar className='top-bar'/>
    </div>
    <div className = 'page-container'>
    <Routes>
      <Route path='/' Component={Units}/>
      <Route path='/units' Component={Units}/>
      <Route path='/currency' Component={Currency}/>
      <Route path='/time' Component={Time}/>
    </Routes>
    </div>
    </div>
   
  );
}

export default App;
