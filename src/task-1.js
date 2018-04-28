import React, {Component} from 'react';
import PropTypes from "prop-types";
import TabItem from "./TabItem";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: this.props.tabs,
      isActive: Array.from({
        length: this.props.tabs.length
      }, (x) => false)
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(index) {
    const tmp = this.state.isActive;
    tmp[index] = !tmp[index];
    this.setState(prevState => ({tabs: prevState.tabs, isActive: tmp}));
  }

  render() {
    return (<div>
      {
        this.state.tabs.map((item, index) => {
          return (<TabItem index={index} header={item.header} content={item.content}
            onActive={this.handleClick} headerClass={this.state.isActive[index]
              ? "card-header active text-white bg-info"
              : "card-header text-white bg-info"} contentClass={this.state.isActive[index]
              ? "card-body"
              : "card-body d-none"}/>);
        })
      }
    </div>);
  }
}

Accordion.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({header: PropTypes.string, content: PropTypes.string}))
};
