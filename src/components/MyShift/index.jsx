import moment from "moment";
import ShiftByDay from "../ShiftByDay";

function MyShift({ shiftData }) {
  const midNightTimeStamp = Number(moment().startOf("day").format("x")); //Timestamp of today's midnight.

  // Group the objects by date
  const groupedByDate = shiftData
    .filter((item) => item.startTime >= midNightTimeStamp)
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
            />
          );
        })}
    </div>
  );
}

export default MyShift;
