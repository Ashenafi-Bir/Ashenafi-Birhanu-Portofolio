import Portfolio from './componenets/Portofolio/Portfolio.jsx';
import TopBar from './componenets/TopBar/TopBar.jsx';
import Testimonials from './componenets/testimonials/Testimonials.jsx';
import Work from './componenets/work/Work.jsx';
import './App.css'
import Intro from './componenets/intro/Intro.jsx';
import Contact from './componenets/contact/Contact.jsx';
import Menu from './componenets/menu/Menu.jsx'
import { useState } from 'react';
// import Skills from './componenets/Skills/Skills.jsx';

function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Intro/>
     <Portfolio/>
     {/* <Skills/> */}
     <Work/>
     <Testimonials/>
     <Contact/>
      </div>
    </div>   
  );
}

export default App;
