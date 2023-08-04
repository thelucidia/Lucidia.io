import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Team from "./pages/Team";

const App = () => {
    return (
        <section className="w-full h-auto bg-black relative">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </section>
    );
}

export default App;