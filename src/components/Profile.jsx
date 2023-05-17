import kai from '../assets/kai.jpeg';
import './Profile.css';

function Profile(){
    return (
        <div className='text-center' id="profile">
            <img src={kai} alt="Unable to load profile" className='my-4 profile-img'/>
            <div className='backgroundContent p-4 rounded-3'>
                <h1>Mr. Weerawut Chaiyasomboon</h1>
                <h1>นาย วีรวุฒิ ชัยยะสมบูรณ์</h1>
                <p className='p-4 fs-5'>I am educating strong skills in Full Stack, Software engineering, UX/UI design, and Agile Project management. With over 20 years of project management experience in diverse industries, I bring valuable collaboration and communication skills to the table. Currently pursuing a MSc. in Web Engineering and Mobile App Development, I am eager to apply my education and experience to make meaningful contributions as a <br/><b>Software Engineer/Project Manager.</b></p>
                <div className='backgroundContact p-4'>
                    <h5>Contact</h5>
                    Email: <a href='mailto:weerawut@live.com'>weerawut@live.com</a><br/>
                    GitHub: <a href='https://github.com/superkookai'>https://github.com/superkookai</a>
                </div>
            </div>
        </div>
    )
}

export default Profile;