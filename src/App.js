import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addbook from './components/Addbook';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
<div>
  <BrowserRouter>
  <Routes>
<Route path="/" exact element={<Addbook/>}/>


  </Routes>
  </BrowserRouter>
</div>    

  );
}

export default App;
