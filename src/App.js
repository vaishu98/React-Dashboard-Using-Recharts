import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Dashboard from './MyComponents/Dashboard';
import About from './MyComponents/About';
import Contact from './MyComponents/Contact';
import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {


  // let component
  // switch (window.location.pathname) {
  //   case "/React-Dashboard-Using-Recharts":
  //     component = <Dashboard />
  //     break
  //   case "/contact":
  //     component = <Contact />
  //     break
  //   case "/about":
  //     component = <About />
  //     break
  //   default:
  //     component = <Dashboard />
  // }


  return (
    <HashRouter >
      <div className='mm'>
        <Header title="Dashboard" />
        <Routes>
          <Route path='/React-Dashboard-Using-Recharts/#' exact element={<Dashboard />} />
          <Route path='/React-Dashboard-Using-Recharts/#contact' exact element={<Contact />} />
          <Route path='/React-Dashboard-Using-Recharts/#about' exact element={<About />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter >


  );
}

export default App;
