import "./Box.css";
import moment from "moment";

function Box({ startTime, endTime, bookedStatus, area }) {
  const startingTime = moment(startTime).format("HH:mm");
  const endingTime = moment(endTime).format("HH:mm");

  return (
    <div className="box">
      <div className="time-place-details">
        <p className="time-details">
          {startingTime}-{endingTime}
        </p>
        <p className="place-details">{area}</p>
      </div>
      <div className="booking-details">
        {bookedStatus ? (
          <button className="btn cancel-btn">Cancel</button>
        ) : (
          <button className="btn book-btn">Book</button>
        )}
      </div>
    </div>
  );
}

export default Box;
