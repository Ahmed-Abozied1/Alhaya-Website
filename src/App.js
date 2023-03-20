import { Route, Routes } from 'react-router-dom';
import './App.css';

 import Loading from './components/Loading/Loading';
import {lazy,Suspense} from "react";
const Home=lazy(()=>import ("./screens/HomeScreen"));
const NotFound=lazy(()=>import ('./screens/NotFound'));

function App() {
  return (
    <Suspense fallback={<Loading></Loading>} timeout={3000}>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Suspense>

  );
}

export default App;
