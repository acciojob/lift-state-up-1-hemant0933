import React from 'react';
import Modal from './Modal';

const ChildCompo = (props) => {

  return (
    <div className='childDiv'>
      <h3>
       Child Component
      </h3><br/>
      <button onClick={props.handleClick} >Show Model</button>
      {props.showModal && <Modal />}
    </div>
  );
}

export default ChildCompo;
