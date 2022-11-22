import { Main } from "../routes/Pool/containers";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Pool Main Section", () => {
  /* ----- Checks if all elements are rendered successfully  ----- */

  test("renders the preview anchor link", () => {
    render(<Main />);

    expect(screen.getByTestId("skill__cards")).toBeInTheDocument();
  });

  /* ------------------------------------------------------------- */
});
