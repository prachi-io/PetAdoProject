import './App.css';
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import FormPet from "./components/FormPet";
import FormAdopt from "./components/FormAdopt";
import AllCategory from "./components/AllCategory";
import OneCategory from "./components/OneCategory";
import AdoptedInfo from "./components/AdoptedInfo";
import FormCategory from "./components/FormCategory";



function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/FormPet" element={<FormPet />} />
              <Route exact path="/FormAdopt" element={<FormAdopt />} />
              <Route exact path="/FormCategory" element={<FormCategory />} />
              <Route exact path="/AllCategory" element={<AllCategory/>} />
              <Route exact path="/OneCategory" element={<OneCategory/>} />
              <Route exact path="/AdoptedInfo" element={<AdoptedInfo/>} />
          </Routes>
      </Router>
  );
}

export default App;
