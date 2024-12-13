import React, { Suspense, lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Loading from "components/Loading";
import ErrorBoundary from "components/ErrorBoundary";

const Layout = lazy(() => import("./components/Layout"));
const HorasPage = lazy(() => import("./pages/Horas"));

const MainLayout = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loading fullscreen />}>
      <Layout>
        <Outlet />
      </Layout>
    </Suspense>
  </ErrorBoundary>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/horas", element: <HorasPage /> },
    ],
  },
]);

export default router;
