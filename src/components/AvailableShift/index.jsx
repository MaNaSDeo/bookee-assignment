import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState, useEffect, useContext } from "react";
import moment from "moment";
import ShiftByDay from "../ShiftByDay";
import { ShiftContext } from "../../shift-context/ShiftContextProvide";

function AvailableShift() {
  const { shiftData } = useContext(ShiftContext);
  const [selectedTab, setSelectedTab] = useState(0);
  const [groupedByDate, setGroupedByDate] = useState({});

  const midNightTimeStamp = Number(moment().startOf("day").format("x")); //Timestamp of today's midnight.

  const sortedByArea = new Map();

  const result = shiftData.map((element) => {
    if (sortedByArea.has(element.area)) {
      sortedByArea.get(element.area).push(element);
    } else {
      sortedByArea.set(element.area, [element]);
    }
    return element;
  });

  let areasArray = [];
  for (let [key, value] of sortedByArea) {
    areasArray.push(key);
  }
  useEffect(() => {
    const sortedData = sortedByArea.get(areasArray[selectedTab]);

    const newGroupedByDate = sortedData
      .filter((item) => item.startTime >= midNightTimeStamp)
      .reduce((acc, obj) => {
        const date = moment(obj.startTime).format("MMMM D");
        if (!acc[date]) acc[date] = [];
        acc[date].push(obj);
        return acc;
      }, {});
    setGroupedByDate(newGroupedByDate);
  }, [selectedTab]);

  return (
    <div>
      <Tabs
        value={selectedTab}
        onChange={(e, value) => {
          setSelectedTab(value);
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#f7f7fb",
          },
        }}
      >
        {areasArray.map((element) => (
          <Tab
            label={`${element} (${sortedByArea.get(element).length})`}
            key={element}
            style={{
              color: "#004fb4",
              fontSize: "1.2rem",
              fontWeight: 500,
              textTransform: "none",
            }}
          />
        ))}
      </Tabs>
      {Object.keys(groupedByDate).map((key) => {
        return (
          <ShiftByDay key={key} date={key} dayShiftData={groupedByDate[key]} />
        );
      })}
    </div>
  );
}

export default AvailableShift;
