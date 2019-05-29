import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
  return (
    <div className="main">
      <ul className="catContainer">
        <li className="cat">Category 1
          <ul className="subjContainer">
            <li className="subj">Subject 1</li>
            <li className="subj">Subject 2</li>
          </ul>
        </li>
        <li className="cat">Category 2
         <ul className="subjContainer">
            <li className="subj">Subject 1</li>
            <li className="subj">Subject 2</li>
          </ul></li>
        <li className="cat">Category 3
          <ul className="subjContainer">
            <li className="subj">Subject 1</li>
            <li className="subj">Subject 2</li>
          </ul>
        </li>
      </ul>
      <br style={{clear: "both"}}></br>
    </div>
  )

  //  return (
  //   <div className="main">
  //     <ul className="marksContainer">
  //         <li className="catContainer">
  //           <div className="catWrapper">
  //             <div className="cat">Category1</div>
  //             <i className="fas fa-chevron-down"></i>
  //           </div>
  //           <ul className="dropdown">
  //             <li className="subjContainer">
  //               <div className="subjWrapper">
  //                 <div className="subj">Subject1</div>
  //               </div>
  //               <ul className="titdropdown">
  //                   <li className="tit"><a href="#">Title1</a></li>
  //                   <li className="tit"><a href="#">Title2</a></li>
  //                   <li className="tit"><a href="#">Logo Design3</a></li>
  //               </ul>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="catContainer">
  //           <div className="catWrapper">
  //             <div className="cat">Category2</div>
  //             <i className="fas fa-chevron-down"></i>
  //           </div>
  //           <ul className="dropdown">
  //             <li className="subjContainer">
  //               <div className="subjWrapper">
  //                 <div className="subj">Subject2</div>
  //               </div>
  //               <ul className="titdropdown">
  //                   <li className="tit"><a href="#">Title1</a></li>
  //                   <li className="tit"><a href="#">Title2</a></li>
  //                   <li className="tit"><a href="#">Title3</a></li>
  //               </ul>
  //             </li>
  //           </ul>
  //         </li>
  //     </ul>
  //     <br style={{clear: "both"}}></br>
  //   </div>
  // )
}
export default Dropdown;