import { lazy } from "react";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ProductPage = lazy(() => import("../pages/ProductPage/ProductPage"));

export const routes = [
  { path: "/", page: <HomePage />, isShowHeader: true },
  { path: "/product", page: <ProductPage />, isShowHeader: true },
  { path: "*", page: <NotFoundPage />, isShowHeader: false },
];
