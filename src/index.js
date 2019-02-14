import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement 추가
// 새로고침 없이 애플리케이션을 재실행
if(module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
