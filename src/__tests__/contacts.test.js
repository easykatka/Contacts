import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Contacts } from "../Pages/Contacts";
import { rest } from "msw";
import { setupServer } from "msw/node";

const users = [{
  gender: "male",
  name: {
    title: "Mr",
    first: "David",
    last: "Santana",
  },
  location: {
    street: {
      number: 3609,
      name: "Avenida del Planetario",
    },
    city: "Gijón",
    state: "Extremadura",
    country: "Spain",
    postcode: 46553,
    coordinates: {
      latitude: "-21.5944",
      longitude: "-39.5673",
    },
    timezone: {
      offset: "0:00",
      description: "Western Europe Time, London, Lisbon, Casablanca",
    },
  },
  email: "david.santana@example.com",
  login: {
    uuid: "4d653596-d5c5-4373-8daf-d82004f80999",
    username: "redwolf857",
    password: "steele",
    salt: "2wWuoDns",
    md5: "e62b99c8c48dcff43c8af4519c6c4482",
    sha1: "ed71d0846e5322e5d111017a913db0bd5d21de59",
    sha256: "aa42e997cdbc0314615e14b1a519948d95ee647f9c2e15d4538c618b54cd1e15",
  },
  dob: {
    date: "1974-01-09T18:25:43.890Z",
    age: 46,
  },
  registered: {
    date: "2005-06-05T01:17:01.533Z",
    age: 15,
  },
  phone: "902-950-556",
  cell: "668-917-848",
  id: {
    name: "DNI",
    value: "97752687-M",
  },
  picture: {
    large: "https://randomuser.me/api/portraits/men/4.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/4.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
  },
  nat: "ES",
}]
const handlers = [
  rest.get("https://randomuser.me/api/?results=50", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: users,
      })
    );
  }),
];
const server = setupServer(...handlers);
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test(`contacts get data success`, async () => {
  render(<Contacts />);
  const loader = screen.getByTestId("contacts-loader");
  expect(loader).toBeInTheDocument();

  await waitForElementToBeRemoved(loader);
  expect(loader).not.toBeInTheDocument();
  expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument()
  
 
});
