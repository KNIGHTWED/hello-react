import React, {Component} from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say"
import EventPracticeClass from "./EventPracticeClass";
import EventPracticeFun from "./EventPracticeFun";
import EventPracticeObj from "./EventPracticeObj";


// const 와 let 사용
// 정적     동적

// 함수형 컴포넌트
const App = () =>{
  // return <MyComponent name="react" favoriteNumber={3}>리액트</MyComponent>;
  return <EventPracticeObj />
}

// 클래스형 컴포넌트
// class App extends Component{
//   render() {
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }

export default App;
