import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage";
import Say from "./pages/UseStateTest";
import OnClick from "./pages/OnClick";
import OnClick2 from "./pages/OnClick2";
import DropDown from "./pages/DropDown";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DropDown />}/>
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </Router>
    );
}

export default App;