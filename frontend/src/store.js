import { createStore } from "redux";
import {reducer} from "./reducers/index";

const initialState = {
  posts: [
    {
      title: "test",
      description: "description",
      postedBy: "Devansh",
      category: {
        categoryName: "coding",
      },
    },
    {
      title: "test1",
      description: "description2",
      postedBy: "Devansh",
      category: {
        categoryName: "coding",
      },
    },
    {
      title: "test1",
      description: "description3",
      postedBy: "Devansh",
      category: {
        categoryName: "coding",
      },
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
