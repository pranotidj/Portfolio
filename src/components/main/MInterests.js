const MInterests = ({Hobbies}) => {
   
    return(
        <div className="about interest">
              <h2 className="title2">Interests</h2>
              <ul>
                {Hobbies.map(hobby => 
                  <li key={hobby}><i className="fa fa-book" aria-hidden="true"></i> {hobby}</li>
                )}
             </ul>
          </div>
    );

}
export default MInterests;