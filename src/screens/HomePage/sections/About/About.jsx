import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from "../../../../constants/styles";
import { SectionLabel, SectionHeading } from "../../../../components/SectionComponents";

export const About = () => {
  return (
    <div className="w-full flex justify-center px-4" style={{ marginTop: SPACING.sectionMarginLarge }}>
      <div className="relative h-[843px] w-full" style={{ maxWidth: SPACING.maxWidth }}>
        <div
          className="absolute top-0 left-0 right-0 h-[843px]"
          style={{
            backgroundColor: COLORS.backgroundWhite,
            borderRadius: BORDER_RADIUS.medium,
          }}
        />

        <img
          className="absolute top-36 right-[60px] w-[529px] h-[555px] aspect-[0.95]"
          alt="Img"
          src="https://c.animaapp.com/JaCpjrwI/img/img-1768-2.png"
        />

        <div className="absolute top-9 left-[60px]">
          <SectionLabel>ABOUT</SectionLabel>
        </div>

        <div className="absolute top-[93px] left-[60px] w-[553px] h-[124px]">
          <SectionHeading>「サイクルマルシェ」とは？</SectionHeading>
        </div>

        <p
          className="absolute top-[238px] left-[50px] w-[623px] font-normal text-[22px] tracking-[0.50px] leading-[34px]"
          style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.textBlack }}
        >
          お庭や家庭菜園で育った
          お野菜や果物を自転車のカゴに詰めて持ち寄る、地域に根ざした交流イベントです。
          <br />
          <br />
          自転車で集まるから、移動もエコ。
          <br /> 収穫しきれなかった果物や野菜はフードロスになることなく、
          <br /> 誰かの食卓へとバトンのようにつながっていきます。
          <br />
          「お家で採れた」という温かみと、
          <br /> 「捨てられるはずだったものが誰かを喜ばせる」という小さな奇跡。
          <br />
          サイクルマルシェは、
          <br /> そんな日々の営みから生まれる やさしい循環 を育てる、
          <br /> 地元のちいさな、あったかいプロジェクトです。
        </p>
      </div>
    </div>
  );
};
