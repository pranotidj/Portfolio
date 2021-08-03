import SProfileText from './sidebar/SProfileText'
import SContactInfo from './sidebar/SContactInfo'
import SEducation from './sidebar/SEducation'
import SLanguage from './sidebar/SLanguage'

const Sidebar = ({Data}) => {
  const { Profile, ContactInfo, Education, Languages} = Data;
  return (
    <div className='left_Side'>
      <SProfileText Profile = {Profile}/>
      <SContactInfo ContactInfo = {ContactInfo}/>
      <SEducation Education = {Education}/>
      <SLanguage Languages = {Languages} />
    </div>
  )
}
export default Sidebar
