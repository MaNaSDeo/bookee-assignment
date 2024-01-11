import "./Box.css";
import moment from "moment";

function Box({ startTime, endTime, bookedStatus, area, showArea }) {
  const startingTime = moment(startTime).format("HH:mm");
  const endingTime = moment(endTime).format("HH:mm");
  const timeNowUnixMilis = Date.now();
  // console.log(timeNowUnixMilis);

  return (
    <div className="box">
      <div className="time-place-details">
        <p className="time-details">
          {startingTime}-{endingTime}
        </p>
        {showArea && <p className="place-details">{area}</p>}
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
            onClick={() => console.log("working")}
          >
            Cancel
          </button>
        ) : (
          <button className="btn book-btn">Book</button>
        )}
      </div>
    </div>
  );
}

export default Box;
