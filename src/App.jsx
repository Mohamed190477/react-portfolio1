import React from 'react';
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App