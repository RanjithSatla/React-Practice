import React, { Component } from "react";

class Counter extends Component {
  state = {
    /* state : Special property , its an obj that has data that he compenent needs */ value:
      this.props.value,
  };
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: 0 });
  };
  render() {
    console.log(this.props);
    // {}{value: 0, children: ' '}

    return (
      <div>
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
