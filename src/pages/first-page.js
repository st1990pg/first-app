import React, { Component } from 'react';
import Counter from '../components/counter.component';
import Title from '../components/title.component';
import { test } from '../services/test.service';

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loader: true,
      counter: true,
    };
    // console.log('-------------------');
    // console.log('Constructor');
    this.counterView = () => {
      this.setState({ counter: !this.state.counter });
    };
  }

  componentDidMount() {
    console.log(this);
    test().then((res) => {
      console.log(this, res);
      this.setState({ users: [...res], loader: false });
    });

    // console.log('-------------------');
    // console.log('componentDidMount');
  }

  // componentWillMount() {
  //   console.log('-------------------');
  //   console.log('componentWillMount');
  // }

  render() {
    // console.log('-------------------');
    // console.log('Render');
    if (this.state.loader)
      return (
        <div>
          <h2>Loader . . .</h2>
        </div>
      );

    let usersName = this.state.users.map((user) => {
      return <h1 key={user.id}>{user.name}</h1>;
    });

    return (
      <div>
        <Title title="TEST TEST" />
        <button onClick={this.counterView}>
          {this.state.counter ? 'Hiden' : 'Show'}
        </button>
        {this.state.counter ? <Counter /> : null}
        <div>{usersName}</div>
      </div>
    );
  }
}

export default FirstPage;
