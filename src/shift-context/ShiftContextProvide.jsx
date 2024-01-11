import { createContext, useEffect, useState } from "react";
// import axios from "axios";
import data from "../components/api/api.json";

export const ShiftContext = createContext({
  activeTab: "MyShifts",
  shiftData: [],
  updateActiveTab: () => {},
  handleShiftCancel: () => {},
  handleShiftBooking: () => {},
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
  // console.log(shiftData);

  function handleActiveTab(value) {
    setActiveTab(value);
  }
  function handleShiftCancel(id) {
    setShiftData((prevData) =>
      prevData.map((shift) =>
        shift.id === id ? { ...shift, booked: false } : shift
      )
    );
  }
  function handleShiftBooking(id) {
    setShiftData((prevData) =>
      prevData.map((shift) =>
        shift.id === id ? { ...shift, booked: true } : shift
      )
    );
  }

  const shiftValue = {
    activeTab: activeTab,
    shiftData: shiftData,
    updateActiveTab: handleActiveTab,
    handleShiftCancel: handleShiftCancel,
    handleShiftBooking: handleShiftBooking,
  };
  return (
    <ShiftContext.Provider value={shiftValue}>{children}</ShiftContext.Provider>
  );
}
