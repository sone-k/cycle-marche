import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from "../constants/styles";
// import { SectionLabel, SectionHeading, SectionHeadingLeft } from "";

interface CardProps {
  children: React.ReactNode;
  transparent?: boolean;
}

export const Card = ({ children, transparent = false }: CardProps) => {
  return (
    <div
      className="w-full m-auto"
      style={{
        maxWidth: SPACING.maxWidth,
        backgroundColor: transparent ? 'transparent' : COLORS.backgroundWhite,
        borderRadius: BORDER_RADIUS.medium
      }}
    >
      {children}
    </div>
  );
};