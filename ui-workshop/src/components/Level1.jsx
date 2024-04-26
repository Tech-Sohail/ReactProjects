import React, { useState } from "react";
import { NameContext } from "../context";
import Level2 from "./Level2";

function Level1() {
  const [name, setName] = useState("Test");
  return (
    <div>
      <NameContext.Provider value={{ name, setName }}>
        Level1 : {name}
        <Level2 />
      </NameContext.Provider>
    </div>
  );
}

export default Level1;
