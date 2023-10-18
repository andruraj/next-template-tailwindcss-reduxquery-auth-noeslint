import { createSlice } from "@reduxjs/toolkit";
import { api } from "./apiSlice";
import { getCookie, deleteCookies, setCookie } from "@/utils/cookies";

const initialState = {
  username: null,
  isAdmin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const {
        username,
        token,
        sites,
        isAdmin,
        loginStatus,
        tokenExpirationTime,
        //decode token and check if username matches for perfect verification
        user,
      } = action.payload;

      deleteCookies();

      setCookie("TBAuthToken", token);
      setCookie("User", user);
      setCookie("Role", isAdmin ? "Admin" : "User");
      setCookie("ExpirationTime", tokenExpirationTime);

      state.username = username;
      state.isAdmin = isAdmin;
      state.loginStatus = loginStatus;
    },
    setCurrentUser: (state, action) => {
      state.username = action.payload;
    },
    setCurrentRole: (state, action) => {
      state.isAdmin = action.payload;
    },
    logout: (state) => {
      deleteCookies();

      state.token = null;
      state.username = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCredentials, setCurrentUser, setCurrentRole, logout } =
  authSlice.actions;

export default authSlice.reducer;

export const isAuthenticated = (state) => {
  const token = getCookie("TBAuthToken");

  if (!!state.auth.username) return true;
  else if (!!token) return true;
  return false;
};

export const selectCurrentUser = (state) => state.auth.username;
export const selectCurrentRole = (state) => state.auth.isAdmin;

const authApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      /**
       *
       * @param {{username: string, password: string}} credentials
       * @returns
       */
      query: (credentials) => ({
        url: "/Login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { ...credentials },
      }),
    }),
    test: builder.query({
      query: () => "5",
    }),
  }),
});

export const { useLoginMutation, useTestQuery } = authApiSlice;
