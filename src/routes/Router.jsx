import { createBrowserRouter } from "react-router";
import Home from "../page/Home";
import AddRestaurants from "../page/AddRestaurants";
import Update from "../page/Update";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddRestaurants />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);

export default router;
