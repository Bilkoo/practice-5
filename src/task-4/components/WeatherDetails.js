import React from "react";
import {connect} from "react-redux";

import { fetchDayForecast } from "../actions/day-forecast"

class WeatherDetails extends React.Component {

  componentDidUpdate(prevProps) {
    if (prevProps.selectedDt != this.props.selectedDt) {
      this.props.fetchDayForecast(this.props.selectedDt);
    }
  }

  renderLoadingState() {
    return (<div className="details">
      <span className="fa fa-spinner fa-spin"></span>
    </div>)
  }

  renderErrorState() {
    return (<div className="details">
      <div className="error">Error occurred during data fetch. Try to
        <button onClick={this.props.fetchDayForecast(this.props.selectedDt)}>reload</button>
      </div>
    </div>)
  }

  renderWeatherState() {
    const day = this.props.forecast.data;
    const dayTime = new Date(this.selectedDt);
    const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    };

    return (<div className="details">
      <div className="day-name">
        <div>{dayTime.toLocaleDateString('en-US', options)}</div>
        <img src={`img/${day.weather.icon}.png`} alt={day.weather.description}/>
      </div>
      <div>
        <dl>
          <dt>Min temp</dt>
          <dd>{Math.round(day.temp.min)}&#x2103;</dd>

          <dt>Max Temp</dt>
          <dd>{Math.round(day.temp.max)}&#x2103;</dd>

          <dt>Weather</dt>
          <dd>{day.weather.description}</dd>
        </dl>
      </div>
      <div>
        <dl>
          <dt>Wind</dt>
          <dd>{Math.round(day.speed)}</dd>

          <dt>Humidity</dt>
          <dd>{day.humidity}</dd>

          <dt>Pressure</dt>
          <dd>{day.pressure}</dd>
        </dl>
      </div>
    </div>)
  }

  render() {
    return (this.props.selectedDt == null ? "" : this.props.forecast.loading ? this.renderLoadingState() : this.props.forecast.error ? this.renderErrorState() : this.renderWeatherState());
  }
}

const mapStateToProps = state => ({
  selectedDt: state.selectedDt,
  forecast: state.dayForecast[state.selectedDt]
});

const mapDispatchToProps = dispatch => ({
  fetchDayForecast: (dt) => dispatch(fetchDayForecast(dt))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails);
