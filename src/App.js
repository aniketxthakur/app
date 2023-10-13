import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './app/components/navbar/Navbar';
import Home from './app/home/home';
import About from './app/about/about';


function App() {
  return (
   <div className='scroller'>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}
export default App;
