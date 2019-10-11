import React from 'react';

const UploadPhoto = props => {
    const {handleImageChange, imageFile} = props;
  return (
      <div>
        <p>Do you have pictures to post?</p>
        <input type="file" onChange={() => handleImageChange()}/>
        <img src={imageFile}/>
      </div>
    );
}


export default UploadPhoto
