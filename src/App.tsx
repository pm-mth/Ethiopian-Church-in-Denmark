import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Header from './Components/Header/Header'; // Import the Header component
import Home from './Pages/Home'; // port pages for routing
import NewHere from './Pages/NewHere';
import About from './Pages/About';
import Services from './Pages/Services'
import Footer from './Components/Footer/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header /> 
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} /> {/* Home page route */}
                        <Route path="/new-here" element={<NewHere />} /> {/* New Here page route */}
                        <Route path="/about" element={<About />} /> {/* About page route */}
                        <Route path="/services" element={<Services />} /> {/* Services page route */}
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
