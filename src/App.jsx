import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <HomePage />
      </div>
      <Navbar />
    </div>
  );
}

export default App;
