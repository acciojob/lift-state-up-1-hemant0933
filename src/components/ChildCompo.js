import React from 'react';
import Modal from './Modal';

const ChildCompo = ({handleClick,showModal}) => {

  return (
    <div className='childDiv'>
      <h2>
       Child Component
      </h2><br/>
      <button onClick={handleClick} >Show Model</button>
      {showModal == true ? <Modal />: "" }
    </div>
  );
}

export default ChildCompo;
