import './App.css';
import Education from './components/Education';
import NavBar from './components/NavBar'
import Profile from './components/Profile';

function App() {
  
  return (
    <div className='container'>
      <NavBar/>
      <Profile/>
      <Education/>
    </div>
  )
}

export default App
