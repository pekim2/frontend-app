import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Ingresso from './pages/Ingresso'
import Festival from './pages/Festival'

function App() {

return (
  <BrowserRouter>
      <Routes>
        <Route path='ingresso' element={<Ingresso />} />
        <Route path='/' end element={<Festival />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
