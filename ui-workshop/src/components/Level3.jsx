import React, { useContext } from "react";
import { NameContext } from "../context";

function Level3() {
  const nameContext = useContext(NameContext);
  return (
    <div>
      <p>Level 3 : {nameContext.name} </p>
    </div>
  );
}

export default Level3;
