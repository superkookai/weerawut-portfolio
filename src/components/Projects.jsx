import iterative from '../assets/iterative.png';
import westudy_android from '../assets/westudy_android.png';
import westudy_ios from '../assets/westudy_ios.png';
import rest_product from '../assets/rest_product.png';
import fibook from '../assets/fitbook.png';

import styles from './Projects.module.css';

const projects = [
    {id: 1, title: "iterative", description: "Learning Portal Web Site", image: iterative, tech:"HTML/CSS/Bootstrap/JS/PHP/MySQL"},
    {id: 2, title: "WEStudy(Andriod)", description: "Learning Portal App", image: westudy_android, tech:"Native Android with Kotlin/Firebase"},
    {id: 3, title: "WEStudy(iOS)", description: "Learning Portal App", image: westudy_ios, tech:"Native iOS with Swift/Firebase"},
    {id: 4, title: "REST PMS", description: "Product Management System", image: rest_product, tech:"Go/ReactJS/Bootstrap"},
    {id: 5, title: "Fitbook", description: " Exercise Activity Tracker Web App", image: fibook, tech:"MERN Stack"},
]

function Projects(){
    return (
        <div className="container mt-5 text-center" id="projects">
            <h1>Projects</h1>
            <div id="carouselExampleAutoplaying" className={`carousel slide mt-5 ${styles.carouselLayout}`} data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={projects[0].image} className={`d-block w-100 ${styles.projectImage}`} alt="project" />
                        <div className={`w-100 mt-3 py-2 ${styles.projectContent}`}>
                            <h1 className="">{projects[0].title}</h1>
                            <h3>Description: {projects[0].description}</h3>
                            <h2>Tech: {projects[0].tech}</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={projects[1].image} className={`d-block w-100 ${styles.projectImage}`} alt="project" />
                        <div className={`w-100 mt-3 py-2 ${styles.projectContent}`}>
                            <h1 className="">{projects[1].title}</h1>
                            <h3>Description: {projects[1].description}</h3>
                            <h2>Tech: {projects[1].tech}</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={projects[2].image} className={`d-block w-100 ${styles.projectImage}`} alt="project" />
                        <div className={`w-100 mt-3 py-2 ${styles.projectContent}`}>
                            <h1 className="">{projects[2].title}</h1>
                            <h3>Description: {projects[2].description}</h3>
                            <h2>Tech: {projects[2].tech}</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={projects[3].image} className={`d-block w-100 ${styles.projectImage}`} alt="project" />
                        <div className={`w-100 mt-3 py-2 ${styles.projectContent}`}>
                            <h1 className="">{projects[3].title}</h1>
                            <h3>Description: {projects[3].description}</h3>
                            <h2>Tech: {projects[3].tech}</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={projects[4].image} className={`d-block w-100 ${styles.projectImage}`} alt="project" />
                        <div className={`w-100 mt-3 py-2 ${styles.projectContent}`}>
                            <h1 className="">{projects[4].title}</h1>
                            <h3>Description: {projects[4].description}</h3>
                            <h2>Tech: {projects[4].tech}</h2>
                        </div>
                    </div>        
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Projects;