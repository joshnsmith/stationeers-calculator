import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import HomePage from "@/pages/home/HomePage";
import PartsToOresPage from "@/pages/calculators/PartsToOresPage";
import SmeltingPage from "@/pages/calculators/SmeltingPage";
import PartListPage from "@/pages/calculators/PartListPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/calculator" element={<Outlet />}>
                    <Route path="parts-to-ores" element={<PartsToOresPage />} />
                    <Route path="smelting" element={<SmeltingPage />} />
                    <Route path="part-list" element={<PartListPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;