import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import __MOCKS__ from "./__mocks__/resMenu.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "../utils/Store";
import HeaderComponent from "../components/HeaderComponent";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(__MOCKS__);
    },
  });
});

it("should render restaurant menu categories", async () => {
  await act(() =>
    render(
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const resCategories = screen.getAllByTestId("resCategory");
  expect(resCategories.length).toBe(16);

  const recommendedCategory = screen.getByText("Recommended");
  expect(recommendedCategory).toBeInTheDocument();
});

it("should update cart value on adding menu items", async () => {
  await act(() => render(
    <BrowserRouter>
      <Provider store={store}>
        <HeaderComponent />
        <RestaurantMenu />
      </Provider>
    </BrowserRouter>
  ));

  const emptyCart = screen.getByText("Cart (0)");
  expect(emptyCart).toBeInTheDocument();

  const addButton = screen.getAllByText("Add");
  fireEvent.click(addButton[0]);

  const updatedCart = screen.getByText("Cart (1)");
  expect(updatedCart).toBeInTheDocument();

});
