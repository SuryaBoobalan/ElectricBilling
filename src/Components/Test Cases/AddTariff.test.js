import React from "react";
import {
  getByTestId,
  render,
  screen,
  fireEvent,
  getByText,
  waitFor,
} from "@testing-library/react";
import AddTariff from "../Admin/AddTariff";

describe("Electricity Component Test", () => {
  test("render page", () => {
    render(<AddTariff />);
    const name = screen.getByTestId(/TariffName/i);
    expect(name).toBeInTheDocument();
  });

  test("render page", () => {
    render(<AddTariff />);
    expect(screen.getByTestId(/pricePerUnit/i)).toBeInTheDocument();
  });

  
});
