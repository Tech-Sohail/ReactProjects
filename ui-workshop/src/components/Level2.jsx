import React, { useContext } from "react";
import { NameContext } from "../context";
import Level3 from "./Level3";

function Level2() {
  const nameContext = useContext(NameContext);
  nameContext.setName(
    "If you to update existing value here... it will rreflect in all places."
  );
  return (
    <div>
      <p>Level2 : {nameContext.name}</p>
      <Level3 />
    </div>
  );
}

export default Level2;
