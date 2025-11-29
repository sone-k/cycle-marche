import { COLORS, TYPOGRAPHY, SPACING } from "../../../../constants/styles";
import LogoImage from './logo.png';

const NavLink = ({ children, href }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 155; // 120px header + 35px extra spacing
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative w-fit font-normal text-xl leading-[normal] whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity"
      style={{
        fontFamily: TYPOGRAPHY.fontFamily,
        color: COLORS.textDark,
        letterSpacing: TYPOGRAPHY.letterSpacingNormal,
      }}
    >
      {children}
    </a>
  );
};

export const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50" style={{ backgroundColor: COLORS.backgroundWhite, height: '100px' }}>
      <div className="w-full h-full flex items-center justify-between px-4" style={{ maxWidth: SPACING.maxWidth, margin: '0 auto' }}>
        <img
          src={LogoImage}
          className="h-[52px] w-auto cursor-pointer hover:opacity-80 transition-opacity"
          onClick={scrollToTop}
          alt="サイクルマルシェ"
        />

        <div className="flex items-center gap-[51px]">
          <NavLink href="#about">概要</NavLink>
          <NavLink href="#mission">ミッション</NavLink>
          <NavLink href="#stampcard">参加特典</NavLink>
        </div>
      </div>
    </div>
  );
};
