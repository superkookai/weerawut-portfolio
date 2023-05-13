import './NavBar.css';

function NavBar(){
    return (
        <header className="d-flex justify-content-center py-3 backgroundClass rounded-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link text-dark">Home</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-dark">Profile</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark">Work Experiences</a>
            </li>
          </ul>
      </header>
    )
}

export default NavBar;