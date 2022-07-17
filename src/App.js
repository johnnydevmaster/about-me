import './App.css';
import FirstPage from './pages/FirstPage';
import { Routes, Route } from "react-router-dom";
import HomepageEn from './pages/english/HomepageEn';
import HomepageRo from './pages/romanian/HomepageRo';



function App() {
  return (
    <>

      <Routes>
            <Route path="/" element={<FirstPage/>} ></Route>
            <Route path="/en" element={<HomepageEn />} ></Route>
            <Route path="/ro" element={<HomepageRo />}></Route>
            <Route path="/en/about-me" element={<HomepageEn />} ></Route>
            <Route path="/en/what-i-do" element={<HomepageEn />} ></Route>
            <Route path="/en/my-services" element={<HomepageEn />} ></Route>
            <Route path="/en/contact-me" element={<HomepageEn />} ></Route>
      </Routes>
    </>
);
}

export default App;
