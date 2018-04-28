import React from "react";
import PropTypes from 'prop-types';
import WeatherDay from "./WeatherDay";
import WeatherDetails from "./WeatherDetails";

import {fetchWeekForecast} from "../actions/week-forecast"
import {daysShort} from "../api/data-generator";
import {connect} from "react-redux";

class Weather extends React.Component {

  componentDidMount() {
    this.props.fetchWeekForecast();
  }

  renderForecastState() {
    return (<div className="weather">
      <ul className="list-inline mx-auto">
        {this.props.weekForecast.map(day => (<WeatherDay day={day} key={day.dt}/>))}
      </ul>
      <WeatherDetails/></div>);
  }

  renderErrorState() {
    return (<div className="weather">
      <div className="error">Error occurred during data fetch. Try to
        <button onClick={this.props.fetchWeekForecast}>reload</button>
      </div>
    </div>);
  }

  renderLoadingState() {
    return (<div className="weather">
      <span className="fa fa-spinner fa-spin"></span>
    </div>);
  }

  render() {
    return (
      this.props.weekLoading
      ? this.renderLoadingState()
      : this.props.weekError
        ? this.renderErrorState()
        : this.renderForecastState())
  }
}

Weather.propTypes = {
  weekLoading: PropTypes.bool.isRequired,
  weekError: PropTypes.bool.isRequired,
  weekForecast: PropTypes.array.isRequired,
  fetchWeekForecast: PropTypes.func.isRequired
}

//написати filter і розділити presentation components від conteiner (не точно)
const mapStateToProps = state => ({weekLoading: state.weekLoading, weekError: state.weekError, weekForecast: state.weekForecast, selectedDt: state.selectedDt});
const mapDispatchToProps = dispatch => ({
  fetchWeekForecast: () => dispatch(fetchWeekForecast())
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
