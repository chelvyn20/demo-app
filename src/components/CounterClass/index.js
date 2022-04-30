import React, { Component } from "react";

export class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      increment: 0,
      decrement: 0,
    };

    // Add-on-method properties
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  // Other method
  // componentDidMount will be executed only after the initial rendering
  componentDidMount() {
    console.log("componentDidMount");
  }

  // componentDidUpdate will be executed when the component re-renders
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");

    // will be executed when increment state is changing
    if (prevState.increment !== this.state.increment) {
      console.log("increment state already changed");
    }

    // will be executed when decrement state is changing
    if (prevState.decrement !== this.state.decrement) {
      console.log("decrement state already changed");
    }
  }

  // componentWillUnmount will be executed when the component is destroyed
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  onIncrease() {
    this.setState({ increment: this.state.increment + 1 });
    console.log("increment: " + this.state.increment);
  }

  onDecrease() {
    this.setState({ decrement: this.state.decrement + 1 });
    console.log("increment: " + this.state.increment);
  }

  render() {
    const { increment, decrement } = this.state;
    return (
      <div>
        <button onClick={this.onIncrease}>Increment</button>
        <h3>{increment}</h3>
        <button onClick={this.onDecrease}>Decrement</button>
        <h3>{decrement}</h3>
      </div>
    );
  }
}
