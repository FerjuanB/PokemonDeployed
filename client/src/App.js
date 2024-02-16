import NavBar from "./Components/NavBar/NavBar";
import {Home,LandingPage,Detail,Form} from "./Views"
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = 'https://pokemonback-v7c2.onrender.com/'
function App() {
  const location = useLocation();

  return (
    <div >
          <div>  
          {location.pathname !=="/" &&  <NavBar />}

          </div> 
        
    <Routes>
      <Route exact path='/' element={<LandingPage/>} />
      <Route exact path='/home' element={<Home/>} />
      <Route exact path='/detail/:id' element={<Detail/>} />
      <Route exact path='/create' element={<Form/>} />

    </Routes>
      
    </div>
  );
}

export default App;
