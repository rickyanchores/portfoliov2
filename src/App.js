
import './App.css';


// IMPORTS COMPONENTS
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Cards />
      <Projects />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
