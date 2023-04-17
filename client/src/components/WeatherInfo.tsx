import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";

const WeatherInfo = () => {
  return (
    <div className="weather-info">
      <div className="units">
        <button>°C</button>
        <p>|</p>
        <button>°F</button>
      </div>

      <div className="display">
        <h1 className="temp">28 °C</h1>

        <div className="location-time">
          <p className="location">Rizal, Nueva Ecija</p>
          <p className="time-date">4:30 pm - Sunday, 16th April 2023</p>
        </div>

        <h2 className="condition">
          <CloudQueueRoundedIcon sx={{ fontSize: "4rem" }} />
          Overcast Clouds
        </h2>
      </div>
    </div>
  );
};

export default WeatherInfo;
