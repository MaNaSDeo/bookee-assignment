import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  const api_URL = "http://127.0.0.1:8080/shifts";

  const handleApi = async (api_URL) => {
    try {
      const response = await axios.get(api_URL);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    handleApi(api_URL);
  }, []);

  return <>Hello</>;
}

export default App;
