
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './View';
import Add from './Add';
import Edit from './Edit';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<View />} />
            <Route path='/addrecord' element={<Add />} />
            <Route path='/editrecord/:id' element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;