import DeviceThermostatRoundedIcon from "@mui/icons-material/DeviceThermostatRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import WaterRoundedIcon from "@mui/icons-material/WaterRounded";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AirIcon from "@mui/icons-material/Air";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

const Details = () => {
  return (
    <div className="details">
      <div className="search">
        <input type="text" placeholder="Search Location" />
        <button>
          <i class="bi bi-search"></i>
        </button>
      </div>

      <div className="details-container">
        <div className="weather-details">
          <i class="bi bi-thermometer-sun"></i>
          <div className="info">
            <p>Heat Index</p>
            <h6>32 °C</h6>
          </div>
        </div>

        <div className="weather-details">
          <i class="bi bi-moisture"></i>
          <div className="info">
            <p>Humidity</p>
            <h6>56%</h6>
          </div>
        </div>

        <div className="weather-details">
          <i class="bi bi-cloud-rain"></i>
          <div className="info">
            <p>Chance of Rain</p>
            <h6>96%</h6>
          </div>
        </div>

        <div className="weather-details">
          <i class="bi bi-clouds"></i>
          <div className="info">
            <p>Cloudiness</p>
            <h6>28%</h6>
          </div>
        </div>

        <div className="weather-details">
          <i class="bi bi-wind"></i>
          <div className="info">
            <p>Wind Speed</p>
            <h6>9.4 km/h</h6>
          </div>
        </div>

        <div className="weather-details">
          <i class="bi bi-sunrise-fill"></i>
          <div className="info">
            <p>Sunset</p>
            <h6>06:10 pm</h6>
          </div>
        </div>

        <div className="weather-details">
          <i class="bi bi-sunset-fill"></i>
          <div className="info">
            <p>Sunset</p>
            <h6>06:10 pm</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
