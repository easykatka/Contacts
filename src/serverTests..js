import { setupServer } from "msw/node";
import {users} from './__fixtures__/users'
import { rest } from "msw";

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
  export const server = setupServer(...handlers);