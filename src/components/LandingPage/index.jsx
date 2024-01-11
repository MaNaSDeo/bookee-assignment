import data from "../api/api.json";
import "./LandingPage.css";
import MyShift from "../MyShift";
import AvailableShift from "../AvailableShift";
import { useState } from "react";

function LandingPage() {
  const shiftData = data;
  const [activeTab, setActiveTab] = useState("MyShifts");

  return (
    <div className="booking-page">
      <div className="link-container">
        <p
          onClick={() => setActiveTab("MyShifts")}
          className={activeTab === "MyShifts" ? "active-tab" : "inactive-tab"}
        >
          My shifts
        </p>
        <p
          onClick={() => setActiveTab("AvailableShifts")}
          className={
            activeTab === "AvailableShifts" ? "active-tab" : "inactive-tab"
          }
        >
          Available shifts
        </p>
      </div>
      {activeTab === "MyShifts" && <MyShift shiftData={shiftData} />}
      {activeTab === "AvailableShifts" && (
        <AvailableShift shiftData={shiftData} />
      )}
    </div>
  );
}

export default LandingPage;
