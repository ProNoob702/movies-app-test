import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { moviesData } from "./dummyData/moviesData";
import { getMoviesList } from "./redux-store/selectors/movies.selectors";
import store from "./redux-store/store";

afterEach(cleanup);

// ========== Test That loading is shown firstly  ==========

test("app firstly shows loading", async () => {
  // mock http fetch from file
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(moviesData),
    })
  ) as jest.Mock;
  render(<App />);

  // Assert
  const loadingImg = screen.getByRole("img");
  expect(loadingImg).toHaveClass("loadingImg");
});

// ========== Test fetching movies result in correct number of links  ==========

test("Fetch async movies shows links", async () => {
  // Arrange
  // mock http fetch from file
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(moviesData),
    })
  ) as jest.Mock;

  render(<App />);

  // Act

  // Assert
  const linkItems = await screen.findAllByRole("link", {}, { timeout: 2000 });
  expect(linkItems).toHaveLength(moviesData.length);
});

// ========== TEST Redux store is filled with data  ==========

test("Fetch async movies does fill redux store", async () => {
  // Arrange
  // mock http fetch from file
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(moviesData),
    })
  ) as jest.Mock;

  render(<App />);

  // Act

  // Assert
  const moviesInStore = getMoviesList(store.getState());
  expect(moviesInStore).toHaveLength(moviesData.length);
});

// ========== TEST CLICK LINK OPENS MOVIES DETAIL PAGE  ==========

test("click on link opens movie detail url", async () => {
  // Arrange
  // mock http fetch from file
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(moviesData),
    })
  ) as jest.Mock;

  render(<App />);

  // Act

  // Assert
  const linkItems = await screen.findAllByRole("link", {}, { timeout: 2000 });
  const firstLink = linkItems?.[0];
  userEvent.click(firstLink);
  expect(global.window.location.href).toContain("/detail");
});
