const SEducation = ({Education}) =>{
    
    return(
        <div className="contactInfo education">
            <h3 className="title">Education</h3>
            <ul>
            { Education.map(info => (
                <li key={info.Year}>
                    <h5>{info.Year}</h5>
                    <h4>{info.Degree}</h4>
                    <h4>{info.Uni}</h4>
                </li>
            ))}
            </ul>
        </div>
    );

}
export default SEducation;