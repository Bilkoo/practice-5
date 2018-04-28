import React from "react";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: this.props.tabs,
      isActive: 0
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }
  static defaultProps = {
    headerTpl: (props => `${props.item.header}`),
    contentTpl: (props => `${props.item.content}`)
  };

  handleTabClick(index) {
    this.setState({isActive: index});
  }

  render() {
    return (<div className="row">
      <ul class="col-3 list-group">
        {
          this.state.tabs.map((item, index) => {
            return (<li className={index == this.state.isActive
                ? "list-group-item active"
                : "list-group-item"} key={index} onClick={this.handleTabClick.bind(null, index)}>{this.props.headerTpl({index, item})}</li>)
          })
        }
      </ul>
      <div class="col-9">
        {
          this.state.tabs.map((item, index) => {
            return (<div className={index == this.state.isActive
                ? ""
                : "d-none"} key={index}>{this.props.contentTpl({index, item})}</div>)
          })
        }
      </div>
    </div>);
  }
}
