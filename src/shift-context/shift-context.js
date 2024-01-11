import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShiftContext = createContext({});

export default function ShiftContextProvider() {
  const [shiftData, setShiftData] = useState([]);
  const api_URL = "http://127.0.0.1:8080/shifts";
  // console.log(shiftData);

  function handleApi(api_URL) {
    const response = axios.get(api_URL);
    setShiftData(response);
  }

  useEffect(() => {
    handleApi(api_URL);
  }, []);
}
