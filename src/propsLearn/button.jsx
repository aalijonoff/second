import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "Name",
      inpPlus: 0,
    };
  }
  render() {
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      this.setState({ count: this.state.count - 1 });
    };
    return (
      <>
        <h1> Count: {this.state.count} </h1>
        <input
          type="number"
          onChange={(event) => {
            this.setState({ inpPlus: event.target.value });
          }}
        />
        <button
          onClick={() => {
            this.setState({ count: this.state.count + +this.state.inpPlus });
          }}
        >
          {this.state.inpPlus}
        </button>
        <button onClick={plus} style={{ color: this.props.color }}>
          +
        </button>{" "}
        <button onClick={minus} style={{ color: this.props.color }}>
          -
        </button>
      </>
    );
  }
}

{
  /* <input
  type="text"
  onChange={(event) => {
    this.setState({ title: event.target.value });
  }}
/> */
}
