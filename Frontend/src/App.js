import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registerpage from './Register/Register';
import Loginpage from './Login/Login';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registerpage />}/>
          <Route path="/Login" element={<Loginpage />}/>
          
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;


/*
import Landingpage from './LandingPage/Landing_page';
import Postview from './PostView/Postview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className="Wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />}/>
          <Route path="/postViewPage" element={<Postview />}/>
          
        </Routes>

      </BrowserRouter>
*/ 