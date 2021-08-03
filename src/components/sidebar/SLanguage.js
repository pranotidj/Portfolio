const SLanguage = ({Languages}) => {
  
  return (
    <div className='contactInfo language'>
      <h3 className='title'>Languages</h3>
      <ul>
       { Languages.map(lang => 
        <li>
            <span className='text'>{lang.Name}</span>
            <span className='percent'>
              <div style={{ width : lang.Percent + "%"}}></div>
            </span>
        </li>
       )}
       </ul>
    </div>
  );
}
export default SLanguage;
