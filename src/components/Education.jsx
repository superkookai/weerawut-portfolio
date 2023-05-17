const educations = [
    {
        id: 3,
        year: "Dec 2023",
        degree: "MSc. Web engineering and Mobile application development",
        university: "Dhurakij Pundit University"
    },
    {
        id: 2,
        year: "May 2023",
        degree: "Junior Software Developer Bootcamp Cohort 4",
        university: "Generation Thailand"
    },
    {
        id: 1,
        year: "1997",
        degree: "Bachelor of Engineering (Mechanical Engineering)",
        university: "Chulalongkorn University"
    },
]

function Education(){
    return (
        <div className="container mt-5 text-center" id="education">
        <h1 className='border-bottom border-white pb-3'>Education</h1>
        <table className="table table-bordered table-hover mt-4">
            <thead className="table-primary">
                <tr>
                    <th>Year</th>
                    <th>Degree/Certificate</th>
                    <th>University/Organization</th>
                </tr>
            </thead>
            <tbody className="table-light text-start">
            {
                educations.map((education)=>{
                    return (
                        <tr key={education.id}>
                            <td>{education.year}</td>
                            <td>{education.degree}</td>
                            <td>{education.university}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
    )
}

export default Education;