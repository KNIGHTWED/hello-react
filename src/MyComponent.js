import React, {Component} from 'react';
import PropTypes from 'prop-types';
// 함수형 컴포넌트이지만 함수 선언 문법이 다른 형태
// ES6에 도입된 화살표 함수 문법

// 클래스형 컴포넌트
class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const {name, favoriteNumber, children} = this.props;// 비구조화 할당
        return (
            <div>
                이름: {name}<br/>
                children 값: {children}<br/>
                좋아하는 숫자: {favoriteNumber}
            </div>
        );
    }
}

// 함수형 컴포넌트
// const MyComponent = ({name, favoriteNumber, children}) => {
//   return(
//     <div>
//       안녕하세요, 제 이름은 {name}입니다.<br/>
//       children 값은 {children} 입니다.<br/>
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// props를 지정하지 않았을 때 기본값
// MyComponent.defaultProps = {
//   name: '기본 이름',
// };

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// }
export default MyComponent;
