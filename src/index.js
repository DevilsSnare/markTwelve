import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './index.css';
import logo from './logo.svg';
import reportWebVitals from './reportWebVitals';
import Area from './components/area';
import Check from './components/check';
import Hypotenuse from './components/hypotenuse';
import Quiz from './components/quiz';

function defaultHome() {
  let home = document.querySelector(".defaultHome");
  home.innerHTML = "";
}
ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <div className="App">
        <nav className="navigation">
          <div className="brand-name">fun with triangles <div className="triangle"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-triangle" viewBox="0 0 16 16">
            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
          </svg></div></div>
          <div className="menu">
            <Link to="/check" className="menu-option" onClick={() => defaultHome()}>check if?</Link>
            <Link to="/hypotenuse" className="menu-option" onClick={() => defaultHome()}>find Hypotenuse</Link>
            <Link to="/area" className="menu-option" onClick={() => defaultHome()}>find Area</Link>
            <Link to="/quiz" className="menu-option" onClick={() => defaultHome()}>Quiz</Link>
          </div>
        </nav>
        <body>
          <div className="defaultHome"><Check /></div>
          <Route path="/check" component={Check}></Route>
          <Route path="/hypotenuse" component={Hypotenuse}></Route>
          <Route path="/area" component={Area}></Route>
          <Route path="/quiz" component={Quiz}></Route>
        </body>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
