import { Routes, Route, Navigate } from "react-router-dom";
import ExampleView from "../Views/ExampleView";
import HomeView from "../Views/HomeView";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="example" element={<ExampleView />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
