<h1>Hello React!</h1>

cmd창에


    $ cd 프로젝트 폴더 이름
    $ yarn start
  
react 프로젝트 시작되면서 웹페이지가 열린다.

변수 선언

정적 변수 - const<br/>
동적 변수 - let (var 대신 let을 사용한다.)
<br/>
<h2>JSX 문법</h2>
react에서 import는 여러 파일을 불러올 수 있다.


```javascript
// 함수형 컴포넌트
function App() {
  return (
  <div>
  
  </div>
  );
}
```
항상 최상위에는 `<div></div>`와 같은 태그로 감싸져 있어야한다.(`<fragment></fragment>`, `<></>` 도 가능)
<br/>
<h2>Ref</h2>

``` javascript
<input ref = {(ref) => this.input=ref}></input>
```

Ref를 사용해야 할 때
포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
애니메이션을 직접적으로 실행시킬 때.
서드 파티 DOM 라이브러리를 React와 같이 사용할 때.
(React Ref와 DOM)

<br/>
<h2>Map 함수</h2>

`arr.map(callback, [thisArg])`

key값이 없어도 동작은 하지만 경고가 뜬다.
key 값으로 사용할 고유 번호 또는 id가 없다면 콜백 함수의 인수인 index 값을 사용하면 된다.

데이터 추가
배열에 새 항목을 추가할 때 push도 가능하지만
concat도 가능하다.

데이터 제거
filter 함수를 사용하여 배열에서 특정 조건을 만족하는 원소들만 남길 수 있다.

<br/>
<h2>컴포넌트의 라이프사이클 메서드</h2>

getDerivedStateFromProps
```javascript
static getDerivedStateFromProps(nextProps, prevState){
  if(nextProps.value !== prevState.value) { // 조건에 따라 특정 값 동기화
    return { value: nextProps.value};
  }
  return null; // state를 변경할 필요 없으면 null 반환
}
```
shouldComponentUpdate
getSnapshotBeforeUpdate: render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
  if(prevState.array !== this.state.array) {
    const{ scrollTop, scrollHeight } = this.list
    return { scrollTop, scrollHeight };
  }
}
```
componentDidUpdate: 컴포넌트 업데이트 작업이 끝난 후 호출하는 메서드
```javascript
componentDidUpdate(prevProps, prevState, snapshot) { ... }
```
componentWillUnmount: 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
```javascript
componenetWillUnmount() { ... }
```
componentDidCatch: 컴포넌트 렌더링 도중 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여 줄 수 잇게 해준다.
```javascript
componentDidCatch(error, info){
  this.setState({
    error: true
  });
  console.log({errer, info});
}
```
`error`는 에러의 종류, `info`는 에러 코드의 위치와 같은 정보를 줍니다.
componentDidMount: 컴포넌트를 만들고, 첫 렌더링을 마친 후 실행

