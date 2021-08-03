import MAbout from './main/MAbout';
import MExperience from './main/MExperience';
import MInterests from './main/MInterests';
import MSkills from './main/MSkills';

const MainPage = ({MainData}) =>{
    const { About , Experience, SkillSet, Hobbies } = MainData;
    return(
        <div className="right_Side">
           <MAbout About = {About}/>
           <MExperience Experience = {Experience} />
           <MSkills SkillSet = {SkillSet} />
           <MInterests Hobbies = {Hobbies} />
        </div>
    );

}
export default MainPage;