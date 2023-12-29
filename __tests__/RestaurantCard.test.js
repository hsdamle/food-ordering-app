import { render, screen } from "@testing-library/react";
import RestaurantCard, { withDiscountLabel } from "../components/RestaurantCard";
import __MOCKS__ from "./__mocks__/resData.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard Component", () => {
    render(<RestaurantCard resData={__MOCKS__}/>);
    const resName = screen.getByText("McDonald's");
    expect(resName).toBeInTheDocument();
})

it("should render RestaurantCardOffer Higher Order Component", () => {
    const RestaurantCardOffer = withDiscountLabel(RestaurantCard);
    render(<RestaurantCardOffer resData={__MOCKS__}/>);
    const discountLabel = screen.getByText("Discount Available");
    expect(discountLabel).toBeInTheDocument();
})