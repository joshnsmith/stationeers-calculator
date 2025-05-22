import { HashRouter, Routes, Route, Outlet } from "react-router";
import HomePage from "@/pages/home/HomePage";
import PartsToOresPage from "@/pages/calculators/PartsToOresPage";
import SmeltingPage from "@/pages/calculators/SmeltingPage";
import PartListPage from "@/pages/calculators/PartListPage";
import NotFoundPage from "@/pages/error/NotFoundPage";

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tools" element={<Outlet />}>
                    <Route path="parts-to-ores-calculator" element={<PartsToOresPage />} />
                    <Route path="smelting-calculator" element={<SmeltingPage />} />
                    <Route path="part-list-calculator" element={<PartListPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </HashRouter>
    )
}

export default Router;