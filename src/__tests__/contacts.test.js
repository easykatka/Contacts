import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Contacts } from "../Pages/Contacts";
import { rest } from "msw";
import { server } from "../serverTests.";
import userEvent from "@testing-library/user-event";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe(`contacts get data`, () => {
  test(`loading`, () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");
    expect(loader).toBeInTheDocument();
  });

  test(`success`, async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");
    await waitForElementToBeRemoved(loader);
    expect(loader).not.toBeInTheDocument();
    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
  });
  test(`error`, async () => {
    server.use(
      rest.get("https://randomuser.me/api/?results=50", (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({
            error: "internal server error",
          })
        );
      })
    );
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");
    await waitForElementToBeRemoved(loader);
    expect(loader).not.toBeInTheDocument();
    expect(screen.getByTestId("contacts-error")).toBeInTheDocument();
  });
});

describe(`contacts data view mode`, () => {
  test(`should equal table`, async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");
    await waitForElementToBeRemoved(loader);
    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-table")).toHaveClass(
      "Mui-selected"
    );
    expect(
      screen.queryByTestId("contacts-grid-container")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-grid")).not.toHaveClass(
      "Mui-selected"
    );
  });
  
  test(`should equal grid`, async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");
    await waitForElementToBeRemoved(loader);
    const toggleGrid = screen.queryByTestId("toggle-data-view-mode-grid");
    userEvent.click(toggleGrid);
    expect(screen.getByTestId("contacts-grid-container")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-grid")).toHaveClass(
      "Mui-selected"
    );
    expect(
      screen.queryByTestId("contacts-table-container")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-table")).not.toHaveClass(
      "Mui-selected"
	);
	expect(window.localStorage.getItem("dataViewMode")).toEqual("grid")
	window.localStorage.clear()
  });
  test(`switch from grid to table`, async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");
    await waitForElementToBeRemoved(loader);
    const toggleGrid = screen.queryByTestId("toggle-data-view-mode-grid");
    const toggleTable = screen.queryByTestId("toggle-data-view-mode-table");
    userEvent.click(toggleGrid);
    userEvent.click(toggleTable);
    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-table")).toHaveClass(
      "Mui-selected"
    );
    expect(
      screen.queryByTestId("contacts-grid-container")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-grid")).not.toHaveClass(
      "Mui-selected"
	);
	expect(window.localStorage.getItem("dataViewMode")).toEqual("table")
	window.localStorage.clear()
  });
  
});
