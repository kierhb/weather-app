import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";

const WeatherInfo = () => {
  return (
    <div className="weather-info">
      <div className="condition">Overcast Clouds</div>
      <p className="location">Rizal, Nueva Ecija</p>
      <p className="date">Sunday, 16th April 2023</p>
      <p className="time">4:30 pm</p>

      <div className="temp">28 °C</div>
      <div className="icon">
        <CloudQueueRoundedIcon sx={{ fontSize: "4rem" }} />
      </div>
    </div>
  );
};

export default WeatherInfo;
