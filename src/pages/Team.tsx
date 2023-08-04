import Nav from "../components/Nav";
import Footer from "../views/Hero/Footer";
import PartnersLower from "../views/Hero/PartnersLower";
import Hero from "../views/Team/Hero";
import Join from "../views/Team/Join";

const Team = () => {
    return (
        <section className="w-full h-auto overflow-hidden bg-bg">
            <Nav />
            <Hero />
            <Join />
            <PartnersLower />
            <Footer />
        </section>
    );
}

export default Team;