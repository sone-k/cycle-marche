import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from "../../../../constants/styles";
import { SectionLabel, SectionHeading } from "../../../../components/SectionComponents";
import JoinImage from './join.png';
import { Card } from "@/components/Card";

const Description = ({ children }) => {
  return (
    <div
      className="text-white bg-[#438856] text-center whitespace-nowrap text-[16px] py-4 px-8 mt-6 rounded-[15px] w-[235px] h-[95px] flex items-center justify-center"
    >
      {children}
    </div>
  )
}

export const Join = () => {
  return (
    <div className="w-full  px-4" style={{ marginTop: SPACING.sectionMargin }}>
      <Card transparent>
        <div className="pt-10 pb-24 px-2">
          <div>
            <div className=" flex justify-center mb-4">
              <SectionLabel>ENTRY</SectionLabel>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <SectionHeading>参加方法</SectionHeading>
          </div>

          <img
            className="w-[1100px]"
            src={JoinImage}
          />

          <div
            className="flex justify-between font-medium text-2xl tracking-[0.50px] leading-[normal]"
            style={{ color: COLORS.textBlack }}
          >

            <Description>採れすぎた<br />野菜・果物に悩む</Description>
            <Description>近くの出店会場に<br />サイトから申し込む</Description>
            <Description>自転車のカゴに<br />野菜・果物を詰めて運ぶ</Description>
            <Description>サイクルマルシェで<br />交換・交流をする</Description>
          </div>
        </div>
      </Card>
    </div>
  );
};
