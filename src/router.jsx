import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import InboxLayout from "./pages/inbox";

// Rota yapılandırması
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path:"/inbox",
    element:<InboxLayout />
  }
  // Diğer rotalarınızı buraya ekleyebilirsiniz
]);

export default router;