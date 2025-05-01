import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortSwitcher from "@/components/SortSwitcher";

// Mocks
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      "sort.date": "Date",
      "sort.location": "Location",
    };
    return translations[key] || key;
  },
}));

describe("SortSwitcher", () => {
  const push = jest.fn();
  const refresh = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    const useRouter = require("next/navigation").useRouter;
    const usePathname = require("next/navigation").usePathname;
    const useSearchParams = require("next/navigation").useSearchParams;

    useRouter.mockReturnValue({ push, refresh });
    usePathname.mockReturnValue("/conference");
    useSearchParams.mockReturnValue(new URLSearchParams([["filter", "date"]]));
  });

  it("calls router.push with new filter on change", () => {
    render(<SortSwitcher />);
    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: "location" } });

    expect(push).toHaveBeenCalledWith("/conference?filter=location");
    expect(refresh).toHaveBeenCalled();
  });

 
});
