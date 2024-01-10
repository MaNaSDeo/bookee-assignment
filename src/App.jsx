import data from "./components/api/api.json";
import "./App.css";
// import Box from "./components/Box";
import MyShift from "./components/MyShift";

function App() {
  const shiftData = data;
  // console.log(shiftData);
  // const data = [
  //   {
  //     id: "55d336a5-7c70-4ad9-8fc3-e97724085d09",
  //     booked: true,
  //     area: "Helsinki",
  //     startTime: 1704868200000,
  //     endTime: 1704875400000,
  //   },
  // ];

  return (
    <div className="booking-page">
      <MyShift shiftData={shiftData} />
      {/*  */}
    </div>
  );
}

export default App;
