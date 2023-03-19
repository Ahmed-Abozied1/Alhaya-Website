import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './screens/NotFound';
import Home from './screens/HomeScreen';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <Loading>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Loading>
  );
}

export default App;
