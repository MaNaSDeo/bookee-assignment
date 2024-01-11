import { createContext, useEffect, useState } from "react";
// import axios from "axios";
import data from "../components/api/api.json";

export const ShiftContext = createContext({
  activeTab: "MyShifts",
  shiftData: [],
  updateActiveTab: () => {},
});

export default function ShiftContextProvider({ children }) {
  // const [shiftData, setShiftData] = useState([]);
  // const api_URL = "http://127.0.0.1:8080/shifts";
  // // console.log(shiftData);
  // function handleApi(api_URL) {
  //   const response = axios.get(api_URL);
  //   setShiftData(response);
  // }
  // useEffect(() => {
  //   handleApi(api_URL);
  // }, []);
  const [activeTab, setActiveTab] = useState("MyShifts");
  const [shiftData, setShiftData] = useState(data);
  console.log(handleActiveTab);

  function handleActiveTab(value) {
    setActiveTab(value);
  }
  // function handleShiftData(newData) {
  //   setShiftData(newData);
  // }

  const shiftValue = {
    activeTab: activeTab,
    shiftData: shiftData,
    updateActiveTab: handleActiveTab,
  };
  return (
    <ShiftContext.Provider value={shiftValue}>{children}</ShiftContext.Provider>
  );
}
