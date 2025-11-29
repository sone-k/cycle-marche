import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from "../../../../constants/styles";
import { SectionLabel, SectionHeading } from "../../../../components/SectionComponents";
import MissionImage from './mission.png';

export const Mission = () => {
  return (
    <div id="mission" className="w-full px-4 mt-40">
      <div className="">
        <div>
          <div className="flex justify-center mb-4">
            <SectionLabel>MISSION</SectionLabel>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <SectionHeading>ミッション</SectionHeading>
        </div>

        <div className="text-center mt-16 px-20">
          <p className="inline-block m-auto text-[22px] leading-[44px]">「庭の果物が食べきれず、毎年ただ落ちていってしまう——」。<br />
            そんな小さな悩みを、地域の力で解決できたらという思いから生まれました。<br />
            余りがちな季節の食べ物を、必要とする人にシェアして、捨てずに活かすための試みです。
          </p>
        </div>

        <div
          className="text-center -my-12"
        >
          <img src={MissionImage} className="w-[1225px] h-[689px]" />

        </div>
      </div>
    </div>
  );
};
