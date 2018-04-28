import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class TabItem extends Component  {
    render() {
        return (
              <div className="card" >
                  <div className={this.props.headerClass}
                       onClick={this.props.onActive.bind(null, this.props.index)}
                    >
                      {this.props.header}
                  </div>
                  <div className={this.props.contentClass}>
                      {this.props.content}
                  </div>
              </div>
        );
    }
}
