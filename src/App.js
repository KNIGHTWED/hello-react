import React, {Component, createRef} from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say"
import EventPracticeClass from "./EventPracticeClass";
import EventPracticeFun from "./EventPracticeFun";
import EventPracticeObj from "./EventPracticeObj";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";



// const 와 let 사용
// 정적     동적

// 함수형 컴포넌트
// const App = () =>{
//   // return <MyComponent name="react" favoriteNumber={3}>리액트</MyComponent>;
//   return (<IterationSample />);
// }


// 클래스형 컴포넌트
// class App extends Component{
//   render() {
//     return(
//       <IterationSample />
//     )
//   }
// }


// 라이프사이클 메서드 예제
function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component{
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  render() {
    return(
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}/>
      </div>
    )
  }
}

export default App;
