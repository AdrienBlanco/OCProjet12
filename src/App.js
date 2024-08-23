import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProjectsList from './components/ProjectsList';
import Skill from './components/Skill';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import Margin from './components/Margin';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <ProjectsList/>
      <Margin />
      <Contact/>
      <BackToTop/>
    </div>
  );
}

export default App;

