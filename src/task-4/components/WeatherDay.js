import React from "react";
import { connect } from "react-redux";

import { openDayDetails } from "../actions/day-forecast"

const WeatherDay = props => {
    const dayName = new Date(props.day.dt);
    const options = { weekday: 'short', month: 'short',  day: 'numeric'};
    return (
      <li className={props.selectedDt === props.day.dt? "list-inline-item active" : "list-inline-item"} onClick={props.toggleSelectedDt.bind(null, props.day.dt)}>
        <div className="day-name">{dayName.toLocaleDateString('en-US', options)}</div>
        <img src={`img/${props.day.weather.icon}.png`} alt={props.day.weather.description} />
        <div className="temp">{Math.round(props.day.temp.min)}&#x2103;  {Math.round(props.day.temp.max)}&#x2103;</div>
    </li>);
};

WeatherDay.propTypes = {
  selectedDt: PropTypes.number,
  day: PropTypes.object.isRequired,
  toggleSelectedDt: PropTypes.func.isRequired
}

const mapStateToProps = state => ({selectedDt: state.selectedDt});
const mapDispatchToProps = dispatch => ({
  toggleSelectedDt: dt => dispatch(openDayDetails(dt))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDay);
