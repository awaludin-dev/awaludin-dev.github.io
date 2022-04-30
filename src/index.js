import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

AOS.init();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
library.add(
  fab,
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faYoutube,
  faTiktok
);
