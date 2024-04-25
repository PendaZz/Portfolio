import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Resume from './component/Resume';
import Portfolio from './component/Portfolio';
import About from './component/About';
import background from './img/Starry_Sky.jpg';

/**
 * React component for the main App.
 *
 * @return {JSX.Element} The main App component.
 */
function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: `100%`}}>
        <Router>    
            <Header />
            <Routes>
                <Route exact path='/' Component={Home} />
                <Route path='/Resume' Component={Resume} />
                <Route path='/Portfolio' Component={Portfolio} />
                <Route path='/About' Component={About} />
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;
