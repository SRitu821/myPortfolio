import './App.css';
import { HashLoader } from 'react-spinners';
import About from './Components/About/about';
import Navbar from './Components/Navbar/navBar';
import Introduction from './Components/Introduce/intro';
import Journey from './Components/Journey/journey';
import Project from './Components/Projects/project';
import Resume from './Components/Resume/resume';
import Skills from './Components/Skills/skills';
import Contact from './Components/Contact/contact';
import { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

 /*  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
    ReactGA.send('pageview');
  }, []); */

  return (
    <div className="App">
      {/* {loading ? (
        <HashLoader className="page-loader" color={"#28e98c"} loading={loading} size={50} />
      ) : (
        <> */}
      <div className="res_navBar"><Navbar /></div>
        <div><About /></div>
      <div className="mainContent">
        <div className="cls"><Introduction /></div>
        <div className="cls"><Journey /></div>
        <div className="cls"><Project /></div>
        <div className="cls"><Resume /></div>
        <div className="cls"><Skills /></div>
        <div className="cls"><Contact /></div>
      </div>
      <div><div className="navbar"><Navbar /></div></div>
      {/* </> */}
      {/* )} */}
    </div>
  );
}

export default App;
