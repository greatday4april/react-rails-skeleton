import App from '../components/app'
import { HashRouter } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom'

const Root = ({ store }) => (
  <HashRouter>
    <App />
  </HashRouter>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />,
    document.body.appendChild(document.createElement("div"))
  );
})
