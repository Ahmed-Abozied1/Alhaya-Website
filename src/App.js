import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './screens/NotFound';
import Home from './screens/HomeScreen';
import AboutUs from './screens/AboutUs';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>

  );
}

export default App;
