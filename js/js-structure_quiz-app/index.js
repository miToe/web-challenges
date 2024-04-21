import App from "./components/App/App.js";

import { cards } from "./libs/data.js";

function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
