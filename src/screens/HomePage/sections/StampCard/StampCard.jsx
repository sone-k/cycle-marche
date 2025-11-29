import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from "../../../../constants/styles";
import { SectionLabel, SectionHeading } from "../../../../components/SectionComponents";
import { Button } from "../../../../components/Button";

export const StampCard = () => {
  return (
    <div className="w-full flex justify-center px-4" style={{ marginTop: SPACING.sectionMarginLarge }}>
      <div className="relative w-full flex flex-col md:flex-row gap-8 items-center" style={{ maxWidth: SPACING.maxWidth }}>
        <div className="flex-1 flex flex-col items-start">
          <SectionLabel>STAMP CARD</SectionLabel>
          <div className="mt-[26px]">
            <SectionHeading>スタンプカード</SectionHeading>
          </div>
          <div
            className="mt-[153px] font-normal text-[28px] tracking-[4.50px] leading-[44px]"
            style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.textDark }}
          >
            果物を貰ってスタンプを集めるととても良いことがあります！テキストテキストテキストテキスト
          </div>
          <Button
            className="!mt-[61px] !left-[unset] !w-[343px] !top-[unset]"
            divClassName="!mt-[-0.50px] ![font-family:'Roboto',Helvetica]"
            rectangleClassName={`!bg-[${COLORS.buttonCoral}]`}
            text="スタンプカードについて知る"
          />
        </div>

        <div className="relative w-[500px] h-[528px]" style={{ borderRadius: BORDER_RADIUS.large }}>
          <div
            className="absolute left-0 bottom-0 w-full h-[385px]"
            style={{ backgroundColor: COLORS.backgroundPeach, borderRadius: BORDER_RADIUS.large }}
          />
          <img
            className="absolute left-[97px] bottom-0 w-[377px] h-[479px] aspect-[0.79] object-cover"
            alt="Illustration"
            src="https://c.animaapp.com/JaCpjrwI/img/illustration-4@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
