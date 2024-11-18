import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Regions from "./pages/regions/Regions";
import Overview from "./pages/overview/Overview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path='adminstration/regions' element={<Regions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
