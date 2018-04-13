import '../testing-setup';
import * as React from "react";
import { render, Simulate } from "react-testing-library";
import App from "./index.js";

test("Test", () => {
  const component = render(<App />);
  Simulate.click(component.getByText("two"));
});
