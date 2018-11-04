import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        elapsed: Math.floor(
          (new Date().getTime() - this.props.start.getTime()) / 1000
        )
      });
    });
  }

  componentWillUnmount() {
    delete this.interval;
  }

  render() {
    const { elapsed } = this.state;
    return <h2>Time: {elapsed}</h2>;
  }
}
