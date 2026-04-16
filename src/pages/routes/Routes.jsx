import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../home/Home";
import Timeline from "../timeline/Timeline";
import Stats from "../stats/Stats";
import Error from "../error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "timeline", element: <Timeline></Timeline> },
      { path: "stats", element: <Stats></Stats> },
    ],
  },
]);

export default router;
