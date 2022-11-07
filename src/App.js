import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Program from './components/programs';
import Signup from './components/signup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Program/>
        <Signup/>
        <Footer/>
    </div>
  );
}

export default App;

