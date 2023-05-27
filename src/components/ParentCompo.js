import React, { useState } from "react";
import ChildCompo from "./ChildCompo";

const ParentCompo = () => {
  const [showModal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };
  return (
    <div className="parentDiv">
      <h2>Parent Component</h2><br/><br/>
      <ChildCompo showModal={showModal} handleClick={handleClick} />
    </div>
  );
};

export default ParentCompo;
