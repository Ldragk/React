import "./App.css";
import { Menu } from "./components/Menu";
import { Home } from "./Pages/Home";
import { UseState } from "./Pages/UseState";
import { createBrowserRouter, NavLink, Route, Routes } from "react-router-dom";


export function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UseState" element={<UseState />} />
      </Routes>
    </>
  );
}
