import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import Home from "../app/page";

export { profileStructuredData } from "./seo";

export function render() {
  return renderToString(<StrictMode><Home /></StrictMode>);
}
