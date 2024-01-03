
import './App.css';
import Home from './Home';
import Search from './Search';
import Add from './Add';
import Mapp from './Mapp';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Mapp' element={<Mapp/>}/>
        <Route path='/Add' element={<Add/>}/>
        <Route path='/Search' element={<Search/>}/>
      </Routes>
      </Router> 
    

    </div>
  );
}

export default App;
