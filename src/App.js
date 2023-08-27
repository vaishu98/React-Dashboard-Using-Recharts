import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Dashboard from './MyComponents/Dashboard';
import About from './MyComponents/About';
import Contact from './MyComponents/Contact';


function App() {


  let component
  switch (window.location.pathname) {
    case "/":
      component = <Dashboard />
      break
    case "/contact":
      component = <Contact />
      break
    case "/about":
      component = <About />
      break
  }


  return (
    <div className='mm'>
      <Header title="Dashboard" />
      {component}

      <Footer />
    </div>
  );
}

export default App;
