import { lazy } from "react";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import DetailPage from "../pages/EditPage/EditPage";
import EditPage from "../pages/EditPage/EditPage";
import CreatePage from "../pages/CreatePage/CreatePage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ProductPage = lazy(() => import("../pages/ProductPage/ProductPage"));

export const routes = [
  { path: "/", page: <HomePage />, isShowHeader: true },
  { path: "/product", page: <ProductPage />, isShowHeader: true },
  { path: "*", page: <NotFoundPage />, isShowHeader: false },
  { path: "/edit/:id", page: <EditPage />, isShowHeader: true },
  { path: "/create", page: <CreatePage />, isShowHeader: true }
];
