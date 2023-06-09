import './App.css';
import Education from './components/Education';
import NavBar from './components/NavBar'
import Profile from './components/Profile';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className='container'>
      <NavBar/>
      <Profile/>
      <Education/>
      <Skill/>
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default App
