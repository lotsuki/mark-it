import React, { useEffect } from 'react';

const IconDown = ({ setIsOpen, setCategory, exitCategories }) => {
  // useEffect(() => {
  //   document.removeEventListener('click', exitCategories);
  // }, [])

  const handleDownClick = (e) => {
    //console.log(e.target.parentElement.children[1])
    setIsOpen(true);
    setCategory(e.target.parentElement.children[1].value);
    //document.addEventListener('click', exitCategories);
  };
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="#616362" style={{padding: '6px'}} onClick={handleDownClick}>
     <path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 14.90625 20.96875 C 14.863281 20.976563 14.820313 20.988281 14.78125 21 C 14.40625 21.066406 14.105469 21.339844 14 21.703125 C 13.894531 22.070313 14.003906 22.460938 14.28125 22.71875 L 24.28125 32.71875 C 24.46875 32.914063 24.730469 33.023438 25 33.023438 C 25.269531 33.023438 25.53125 32.914063 25.71875 32.71875 L 35.71875 22.71875 C 36.117188 22.320313 36.117188 21.679688 35.71875 21.28125 C 35.320313 20.882813 34.679688 20.882813 34.28125 21.28125 L 25 30.5625 L 15.71875 21.28125 C 15.511719 21.058594 15.210938 20.945313 14.90625 20.96875 Z "></path>
   </svg>
  )
};

export default IconDown;