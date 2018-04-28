import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.styleName} onClick={this.props.onClick}
        name={this.props.text}>
      {this.props.text}
    </button>);
  }
}
