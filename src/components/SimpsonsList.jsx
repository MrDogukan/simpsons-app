import React, { useContext } from "react";
import SimpsonsContext from "../context/SimpsonsContext";

import ListItem from "./ListItem";

const SimpsonsList = () => {
  const { simpsons } = useContext(SimpsonsContext);
  // console.log(simpsons);
  return (
    <div>
      <h1>Simpsons List</h1>
      {simpsons.map((simpson, index) => {
        return <ListItem simpson={simpson} index={index} key={simpson.id} />;
      })}
    </div>
  );
};

export default SimpsonsList;
