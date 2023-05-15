import './App.css';
import Education from './components/Education';
import NavBar from './components/NavBar'
import Profile from './components/Profile';
import Skill from './components/Skill';

function App() {
  
  return (
    <div className='container'>
      <NavBar/>
      <Profile/>
      <Education/>
      <Skill/>
    </div>
  )
}

export default App
