import React from "react";

import AboutSection from "../components/About/AboutSection";
import BenefitsSection from "../components/Benefits/BenefitsSection";
import PropertiesSection from "../components/Properties/PropertiesSection";
import PlaybackSection from "../components/Playback/PlaybackSection";
import OffersSection from "../components/Offers/OffersSection";
import BannerSection from "../components/Banner/BannerSection";
import InquirySection from "../components/Inquiry/InquirySection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Backdrop from "../components/Header/Backdrop/Backdrop";
import SideNav from "../components/Header/SideNav/SideNav";

function HomePage() {
  const ref = React.useRef();
  const [transparent, setTransparent] = React.useState(true);

  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    return (window.onscroll = () => {
      if (window.scrollY >= 100) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    });
  }, []);

  return (
    <div ref={ref}>
      <Header transparent={transparent} setShow={setShow} show={show} />
      {show ? <Backdrop setShow={setShow} /> : null}
      <SideNav show={show} setShow={setShow} />
      <Hero />
      <AboutSection />
      <BenefitsSection />
      <PropertiesSection />
      <PlaybackSection />
      <OffersSection />
      <BannerSection />
      <InquirySection />
      <Footer />
    </div>
  );
}

export default HomePage;
