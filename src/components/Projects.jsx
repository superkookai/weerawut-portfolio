import iterative from '../assets/iterative.png';
import westudy_android from '../assets/westudy_android.png';
import westudy_ios from '../assets/westudy_ios.png';
import rest_product from '../assets/rest_product.png';
import fibook from '../assets/fitbook.png';

const projects = [
    {id: 1, title: "iterative", description: "Learning Portal Web Site", image: iterative, tech:"HTML/CSS/Bootstrap/JS/PHP/MySQL"},
    {id: 2, title: "WEStudy(Andriod)", description: "Learning Portal App", image: westudy_android, tech:"Native Android with Kotlin/Firebase"},
    {id: 3, title: "WEStudy(iOS)", description: "Learning Portal App", image: westudy_ios, tech:"Native iOS with Swift/Firebase"},
    {id: 4, title: "REST PMS", description: "Product Management System", image: rest_product, tech:"Go/ReactJS/Bootstrap"},
    {id: 5, title: "Fitbook", description: " Exercise Activity Tracker Web App", image: fibook, tech:"MERN Stack"},
]

function Projects(){
    return (
        <div className="container mt-5 text-center">
            <h1>Projects</h1>
        </div>
    )
}

export default Projects;