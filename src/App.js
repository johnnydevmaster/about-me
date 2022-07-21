import './App.css';
import FirstPage from './pages/FirstPage';
import { Routes, Route } from "react-router-dom";
import HomepageEn from './pages/english/HomepageEn';
import HomepageRo from './pages/romanian/HomepageRo';
import AboutMe from './pages/english/AboutMe';
import DespreMine from './pages/romanian/DespreMine';


function App() {
  return (
    <>

      <Routes>
            <Route path="/" element={<FirstPage/>} ></Route>
            <Route path="/en" element={<HomepageEn />} ></Route>
            <Route path="/ro" element={<HomepageRo />}></Route>
            
            <Route path="/en/about-me" element={<AboutMe />} ></Route>
            <Route path="/en/what-i-do" element={<HomepageEn />} ></Route>
            <Route path="/en/my-services" element={<HomepageEn />} ></Route>
            <Route path="/en/contact-me" element={<HomepageEn />} ></Route>

            <Route path="/ro/despre-mine" element={<DespreMine />}></Route>
            <Route path="/ro/cu-ce-ma-ocup" element={<HomepageRo />}></Route>
            <Route path="/ro/serviciile-mele" element={<HomepageRo />}></Route>
            <Route path="/ro/contacteaza-ma" element={<HomepageRo />}></Route>
      </Routes>
    </>
);
}

export default App;
