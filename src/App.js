
import './App.css';


// IMPORTS COMPONENTS
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Cards />
      <Projects />
    </div>
  );
}

export default App;
