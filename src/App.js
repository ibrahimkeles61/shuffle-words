import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navi from "./components/Navi";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="app">
      <Navi />
      <Dashboard />
    </div>
  );
}
export default App;
