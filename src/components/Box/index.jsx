import "./Box.css";
import moment from "moment";

function Box() {
  const data = {
    id: "55d336a5-7c70-4ad9-8fc3-e97724085d09",
    booked: true,
    area: "Helsinki",
    startTime: 1704868200000,
    endTime: 1704875400000,
  };

  const startTime = moment(data.startTime).format("HH:mm");
  const endTime = moment(data.endTime).format("HH:mm");

  return (
    <div className="box">
      <div className="time-place-details">
        <p className="time-details">
          {startTime}-{endTime}
        </p>
        <p className="place-details">{data.area}</p>
      </div>
      <div className="booking-details">
        {data.booked ? (
          <button className="btn cancel-btn">Cancel</button>
        ) : (
          <button className="btn book-btn">Book</button>
        )}
      </div>
    </div>
  );
}

export default Box;
