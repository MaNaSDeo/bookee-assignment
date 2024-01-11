import LandingPage from "./components/LandingPage";
import ShiftContextProvider from "./shift-context/ShiftContextProvide";

function App() {
  return (
    <ShiftContextProvider>
      <LandingPage />
    </ShiftContextProvider>
  );
}

export default App;
