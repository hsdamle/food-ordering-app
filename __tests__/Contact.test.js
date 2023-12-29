const { render, screen } = require("@testing-library/react");
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  test("contact us component should be loaded", () => {
    // Three steps of writing test cases
    //1. Rendering the component
    render(<Contact />);
    //2. Querying
    const heading = screen.getByRole("heading");
    //3. Assertion
    expect(heading).toBeInTheDocument();
  });

  //it() and test() method are one and the same.
  // it() is an alias for test().
  it("should show component with given text", () => {
    render(<Contact />);
    const label = screen.getByText("Welcome");
    expect(label).toBeInTheDocument();
  });
});
