import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders User's name", () => {
  render(<App />);
  const linkElement = screen.getByText(/2/i);
  expect(linkElement).toBeInTheDocument();
});
