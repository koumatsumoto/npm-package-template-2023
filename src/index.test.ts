import { main } from "./index";

test("main", () => {
  expect(() => main()).not.toThrow();
});
