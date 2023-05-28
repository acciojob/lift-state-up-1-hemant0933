import React, { useState } from "react";
import ChildCompo from "./ChildCompo";

const ParentCompo = () => {
  const [showModal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };
  return (
    <div className="parent">
      <h1>Parent Component</h1><br/><br/>
      <ChildCompo showModal={showModal} handleClick={handleClick} />
    </div>
  );
};

export default ParentCompo;
