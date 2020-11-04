import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: parseInt(localStorage.getItem('count'))
        ? parseInt(localStorage.getItem('count'))
        : 0,
    };
    this.increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
    this.deincrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
    console.log('-------------------');
    console.log('Constructor');
  }
  //   componentDidMount() {
  //     console.log('-------------------');
  //     console.log('componentDidMount');
  //   }
  //   componentWillMount() {
  //     console.log('-------------------');
  //     console.log('componentWillMount');
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log('-------------------');
  //     console.log('shouldComponentUpdate', nextState);
  //     if (nextState.count > 5) {
  //       this.setState({ count: 5 });
  //       return false;
  //     }
  //     return true;
  //   }

  //   componentWillUpdate() {
  //     console.log('-------------------');
  //     console.log('componentWillUpdate');
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log('-------------------');
  //     console.log('componentDidUpdate');
  //   }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUnmount(nextProps, nextState) {
    console.log('-------------------');
    console.log('componentWillUnmount');
    localStorage.setItem('count', JSON.stringify(this.state.count));
  }
  render() {
    console.log('-------------------');
    console.log('Render');
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.deincrement}>Deincrement</button>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}

export default Counter;
