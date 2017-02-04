import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }
  tick() {
    this.setState(prevState => ({
      secondsElapsed: prevState.secondsElapsed + 1,
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componetWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title} {this.state.secondsElapsed}</h1>
      </div>
    );
  }
}
PageTitle.propTypes = {
  title: React.PropTypes.string.isRequired,
};

ReactDOM.render(
  <Counter title='Time from inception:' />,
  document.getElementById('app'));
