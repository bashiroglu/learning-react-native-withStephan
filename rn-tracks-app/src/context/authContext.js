import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/trackers";

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
      console.log(state);
      return {
        ...state,
        token: action.payload,
        errorMessage: "",
      };
    case "ADD_ERROR":
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

const signUp = (dispatch) => {
  return async ({ email, password }) => {
    console.log({ email, password });
    try {
      const response = await trackerApi.post("/signup", { email, password });

      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGN_UP", payload: response.data.token });
    } catch (error) {
      dispatch({ type: "ADD_ERROR", payload: "something went wrong" });
    }
  };
};

const signIn = (dispatch) => {
  return ({ email, password }) => {
    dispatch({ type: "SIGN_IN", payload: { email, password } });
  };
};

const signOut = (dispatch) => {
  return () => {
    dispatch({ type: "SIGN_OUT" });
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signUp, signIn, signOut },
  { token: null }
);

// export const BlogProvider = ({ children }) => {
// const [blogs, dispatch] = useReducer(blogReducer, [
//   {
//     title: "walk a dog",
//     id: 45,
//   },
//   {
//     title: "walk a dog 2",
//     id: 46,
//   },
// ]);

//   return (
//     <BlogContext.Provider value={{ blogs, addBlog }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };
// export default BlogContext;
