import './App.css';
import About from './components/About';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Corousel from './components/Corousel';
import Fotter from './components/Fotter';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="title"/>
      <Corousel/>
      <Cards/>
      <About title="title"/>
      <Contact/>
      <Fotter/>
    </>
  );
}

export default App;
