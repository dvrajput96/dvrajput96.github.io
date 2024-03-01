import { render, screen } from "@testing-library/react";
import Hero from "../../../components/sections/index/hero";
import "@testing-library/jest-dom";

describe("Hero section parts", () => {
  it("renders main heading", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", {
      name: /Deepak Rajput\./i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders sub heading", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", {
      name: /I am an android developer\./i,
    });

    expect(heading).toBeInTheDocument();
  });
});
