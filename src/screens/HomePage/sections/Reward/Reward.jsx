import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from "../../../../constants/styles";
import { SectionLabel, SectionHeading } from "../../../../components/SectionComponents";
import { Card } from "@/components/Card";
import Rw1Image from './rw1.jpg';
import Rw2Image from './rw2.jpg';
import Rw3Image from './rw3.jpg';

export const Reward = () => {
  return (
    <div className="w-full px-4 mt-20">
      <Card>
        <div className="pt-10 pb-20 px-2">
          <div>
            <div className=" flex justify-center mb-4">
              <SectionLabel>REWARD</SectionLabel>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <SectionHeading>出店返礼品</SectionHeading>
          </div>

          <div className="text-center mb-8 px-20">
            <p className="inline-block m-auto text-left text-xl leading-[44px]">「参加特典カード」を集められた出展者さまには、返礼品と交換させていただいております。<br />
              たねや苗をご用意いたしますので、ぜひ次の家庭菜園にお役立てください！
            </p>
          </div>

          <div
            className="flex gap-12 justify-center"
            style={{ color: COLORS.textBlack }}
          >
            <img src={Rw1Image} className="w-[345px] h-[259px]" />
            <img src={Rw2Image} className="w-[195px] h-[259px]" />
            <img src={Rw3Image} className="w-[348px] h-[261px]" />

          </div>
        </div>
      </Card>
    </div>
  );
};
