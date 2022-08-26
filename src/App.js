import "./App.css";
import AppRouter from "./router/AppRouter";
import { SimpsonsProvider } from "./context/SimpsonsContext";

function App() {
  return (
    <SimpsonsProvider>
      <AppRouter />
    </SimpsonsProvider>
  );
}

export default App;
