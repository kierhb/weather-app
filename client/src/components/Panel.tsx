import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import WeatherInfo from "./WeatherInfo";

const Panel = () => {
  return (
    <div className="panel">
      <WeatherInfo />
      <DailyForecast />
    </div>
  );
};

export default Panel;
