import './App.css';
import About from './Components/About/about';
import Navbar from './Components/Navbar/navBar';
import Introduction from './Components/Introduce/intro';
import Journey from './Components/Journey/journey';
import Project from './Components/Projects/project';
import Resume from './Components/Resume/resume';
import Skills from './Components/Skills/skills';
import Contact from './Components/Contact/contact';

function App() {
  return (
    <div className="App">
      <div className="grid1">
        <div><About /></div>
      </div>
      <div className="mainContent">
        <div><Introduction /></div>
        <div><Journey /></div>
        <div><Project /></div>
        <div><Resume /></div>
        <div><Skills /></div>
        <div><Contact /></div>

      </div>
      <div className="grid3">
        <div><Navbar /></div>
      </div>
    </div>
  );
}

export default App;
