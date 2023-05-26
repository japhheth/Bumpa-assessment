import { FC, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Countries
const Countries = lazy(() => import("../../pages/Countries"));

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countries />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
