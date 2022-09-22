import "./App.css";
import Home from "./components/Home/Home";
import Categories from "./components/Categories";
import { Routes, Route } from "react-router-dom";
import ServiceBySubCategories from "./components/ServicesBySubCategories";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="categories/*" element={<Categories />} />
        <Route path="services/*" element={<ServiceBySubCategories />} />{" "}
        <Route
          path="*"
          element={<div>Not Found What you were looking for</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
