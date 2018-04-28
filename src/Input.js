import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class Button extends Component {
  render() {
    return (
      this.props.isDisabled
      ? (<input type="text" className="form-control" name={this.props.name}
         placeholder={this.props.placeholder} value={this.props.value}
         onChange={this.props.onChange} disabled="disabled"/>)
      : (<input type="text" className="form-control" name={this.props.name}
         placeholder={this.props.placeholder} value={this.props.value}
         onChange={this.props.onChange}/>)
       );
  }
}
