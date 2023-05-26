import { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import ErrorBoundary from "../utils/errorboundary";

// Countries
const Countries = lazy(() => import("../pages/Countries"));

const RouteWrapper = (children: React.ReactNode | null, height?: string) => (
  <ErrorBoundary>
    <Suspense>{children}</Suspense>
  </ErrorBoundary>
);

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={RouteWrapper(<Layout />)}>
          <Route path="/countries" element={<Countries />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
