import './App.css';
import FirstPage from './pages/FirstPage';
import { Routes, Route } from "react-router-dom";
import HomepageEn from './pages/english/HomepageEn';
import HomepageRo from './pages/romanian/HomepageRo';
import AboutMe from './pages/english/AboutMe';
import DespreMine from './pages/romanian/DespreMine';
import WhatIDo from './pages/english/WhatIDo';
import CuCeMaOcup from './pages/romanian/CuCeMaOcup';
import MyServices from './pages/english/MyServices';
import ServiciileMele from './pages/romanian/ServiciileMele';
import ContacteazaMa from './pages/romanian/ContacteazaMa';
import ContactMe from './pages/english/ContactMe';


function App() {
  return (
    <>

      <Routes>
            <Route path="/" element={<FirstPage/>} ></Route>
            <Route path="/en" element={<HomepageEn />} ></Route>
            <Route path="/ro" element={<HomepageRo />}></Route>
            
            <Route path="/en/about-me" element={<AboutMe />} ></Route>
            <Route path="/en/what-i-do" element={<WhatIDo />} ></Route>
            <Route path="/en/my-services" element={<MyServices />} ></Route>
            <Route path="/en/contact-me" element={<ContactMe />} ></Route>

            <Route path="/ro/despre-mine" element={<DespreMine />}></Route>
            <Route path="/ro/cu-ce-ma-ocup" element={<CuCeMaOcup />}></Route>
            <Route path="/ro/serviciile-mele" element={<ServiciileMele />}></Route>
            <Route path="/ro/contacteaza-ma" element={<ContacteazaMa />}></Route>
      </Routes>
    </>
);
}

export default App;
