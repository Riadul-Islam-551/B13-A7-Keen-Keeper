import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../home/Home";
import Timeline from "../timeline/Timeline";
import Stats from "../stats/Stats";
import Error from "../error/Error";
import FriendDetails from "../friendDetails/FriendDetails";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/friends.json"),
        element: (
          <Suspense
            fallback={
              <span className="loading loading-spinner text-info"></span>
            }
          >
            <Home></Home>
          </Suspense>
        ),
      },
      { path: "timeline", element: <Timeline></Timeline> },
      { path: "stats", element: <Stats></Stats> },
      {
        path: "friendDetails",
        element: <FriendDetails></FriendDetails>,
      },
    ],
  },
]);

export default router;
