import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  // 변수 선언 및 초기화
  state = {
    password: '',
    clicked: false,
    validation: false,
  };
  // 함수 선언
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref = {(ref) => this.input=ref}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          // input value 값이 0000이면 this.state.validated는 success, 0000이 아니면 failure
          // ValidationSample.css의 success는 배경색이 초록색, failure은 빨간색
          className={ this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
