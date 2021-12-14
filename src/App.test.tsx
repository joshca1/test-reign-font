import React from "react";
import {
  fireEvent,
  render,
  RenderResult,
  screen,
  waitFor,
} from "@testing-library/react";
import { fetchPosts } from "./services/posts";
import App from "./App";

jest.mock("./services/posts");
const mockGetPosts = fetchPosts as jest.MockedFunction<typeof fetchPosts>;

it("should render the app component", () => {
  render(<App />);
  const pageTitleElement = screen.getByText(/HACKER NEWS/i);
  expect(pageTitleElement).toBeInTheDocument();
});
