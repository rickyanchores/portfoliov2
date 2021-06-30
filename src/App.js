
import './App.css';


// IMPORTS COMPONENTS
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Cards />
    </div>
  );
}

export default App;
