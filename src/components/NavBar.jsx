import './NavBar.css';

function NavBar(){
    return (
        <header className="d-flex justify-content-center py-3 backgroundClass rounded-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#profile" className="nav-link text-dark">Profile</a>
            </li>
            <li className="nav-item">
                <a href="#education" className="nav-link text-dark">Education</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link text-dark">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link text-dark">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#experiences" className="nav-link text-dark">Work Experiences</a>
            </li>
          </ul>
      </header>
    )
}

export default NavBar;