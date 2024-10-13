import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";

// Rota yapılandırması
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>,
  },
  {
    path:"/login",
    element:<Login />
  }
  // Diğer rotalarınızı buraya ekleyebilirsiniz
]);

export default router;