import React from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://5fc9346b2af77700165ae514.mockapi.io/simpsons";
const SimpsonsContext = createContext();

export const SimpsonsProvider = ({ children }) => {
  const [simpsons, setSimpsons] = useState([]);
  const getSimpsons = () => {
    axios
      .get(API_URL)
      .then((res) => setSimpsons(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if ({ ...JSON.parse(localStorage.getItem("simpsons")) }.length > 0) {
      setSimpsons([...JSON.parse(localStorage.getItem("simpsons"))]);
    } else {
      getSimpsons();
    }
  }, []);
  //   console.log(simpsons);

  useEffect(() => {
    localStorage.setItem("simpsons", JSON.stringify(simpsons));
  }, [simpsons]);

  return (
    <SimpsonsContext.Provider value={{ simpsons, setSimpsons, getSimpsons }}>
      {children}
    </SimpsonsContext.Provider>
  );
};

export default SimpsonsContext;
