import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage";
import Say from "./pages/UseStateTest";
import OnClick from "./pages/OnClick";
import OnClick2 from "./pages/OnClick2";
import DropDown from "./pages/DropDown";
import Table from "./pages/Table";
import Map2 from "./pages/Map2";
import Map3 from "./pages/Map3";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Map3 />}/>
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </Router>
    );
}

export default App;