import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Editor from "./editor";

const router = () => {
    return (
        <Routes>
            <Route path="/" element={<Editor />}>
                <Route path=":item" element={<Editor />} />
            </Route>
        </Routes>
    )
}

export default router;