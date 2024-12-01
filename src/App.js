
import About from './components/About';
import Contacts from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
