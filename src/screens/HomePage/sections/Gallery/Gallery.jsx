import { SPACING } from "../../../../constants/styles";
import { SectionLabel, SectionHeading } from "../../../../components/SectionComponents";

export const Gallery = () => {
  return (
    <div className="w-full flex justify-center px-4" style={{ marginTop: SPACING.sectionMargin }}>
      <div className="relative h-[547px] w-full" style={{ maxWidth: SPACING.maxWidth }}>
        <div className="absolute w-full top-0 left-0 right-0 flex flex-col items-center gap-[26px]">
          <SectionLabel>GALLERY</SectionLabel>
          <SectionHeading>ギャラリー</SectionHeading>
        </div>

        <div className="absolute top-[167px] left-0 right-0 flex gap-4 justify-center flex-wrap">
          <img
            className="w-[370px] h-[388px] aspect-[0.95] object-cover"
            alt="Element"
            src="https://c.animaapp.com/JaCpjrwI/img/20241018-161837--1--1@2x.png"
          />
          <img
            className="w-[365px] h-[380px] aspect-[0.96] object-cover"
            alt="Element"
            src="https://c.animaapp.com/JaCpjrwI/img/20240729-102152--1--1@2x.png"
          />
          <img
            className="w-[360px] h-[380px] aspect-[0.95] object-cover"
            alt="Img"
            src="https://c.animaapp.com/JaCpjrwI/img/img-3949--1--1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
