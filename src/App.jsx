import data from "./components/api/api.json";
import "./App.css";
import Box from "./components/Box";
function App() {
  const shiftData = data;
  console.log(shiftData);
  return (
    <div className="booking-page">
      <Box />
    </div>
  );
}

export default App;
