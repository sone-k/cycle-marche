import { COLORS, TYPOGRAPHY } from "../constants/styles";

export const SectionLabel = ({ children }) => (
  <div
    className="font-medium text-sm text-center tracking-[0.50px] leading-[normal] whitespace-nowrap"
    style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.accent }}
  >
    {children}
  </div>
);

export const SectionHeading = ({ children }) => (
  <div
    className="flex items-center justify-center font-bold text-[52px] text-center tracking-[0.50px] leading-[normal]"
    style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.textDark }}
  >
    {children}
  </div>
);
