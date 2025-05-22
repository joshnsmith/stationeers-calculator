import MainLayout from "@/layouts/MainLayout";
import CaclulatorWidgets from "./components/CaculatorWidgets";
import { WelcomeBanner } from "./components/WelcomeBanner";
import Contributors from "./components/Contributors";


export default function HomePageContainer() {
    return (
        <MainLayout>
            <WelcomeBanner />
            <CaclulatorWidgets />
            <Contributors />
        </MainLayout>
    )
}