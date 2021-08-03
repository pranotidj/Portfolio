const MExperience = ({Experience}) => {
    
    return(
        <div className="about">
        <h2 className="title2">Experience</h2>
        {Experience.map(exp => 
            <div className="box" key={exp.CompanyName}>
                <div className="year_company">
                    <h5>{exp.Year}</h5>
                    <h5>{exp.CompanyName}</h5>
                </div>
                <div className="text">
                    <h4>{exp.Role}</h4>
                    <p>{exp.WorkDescription}</p>
                </div>
            </div>
        )}
       
        
    </div>
    );
}
export default MExperience;