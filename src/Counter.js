import React, { Component } from 'react';

class Counter extends Component {
  state = {
      number: 0,
      fixedNumber: 0
    };
  render() {
    const {number, fixedNumber} = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button 
        // 버튼 클릭하면 1씩 더해주는 함수
        onClick={() => {
          this.setState(
            {
              number: number + 1
            },
            () => {
              console.log('called setState just before');
              console.log(this.state);
            }
          );
          }}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;