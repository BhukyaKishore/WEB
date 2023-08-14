import './App.css';
import About from './components/About';
import Cards from './components/Cards';
import Corousel from './components/Corousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="title"/>
      <Corousel/>
      <Cards/>
      <About title="title"/>
    </>
  );
}

export default App;
