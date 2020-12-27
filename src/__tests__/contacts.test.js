import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Contacts } from "../Pages/Contacts";
import { rest } from "msw";
import {server} from "../serverTests."



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
			  ctx.status(500 ),
			  ctx.json({
				error : "internal server error"
			  })
			);
		  }),
	  )
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");
    await waitForElementToBeRemoved(loader);
    expect(loader).not.toBeInTheDocument();
    expect(screen.getByTestId("contacts-error")).toBeInTheDocument();
  });
});
