import './App.css';
import About from './pages/About';
import Carmodel from './pages/Carmodel';
import Contact from './pages/Contact';
import Review from './pages/Review';
import Team from './pages/Team';
import Coverpage from './pages/coverpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Coverpage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/model' element={<Carmodel />}/>
        <Route path='/testmonial' element={<Review />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
