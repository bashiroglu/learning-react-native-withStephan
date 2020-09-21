import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "editBlog":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    case "addBlog":
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
          id: state.length + 1,
        },
      ];
    case "deleteBlog":
      const newArray = state.filter((item) => item.id !== action.payload);
      return [...newArray];
    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return (payload) => {
    dispatch({ type: "addBlog", payload });
  };
};
const deleteBlog = (dispatch) => {
  return (id) => {
    dispatch({ type: "deleteBlog", payload: id });
  };
};
const editBlog = (dispatch) => {
  return (id, newTitle, newContent) => {
    dispatch({
      type: "editBlog",
      payload: { id, title: newTitle, content: newContent },
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, deleteBlog, editBlog },
  [
    {
      title: "walk a dog",
      content: "content walk a dog",
      id: 1,
    },
    {
      title: "walk a dog 2",
      title: "walk a dog 2",
      content: "content walk a dog 2",
      id: 2,
    },
  ]
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
