import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
  ]);

  return (
    <div className="min-h-[100vh]  bg-[#111] overflow-x-hidden overflow-y-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
