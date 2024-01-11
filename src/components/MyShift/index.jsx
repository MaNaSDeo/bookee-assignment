import { useContext } from "react";
import moment from "moment";
import ShiftByDay from "../ShiftByDay";
import { ShiftContext } from "../../shift-context/ShiftContextProvide";

function MyShift() {
  const { shiftData } = useContext(ShiftContext);

  const midNightTimeStamp = Number(moment().startOf("day").format("x")); //Timestamp of today's midnight.

  // Group the objects by date
  const groupedByDate = shiftData
    .filter((item) => item.startTime >= midNightTimeStamp && item.booked)
    .reduce((acc, obj) => {
      const date = moment(obj.startTime).format("MMMM D");
      if (!acc[date]) acc[date] = [];
      acc[date].push(obj);
      return acc;
    }, {});

  return (
    <div>
      {groupedByDate &&
        Object.keys(groupedByDate).map((key) => {
          return (
            <ShiftByDay
              key={key}
              date={key}
              dayShiftData={groupedByDate[key]}
              myShift={true}
            />
          );
        })}
    </div>
  );
}

export default MyShift;
