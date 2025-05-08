import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage";
import Say from "./pages/UseStateTest";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Say />}/>
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </Router>
    );
}

export default App;