import moment from "moment";
import Box from "../Box";
import "./ShiftByDay.css";

function ShiftByDay({ date, dayShiftData, showArea }) {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  const tomorrow = moment().add(1, "days").format("MMMM D"); // get tomorrow's date in month name and date format

  let headingDate;
  if (date === today) {
    headingDate = "Today";
  } else if (date === tomorrow) {
    headingDate = "Tomorrow";
  } else {
    headingDate = date;
  }

  dayShiftData.sort((a, b) => a.startTime - b.startTime);

  const noOfShifts = dayShiftData && dayShiftData.length;

  const shiftDuration =
    dayShiftData &&
    dayShiftData.reduce((acc, cv) => {
      let duration = 0;
      if (cv.endTime && cv.startTime) {
        duration = Number(cv.endTime) - Number(cv.startTime);
      }
      return duration + acc; // return the accumulated value
    }, 0);

  const shiftDurationHR = Math.floor(shiftDuration / 3.6e6);

  const shiftDurationMM = Math.floor(
    (shiftDuration - shiftDurationHR * 3.6e6) / 6e4
  );
  return (
    <div>
      {headingDate && (
        <div className="heading-day">
          <p className="heading-date">{headingDate}</p>
          <span>
            {noOfShifts} {noOfShifts === 1 ? "shift" : "shifts"},
          </span>
          <span>
            {shiftDurationHR} h {shiftDurationMM ? `${shiftDurationMM} m` : ""}
          </span>
        </div>
      )}
      {dayShiftData &&
        dayShiftData.map((element) => (
          <Box
            key={element.id}
            startTime={element.startTime}
            endTime={element.endTime}
            bookedStatus={element.booked}
            area={element.area}
            showArea={showArea}
          />
        ))}
    </div>
  );
}

export default ShiftByDay;
