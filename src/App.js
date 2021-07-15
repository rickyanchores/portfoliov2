
import './App.css';


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

function App() {
  return (
    <div className="App">
      <Nav />  
      <Home />
      <Cards />
      <Gallery />
      <Projects />
      <About />
      <Contacts />
      <Footer />
      <Test />
      <Test2 />
      <Gallery />
    </div>
  );
}

export default App;
