
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

import Gallery from './components/Gallery/Gallery';
import Socialmedia from './components/Socialmedia/Socialmedia';

import Card from './components/Cards/Card';
import ScrollToTop from './components/utils/ScrollToTop';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />  
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
