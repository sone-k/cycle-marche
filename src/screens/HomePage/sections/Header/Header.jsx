import { COLORS, TYPOGRAPHY, SPACING } from "../../../../constants/styles";

const NavLink = ({ children }) => (
  <div
    className="relative w-fit font-normal text-2xl leading-[normal] whitespace-nowrap cursor-pointer"
    style={{
      fontFamily: TYPOGRAPHY.fontFamily,
      color: COLORS.textDark,
      letterSpacing: TYPOGRAPHY.letterSpacingNormal,
    }}
  >
    {children}
  </div>
);

export const Header = () => {
  return (
    <div className="w-full relative" style={{ backgroundColor: COLORS.backgroundWhite, height: '140px' }}>
      <div className="w-full h-full flex items-center justify-between px-8" style={{ maxWidth: SPACING.maxWidth, margin: '0 auto' }}>
        <div
          className="font-bold text-[40px] whitespace-nowrap"
          style={{
            fontFamily: TYPOGRAPHY.fontFamily,
            color: COLORS.textDark,
            letterSpacing: TYPOGRAPHY.letterSpacingNormal,
          }}
        >
          サイクルマルシェ
        </div>

        <div className="flex items-center gap-[51px]">
          <NavLink>開催概要</NavLink>
          <NavLink>スタンプカード</NavLink>
          <NavLink>ストーリー</NavLink>
        </div>
      </div>
    </div>
  );
};
