import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import './sass/index.css';

const rootElement:any = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
