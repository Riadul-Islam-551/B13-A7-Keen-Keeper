import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./pages/routes/Routes.jsx";
import FriendProvider from "./context/FriendContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router}></RouterProvider>
    </FriendProvider>
  </StrictMode>,
);
