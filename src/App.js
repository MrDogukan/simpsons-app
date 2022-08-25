import "./App.css";
import AppRouter from "./router/AppRouter";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://5fc9346b2af77700165ae514.mockapi.io/simpsons";

function App() {
  const [simpsons, setSimpsons] = useState([]);

  const getSimpsons = () => {
    axios
      .get(API_URL)
      .then((res) => setSimpsons(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSimpsons();
  }, []);

  console.log(simpsons);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
