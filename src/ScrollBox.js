import React, { Component } from 'react';

class ScrollBox extends Component {

  scrollToBottom = () => {
    const { scrollHeight, clientHeight} = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    // 최상단 div 스타일
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto', // visible(정해진 범위 벗어나도 보임), hidden(정해진 범위 벗어나면 안보임), scroll(가로세로), auto(자동)
      position: 'relative' // fixed, static, relative, abolute, stikcy
    };
    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    };
    return(
      <div
      style = {style}
      ref={(ref) => {this.box=ref}}>
        <div style={innerStyle}/>
      </div>
    );
  }
}

export default ScrollBox;