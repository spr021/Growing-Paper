import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

document.fonts.ready
  .then(() => (document.body.style.fontFamily = "yekan"))
  .catch(() => (document.body.style.fontFamily = "sans-serif"))

reportWebVitals()
