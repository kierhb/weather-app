import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";

const WeatherInfo = () => {
  return (
    <div className="weather-info">
      <div className="temp">28 °C</div>

      <div className="location-time">
        <p className="location">Rizal, Nueva Ecija</p>
        <p className="time-date">4:30 pm - Sunday, 16th April 2023</p>
      </div>

      <div className="condition">
        <CloudQueueRoundedIcon sx={{ fontSize: "4rem" }} />
        Overcast Clouds
      </div>
    </div>
  );
};

export default WeatherInfo;
