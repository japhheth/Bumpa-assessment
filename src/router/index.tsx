import { FC, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "../components/Layout";
import ErrorBoundary from "../utils/errorboundary";

// Countries
const Countries = lazy(() => import("../pages/Countries"));

//Country Detail
const CountryDetail = lazy(() => import("../pages/CountryDetail"));

const RouteWrapper = (children: React.ReactNode | null) => (
  <ErrorBoundary>
    <Suspense>{children}</Suspense>
  </ErrorBoundary>
);

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={RouteWrapper(<Layout />)}>
          <Route index element={<Countries />} />
          <Route path="/country/:id" element={<CountryDetail />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
