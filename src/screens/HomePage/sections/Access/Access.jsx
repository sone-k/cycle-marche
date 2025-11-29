import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from "../../../../constants/styles";
import { SectionLabel } from "../../../../components/SectionComponents";

export const Access = () => {
  return (
    <div className="w-full flex justify-center px-4" style={{ marginTop: SPACING.sectionMargin }}>
      <div className="relative h-[587px] w-full" style={{ maxWidth: SPACING.maxWidth }}>
        <div
          className="absolute top-0 left-0 right-0 h-[587px]"
          style={{
            backgroundColor: COLORS.backgroundWhite,
            borderRadius: BORDER_RADIUS.medium,
          }}
        />

        <div
          className="absolute top-[294px] left-[60px] font-normal text-[28px] tracking-[4.50px] leading-[44px]"
          style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.textDark }}
        >
          〒182-0017
          <br />
          東京都武蔵野市御殿山1丁目17-49
          <br />
          JR中央線 吉祥寺駅より徒歩5分
        </div>

        <img
          className="absolute top-[137px] right-[60px] w-[712px] max-w-[55%] h-auto aspect-[1.61]"
          alt="Illustration"
          src="https://c.animaapp.com/JaCpjrwI/img/illustration-11.png"
        />

        <div className="absolute top-[70px] left-[60px]">
          <SectionLabel>ACCESS</SectionLabel>
        </div>

        <div
          className="absolute top-[158px] left-[60px] w-[440px] h-[62px] flex items-center justify-start font-h font-[number:var(--h-font-weight)] text-[length:var(--h-font-size)] tracking-[var(--h-letter-spacing)] leading-[var(--h-line-height)] [font-style:var(--h-font-style)]"
          style={{ color: COLORS.textDark }}
        >
          会場・アクセス
        </div>
      </div>
    </div>
  );
};
