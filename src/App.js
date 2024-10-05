 import Lab1 from './Labs/A1/Labs.tsx'
import './App.css';
import { HashRouter, Route, Routes, Navigate }  from "react-router-dom"; 

import "bootstrap/dist/css/bootstrap.min.css";
import Lab2 from './Labs/A2/Lab2.tsx';
import Lab3 from './Labs/A2/Lab3.tsx';

function App() {
  return (
    <div className="App container my-4"> 
      <h1>Yash Moharir</h1>
      <h2>Section - CS5610.20596.202510</h2>
      <h2>LABS</h2>

      <a href='#/Labs/A1'>Labs A1 - Week 1 and 2</a>  <br/>
      <a href='#/Labs/A2/Week3'>Labs A2 - Week 3</a>  <br/>
      <a href='#/Labs/A2/Week4'>Labs A2 - Week 4</a>  <br/>
      <a href='https://main--kanbas-yash-moharir.netlify.app/'>Kanbas - Week 2</a>  <br/>
      <a href='https://a1--kanbas-yash-moharir.netlify.app/'>Kanbas ( Assignment 1 )</a> <br>
      <a href='https://a2--kanbas-yash-moharir.netlify.app/'>Kanbas ( Assignment 2 ) - Week 3 + 4</a> <br/>
      <a href='https://github.com/YASH-MOHARIR/Kanbas-webdev-project-Yash-Moharir'>Github Repository - Kanbas</a> <br/>
      <a href='https://github.com/YASH-MOHARIR/a1-webdev-landing-page'>Github Repository - Landing Page + Labs</a>

      <div>
        <HashRouter>
          <Routes> 
            <Route path="/Labs/A1" element={<Lab1 />} /> 
            <Route path="/Labs/A2/Week3" element={<Lab2 />} /> 
            <Route path="/Labs/A2/Week4" element={<Lab3 />} /> 
          </Routes>
        </HashRouter>
      </div>

    </div>
  );
}

export default App;
