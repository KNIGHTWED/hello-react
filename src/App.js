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


// const 와 let 사용
// 정적     동적

// 함수형 컴포넌트
// const App = () =>{
//   // return <MyComponent name="react" favoriteNumber={3}>리액트</MyComponent>;
//   return <ValidationSample />
// }

// 클래스형 컴포넌트
class App extends Component{
  render() {
    return(
      // <ValidationSample/>
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>맨 밑으로</button>
        <ScrollBox/>
      </div>      
    )
  }
}

export default App;
