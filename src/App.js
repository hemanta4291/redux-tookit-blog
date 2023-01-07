import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Counter } from './features/counter/Counter';
import BlogDetail from './pages/BlogDetail';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:blogId" element={<BlogDetail />} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
