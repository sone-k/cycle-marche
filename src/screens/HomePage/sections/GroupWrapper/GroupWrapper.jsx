import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from "../../../../constants/styles";
import { SectionLabel, SectionHeading } from "../../../../components/SectionComponents";

export const GroupWrapper = () => {
  return (
    <div className="w-full flex justify-center px-4" style={{ marginTop: SPACING.sectionMargin }}>
      <div className="relative h-[603px] w-full" style={{ maxWidth: SPACING.maxWidth }}>
        <div
          className="absolute top-0 left-0 right-0 h-[603px]"
          style={{
            backgroundColor: COLORS.backgroundWhite,
            borderRadius: BORDER_RADIUS.medium,
          }}
        />

        <img
          className="absolute top-[147px] left-[101px] right-[101px] h-[337px] object-cover"
          alt="Img"
          src="https://c.animaapp.com/JaCpjrwI/img/img-1768-2-1.png"
        />

        <div
          className="absolute top-[476px] left-0 right-0 text-center font-medium text-2xl tracking-[0.50px] leading-[normal]"
          style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.textBlack }}
        >
          注釈
        </div>

        <div className="absolute top-[86px] left-0 right-0 flex justify-center">
          <SectionHeading>参加方法</SectionHeading>
        </div>

        <div className="absolute top-11 left-0 right-0 flex justify-center">
          <SectionLabel>NEWS</SectionLabel>
        </div>
      </div>
    </div>
  );
};
