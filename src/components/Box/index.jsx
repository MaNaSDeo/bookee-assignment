import { useContext } from "react";
import "./Box.css";
import moment from "moment";
import { ShiftContext } from "../../shift-context/ShiftContextProvide";

function Box({ id, startTime, endTime, bookedStatus, area, myShift }) {
  const { shiftData, handleShiftCancel, handleShiftBooking } =
    useContext(ShiftContext);

  const startingTime = moment(startTime).format("HH:mm");
  const endingTime = moment(endTime).format("HH:mm");
  const timeNowUnixMilis = Date.now();

  const isOverLapping = shiftData.some(
    (shift) =>
      shift.booked && shift.startTime <= startTime && shift.endTime > startTime
  );

  return (
    <div className="box">
      <div className="time-place-details">
        <p className="time-details">
          {startingTime}-{endingTime}
        </p>
        {myShift && <p className="place-details">{area}</p>}
      </div>
      <div className="booking-details">
        {bookedStatus ? (
          <button
            className={
              startTime > timeNowUnixMilis
                ? "btn cancel-btn"
                : "btn disabled-cancel-btn"
            }
            disabled={startTime < timeNowUnixMilis}
            onClick={() => {
              handleShiftCancel(id);
            }}
          >
            Cancel
          </button>
        ) : (
          <button
            className={
              isOverLapping || startTime <= timeNowUnixMilis
                ? "btn disabled-book-btn"
                : "btn book-btn"
            }
            disabled={isOverLapping || startTime <= timeNowUnixMilis}
            onClick={() => {
              handleShiftBooking(id);
            }}
          >
            Book
          </button>
        )}
      </div>
    </div>
  );
}

export default Box;
