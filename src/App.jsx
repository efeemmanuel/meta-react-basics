import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Btn from './components/Btn';
import ModeToggler from './components/ModeToggler';
import Promo from './components/Promo';
import PromoHeading from './components/PromoHeading';
import Homepage from './components/Homepage.jsx';
import About from './components/About.jsx';
import { Routes, Route, Link} from 'react-router-dom';
import './App.css'


// this is parent

function App() {

  return (
    <>

    <nav>
      <a href='#' className='nav-item'>Homepage</a>
      <Link to="/">Homepage</Link>
      <Link to="/about">Homepage</Link>
      <a href='#' className='nav-item'>About us</a>
    </nav>
    <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/about' element={<About />} />
    </Routes>


    <Header name="aNNA" color="purple" />
    <Main greet="howdy" />
    <Sidebar greet="neighbor" />
    <Btn />
    <ModeToggler />
    <Promo/>
    


    </>
  )
}

export default App
