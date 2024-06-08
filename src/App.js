import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homepage/HomePage';
import Login from './Components/Authentication/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}exact/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
