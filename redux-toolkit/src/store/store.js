import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/user-slice";
import postsReducer from "../features/posts/post-slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});
