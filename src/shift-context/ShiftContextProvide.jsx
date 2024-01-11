import { createContext, useEffect, useState } from "react";
import axios from "axios";
import data from "../components/api/api.json";

export const ShiftContext = createContext({
  activeTab: "MyShifts",
  shiftData: [],
  updateActiveTab: () => {},
  handleShiftCancel: () => {},
  handleShiftBooking: () => {},
});

export default function ShiftContextProvider({ children }) {
  const api_URL = "http://127.0.0.1:8080/shifts";

  const storedData = JSON.parse(localStorage.getItem("shiftData"));
  const [shiftData, setShiftData] = useState(storedData || []);

  async function handleApi(api_URL) {
    try {
      const response = await axios.get(api_URL);
      if (response.status === 200) {
        setShiftData(response.data);
      }
    } catch (error) {
      console.error(error);
      setShiftData(data);
    }
  }

  useEffect(() => {
    if (!shiftData.length) {
      handleApi(api_URL);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shiftData", JSON.stringify(shiftData));
  }, [shiftData]);

  const [activeTab, setActiveTab] = useState("MyShifts");

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
