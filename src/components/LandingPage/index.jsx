import { useContext } from "react";
import "./LandingPage.css";
import MyShift from "../MyShift";
import AvailableShift from "../AvailableShift";

import { ShiftContext } from "../../shift-context/ShiftContextProvide";

function LandingPage() {
  const { activeTab, shiftData, updateActiveTab } = useContext(ShiftContext);

  return (
    <div className="booking-page">
      <div className="link-container">
        <p
          onClick={() => updateActiveTab("MyShifts")}
          className={activeTab === "MyShifts" ? "active-tab" : "inactive-tab"}
        >
          My shifts
        </p>
        <p
          onClick={() => updateActiveTab("AvailableShifts")}
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
