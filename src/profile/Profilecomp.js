import React from 'react';
import propTypes from 'prop-types';
export default function Profilecomp(props) {
    console.log(props)
    const { userDetails } = props
    return (
<div> 
    
<div style={{ height: '30' ,  color: 'red'}}>  <h1>{userDetails.name}</h1>  </div>
        
      <div>  <h1> {userDetails.bio}</h1></div>
      <div>  <h1>{userDetails.profession}</h1> </div>
    <div style={{ borderRadius: '50%',  width: '20'}}> 
        {props.children}</div>

</div>
    )
}
Profilecomp.propTypes = {
    name: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
  };
