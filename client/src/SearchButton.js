import React from 'react';


function SearchButton ({onChangeClick}) {
   
    const onChange= (e)=>{
        var value = e.target.value;
        onChangeClick(value);
    }
    return(
       
        
        <input onChange={onChange} id="license" name="license" type="text" placeHolder="Search..."  />
    );
}

export default SearchButton;