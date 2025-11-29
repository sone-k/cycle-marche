import { About } from "./sections/About/About";
import { HowToJoin } from "./sections/HowToJoin/HowToJoin";
import { News } from "./sections/News/News";
import { Join } from "./sections/Join/Join";
import { StampCard } from "./sections/StampCard/StampCard";
import { Header } from "./sections/Header/Header";
import { FAQ } from "./sections/FAQ/FAQ";
import { Access } from "./sections/Access/Access";
import { Gallery } from "./sections/Gallery/Gallery";
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY } from "../../constants/styles";
import HeroImage from './hero.png';
import { Form } from "./sections/Form/Form";
import { Reward } from "./sections/Reward/Reward";
import { Mission } from "./sections/Mission/Mission";
import { Footer } from "./sections/Footer/Footer";

const HeroBanner = () => (
  <div className="w-full flex justify-center px-4" >
    <img src={HeroImage} className="w-full" style={{ maxWidth: '1300px', borderRadius: BORDER_RADIUS.medium }} />
  </div>
);

export const HomePage = () => {
  return (
    <div
      className="overflow-hidden w-full flex flex-col"
      style={{
        backgroundColor: COLORS.background,
        paddingTop: '100px',
        fontFamily: TYPOGRAPHY.fontFamily
      }}
    >
      <Header />
      <HeroBanner />

      <About />
      <Mission />

      <Join />
      <Gallery />

      <News />
      <HowToJoin />

      <Form />

      <StampCard />
      <Reward />

      <FAQ />
      {/* <Access /> */}
      <Footer />
    </div>
  );
};
