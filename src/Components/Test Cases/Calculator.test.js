import React from "react";
import {
  getByTestId,
  render,
  screen,
  fireEvent,
  getByText,
  waitFor,
} from "@testing-library/react";
import Calculator from "../Calculation/Calculator";

describe("Calculator Component Test", () => {
  test("render page", () => {
    render(<Calculator />);
    expect(screen.getByTestId(/euserId/i)).toBeInTheDocument();
  });

  test("renders User ID label", () => {
    const { getByTestId } = render(<Calculator />);
    const userIdLabel = getByTestId("euserId");
    expect(userIdLabel).toBeInTheDocument();
  });

  test("renders Calculate button", () => {
    const { getByText } = render(<Calculator />);
    const calculateButton = getByText("Calculate");
    expect(calculateButton).toBeInTheDocument();
  });

  test("render Tariff List", () => {
    const { getByTestId } = render(<Calculator />);
    const tariffList = getByTestId("eTariffList");
    expect(tariffList).toBeInTheDocument();
  });


   
});
