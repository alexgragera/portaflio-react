import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer.jsx";
import Navigation from "./components/Navigation.jsx";
import Contacto from "./pages/Contacto.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Proyectos from "./pages/Proyectos.jsx";
import Newsletter from "./pages/Newsletter.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Navigation />
            <div className="container">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/newsletter" element={<Newsletter />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}