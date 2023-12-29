import { fireEvent, render, screen } from "@testing-library/react";
import HeaderComponent from "../components/HeaderComponent";
import { Provider } from "react-redux";
import store from "../utils/Store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );
});

it("should render the header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("should render the header component with cart menu", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart (0)");
  expect(cartItems).toBeInTheDocument();
});

it("should render logout button on re-render/state update", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
