import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage";
import PropsTest from "./pages/PropsTest";
import PropsTest2 from "./pages/PropsTest2";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PropsTest2 />}/>
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </Router>
    );
}

export default App;