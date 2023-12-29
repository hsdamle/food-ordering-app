import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantContainer from "../components/RestaurantContainer";
import __MOCKS__ from "./__mocks__/resListAPI.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Override fetch() method called in component <RestaurantContainer/>.
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(__MOCKS__);
    },
  });
});

it("should render Restaurant Container Component", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <RestaurantContainer />
      </BrowserRouter>
    );
  });
});

it("should render search bar", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <RestaurantContainer />
      </BrowserRouter>
    );
  });

  const searchInput = screen.getByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();
});

it("should update the restaurants based on searched value", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <RestaurantContainer />
      </BrowserRouter>
    );
  });

  const searchInput = screen.getByTestId("searchInput");
  const searchButton = screen.getByText("Search");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchButton);
  const resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(3);
});

it("should update the restaurants based on searched value", async () => {
    await act(() => {
      render(
        <BrowserRouter>
          <RestaurantContainer />
        </BrowserRouter>
      );
    });

    const topRatedRestaurantFilter = screen.getByText("Top Rated Restaurants");
    fireEvent.click(topRatedRestaurantFilter);
    const resCards = screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(2);
  });
