import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Todo from "@pages/Todo.jsx";
// import invalidPage from "./invalidPage.jsx"

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "tasks",
        element: <Todo />,
      },
      //   {
      //     path: "*",
      //     /* index: true, */
      //     element: <invalidPage />,
      //   },
    ],
  },
]);
