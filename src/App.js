import "./App.css";
import AppRouter from "./router/AppRouter";
import { SimpsonsProvider } from "./context/SimpsonsContext";
import "./App.css";

function App() {
  return (
    <SimpsonsProvider>
      <AppRouter />
    </SimpsonsProvider>
  );
}

export default App;
