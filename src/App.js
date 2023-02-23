import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Politica from './pages/Politica'

function App() {

return (
  <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' end element={<Home />} />
        <Route path='politica' element={<Politica />} />
      </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
