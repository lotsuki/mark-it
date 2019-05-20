import React, { useState } from 'react';
import Dropdown from 'Dropdown.jsx';
import Subjects

const Categories = ({ userID, qlinks, bmarks }) => {
  const [ category, setCategory ] = useState('');
  const [ subject, setSubject ] = useState('');

  const handleClick = (e) => {
    setCategory(e.target.innerText)
    setSubject(e.target.innerText)
  }

  return (
    <div onClick={handleClick}>{category}</div>
    <Subjects />
  )
}


// import React, { useState } from 'react';
// import Dropdown from './Dropdown.jsx';

// const Categories = ({ data }) => {
//   const [ isOpen, setIsOpen ] = useState(false);

//   const handleClick = () => {

//   };

//   return (
//     <div className="categoryWrapper" >
//       <div className="dropbtn" onClick={handleClick}>
//         {data.map(category => (
//           <div className="category" key={category.category}>{category.category}
//           </div>
//           ))}
//       </div>
//     </div>
//   );
// };

export default Categories;



