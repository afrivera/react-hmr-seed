import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick() {
    this.setState(prevState => ({
      secondsElapsed: prevState.secondsElapsed + 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>{this.props.title} {this.state.secondsElapsed}</h1>
      </div>
    );
  }
}
Counter.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Counter;
