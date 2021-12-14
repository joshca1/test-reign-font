import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import PostList from "./PostList";

let testPost = [
  {
    id: 3,
    story_id: 1,
    story_title: "history of the web",
    author: "jhon doe",
    story_url: "www.reign.cl",
    created_at: new Date(),
    created_at_i: 1,
    fav: false,
  },
];

test("Renders content", () => {
  const { getByText } = render(<PostList posts={testPost} />);
  const pageAuthorElement = getByText(/jhon doe/i);
  const pageTitleElement = getByText(/history of the web/i);
  expect(pageAuthorElement).toBeInTheDocument();
  expect(pageTitleElement).toBeInTheDocument();
});

test("Open link post in a new tab", () => {
  const { getByText } = render(
    <PostList posts={testPost} reloadPosts={() => {}} />
  );
});
