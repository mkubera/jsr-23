import { render, screen } from "@testing-library/react";
import ShowName from "./ShowName";

test("renders User's name", () => {
  render(<ShowName />);
  const linkElement = screen.getByText(/User's/i);
  expect(linkElement).toBeInTheDocument();
});
