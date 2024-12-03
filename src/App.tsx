import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
const Regions = lazy(() => import("./pages/regions/Regions"));
const Overview = lazy(() => import("./pages/overview/Overview"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                <Overview />
              </Suspense>
            }
          />
          <Route
            path='adminstration/regions'
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                <Regions />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
