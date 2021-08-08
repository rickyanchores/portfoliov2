
import './App.css';
//IMPORT REACT ROUTER DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// IMPORTS COMPONENTS
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Test from './components/TEST/Test';
import Test2 from './components/TEST/Test2';
import Gallery from './components/Gallery/Gallery';
import Socialmedia from './components/Socialmedia/Socialmedia';
import Test4 from './components/TEST/Test4';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />  
        <Home />
        <Socialmedia />
        <About />
        <Projects />
        <Contacts />
        <Footer />
        <Test4 />
      </Router>
    </div>
  );
}

export default App;
