import html5 from '../assets/html5.png';
import css3 from '../assets/css3.png';
import js from '../assets/js.png';
import bootstrap from '../assets/bootstrap.png';
import react from '../assets/react.png';
import next from '../assets/nextjs.png';
import node from '../assets/nodejs.png';
import express from '../assets/expressjs.png';
import typescript from '../assets/typescript.png';
import swift from '../assets/swift.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import firebase from '../assets/firebase.png';
import github from '../assets/github.png';

import './Skill.css';

const skills = [
    {title: 'HTML5', image: html5},
    {title: 'CSS3', image: css3},
    {title: 'Javascript', image: js},
    {title: 'Bootstrap5', image: bootstrap},
    {title: 'Typescript', image: typescript},
    {title: 'React', image: react},
    {title: 'NextJS', image: next},
    {title: 'NodeJS', image: node},
    {title: 'ExpressJS', image: express},
    {title: 'MongoDB', image: mongodb},
    {title: 'MySQL', image: mysql},
    {title: 'Firebase', image: firebase},
    {title: 'Swift', image: swift},
    {title: 'GitHub', image: github},
]

function Skill(){
    return (
        <>
            <h1 className='text-center mt-5'>Skills</h1>
            <div className="container mt-3 text-center d-flex justify-content-center flex-wrap">
            {
                skills.map(skill => {
                    return (
                        <div className="card m-2 backgroundSkill" style={{width:"15%"}} key={skill.title}>
                            <img src={skill.image} className="card-img-top" alt={skill.title} style={{height:"75%"}}/>
                            <div className="card-body">
                                <h5 class="card-title">{skill.title}</h5>
                            </div>
                        </div>
                    );
                })
            }
            </div>
        </>
    )
}

export default Skill;