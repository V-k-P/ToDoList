import "./App.css";
import Header from "./components/header/header";
import ToDo from "./components/todo/todo";

function App() { 
  return (
    <div className="App container">
      <Header />
      <ToDo/>
    </div>
  );
}

export default App;
