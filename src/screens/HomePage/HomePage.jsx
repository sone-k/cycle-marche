import { About } from "./sections/About/About";
import { HowToJoin } from "./sections/HowToJoin/HowToJoin";
import { News } from "./sections/News/News";
import { GroupWrapper } from "./sections/GroupWrapper/GroupWrapper";
import { StampCard } from "./sections/StampCard/StampCard";
import { Header } from "./sections/Header/Header";
import { FAQ } from "./sections/FAQ/FAQ";
import { Access } from "./sections/Access/Access";
import { Gallery } from "./sections/Gallery/Gallery";
import { COLORS, SPACING, BORDER_RADIUS } from "../../constants/styles";

const HeroBanner = () => (
  <div className="w-full flex justify-center px-4" style={{ marginTop: SPACING.sectionMargin }}>
    <div
      className="h-[668px] bg-cover bg-[50%_50%] w-full"
      style={{
        maxWidth: SPACING.maxWidth,
        borderRadius: BORDER_RADIUS.extraLarge,
        backgroundImage: "url(https://c.animaapp.com/JaCpjrwI/img/rectangle-8.svg)",
      }}
    />
  </div>
);

export const HomePage = () => {
  return (
    <div
      className="overflow-hidden w-full flex flex-col"
      style={{
        backgroundColor: COLORS.background,
        paddingBottom: SPACING.sectionMarginLarge
      }}
      data-model-id="48:35"
    >
      <Header />
      <HeroBanner />

      <About />
      <GroupWrapper />
      <Gallery />

      <News />
      <HowToJoin />

      <StampCard />
      <FAQ />
      <Access />
    </div>
  );
};
