const MSkills = ({SkillSet}) => {
   
    return(

        <div className="about skills">
              <h2 className="title2">Professionals skills</h2>
              {SkillSet.map(skill => 
                <div className="box" key={skill.Name}>
                    <h4>{skill.Name}</h4>
                    <div className="percent">
                        <div style={{ width : skill.Percentage + '%'}}></div>
                    </div>
                </div> 
              )}  
          </div>
    );

}
export default MSkills;