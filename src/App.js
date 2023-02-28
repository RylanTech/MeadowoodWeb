import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Donate from './Components/Donate';
import Events from './Components/Events';
import Foodpantry from './Components/Foodpantry';
import Home from './Components/Home';
import Homepage from './Components/Homepage';
import Kids from './Components/Kids';
import Ladies from './Components/ladies';
import Mens from './Components/mens';
import Ministries from './Components/Ministries';
import Youngadults from './Components/Youngadults';
import Youth from './Components/Youth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Homepage/>}/>
          <Route path='/ministries' element={<Ministries/>} />
          <Route path='/kids' element={<Kids/>} />
          <Route path='/youth' element={<Youth/>} />
          <Route path='/youngadults' element={<Youngadults/>} />
          <Route path='/foodpantry' element={<Foodpantry/>} />
          <Route path='/donate' element={<Donate/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/mensgroup' element={<Mens/>}/>
          <Route path='/womansgroup' element={<Ladies/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
