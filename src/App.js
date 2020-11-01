import React  from 'react';
import ImageComponent from './profile/ImageComponent';
import Profilecomp from "./profile/Profilecomp";
import imageInSrc from "./imageInSrc.png"
const App = () => {
  const userDetails = {
    name: "User1",
    bio: "NY",
    profession: "Doctor",
  
  }
  return (
    <Profilecomp userDetails={userDetails} >
      <ImageComponent src={imageInSrc} />
      </Profilecomp>
  );

}
export default App;