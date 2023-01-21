import Home from './components/Home';
import { Favorites } from './components/Favorites';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
