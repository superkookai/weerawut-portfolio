const experiences = [
    {
        id: 6,
        duration: "November 2014 to September 2020",
        position: "Construction Site Manager",
        company: "Cargill Siam Co.,Ltd. (Cargill Group)"
    },
    {
        id: 5,
        duration: "March 2011 to October 2014",
        position: "Senior Project Manager",
        company: "N-line Agro International Co.,Ltd."
    },
    {
        id: 4,
        duration: "August 2009 to December 2009",
        position: "Project Manager",
        company: "Tpro South East Asia Co.,Ltd."
    },
    {
        id: 3,
        duration: "April 2008 to March 2009",
        position: "Project Manager",
        company: "Intellimec Co.,Ltd."
    },
    {
        id: 2,
        duration: "October 2007 to March 2008",
        position: "General Manager",
        company: "Prairie Engineering International Limited."
    },
    {
        id: 1,
        duration: "May 1997 to September 2007",
        position: "Project Manager",
        company: "N-line Agro International Co.,Ltd."
    }
]

function Experience(){
    return (
        <div className="container mt-5 text-center" id="experiences">
        <h1>Work Experience</h1>
        <table className="table table-bordered table-hover mt-4">
            <thead className="table-primary">
                <tr>
                    <th>Duration</th>
                    <th>Position</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody className="table-light text-start">
            {
                experiences.map((experience)=>{
                    return (
                        <tr key={experience.id}>
                            <td>{experience.duration}</td>
                            <td>{experience.position}</td>
                            <td>{experience.company}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
    )
}

export default Experience;