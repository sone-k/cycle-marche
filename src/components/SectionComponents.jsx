import { COLORS, TYPOGRAPHY } from "../constants/styles";

export const SectionLabel = ({ children }) => (
  <div
    className="font-medium text-sm  tracking-[0.50px] leading-[normal] whitespace-nowrap"
    style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.accent }}
  >
    {children}
  </div>
);

export const SectionHeading = ({ children }) => (
  <div
    className="flex items-center justify-center font-bold text-[48px] text-center tracking-[0.50px] leading-[60px]"
    style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.textDark }}
  >
    {children}
  </div>
);

export const SectionHeadingLeft = ({ children }) => (
  <div
    className="font-bold text-[48px] text-left tracking-[0.50px] leading-[60px]"
    style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.textDark }}
  >
    {children}
  </div>
);
