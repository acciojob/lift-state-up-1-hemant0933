import React from 'react';
import Modal from './Modal';

const ChildCompo = (props) => {

  return (
    <div className='childDiv'>
      <h2>
       Child Component
      </h2><br/>
      <button onClick={props.handleClick} >Show Model</button>
      {props.showModal == true ?  <Modal /> : ""}
    </div>
  );
}

export default ChildCompo;
