import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductPage from "../pages/ProductPage/ProductPage";

export const routes = [
  { path: "/", page: <HomePage />, isShowHeader: false },
  { path: "/product", page: <ProductPage />, isShowHeader: true },
  {
    path: "*",
    page: <NotFoundPage />,
    isShowHeader: false,
  },
];
