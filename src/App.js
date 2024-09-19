 import Labs from './Labs.tsx'
import './App.css';
import { HashRouter, Route, Routes, Navigate }  from "react-router-dom"; 

function App() {
  return (
    <div className="App"> 
      <h1>Yash Moharir</h1>
      <h2>Section - CS5610.20596.202510</h2>
      <h2>LABS</h2>

      <a href='#/Labs'>Labs A1 - Week 1</a>  <br/>
      <a href='https://main--kanbas-yash-moharir.netlify.app/'>Kanbas - Week 2</a>  <br/>
      <a href='https://github.com/YASH-MOHARIR/Kanbas-webdev-project-Yash-Moharir'>Github Repository - Kanbas</a> <br/>
      <a href='https://github.com/YASH-MOHARIR/a1-webdev-landing-page'>Github Repository - Landing Page + Labs</a>

      <div>
        <HashRouter>
          <Routes> 
            <Route path="/Labs" element={<Labs />} /> 
          </Routes>
        </HashRouter>
      </div>

    </div>
  );
}

export default App;
