import { useState } from "react";
import { COLORS, TYPOGRAPHY, SPACING } from "../../../../constants/styles";
import { SectionLabel, SectionHeading } from "../../../../components/SectionComponents";

const FAQItem = ({ question, answer = null, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div
      className={`w-full relative transition-all duration-300 ease-in-out cursor-pointer overflow-hidden ${isExpanded ? "h-[252px]" : "h-[92px]"
        }`}
      style={{ backgroundColor: COLORS.backgroundWhite, borderRadius: '30px' }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <img
        className="absolute top-[22px] right-[50px] w-12 h-12 transition-transform duration-300"
        alt="Toggle"
        src={isExpanded ? "https://c.animaapp.com/JaCpjrwI/img/group-1-1@2x.png" : "https://c.animaapp.com/JaCpjrwI/img/group-1@2x.png"}
      />
      <div
        className="absolute top-[29px] left-[66px] right-[120px] font-medium text-xl tracking-[0.50px] leading-[34px]"
        style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.textDark }}
      >
        {question}
      </div>
      <div
        className={`absolute top-[100px] left-[66px] right-[66px] font-normal text-xl tracking-[0.50px] leading-[26px] transition-opacity duration-200 ${isExpanded ? "opacity-100 delay-150" : "opacity-0"
          }`}
        style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.accent }}
      >
        {answer}
      </div>
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className="w-full flex justify-center px-4" style={{ marginTop: SPACING.sectionMargin }}>
      <div className="flex flex-col items-center w-full" style={{ maxWidth: '814px' }}>
        <div className="flex flex-col items-center gap-[26px] mb-[39px]">
          <SectionLabel>FAQ</SectionLabel>
          <SectionHeading>よくある質問</SectionHeading>
        </div>

        <div className="w-full flex flex-col gap-[19px]">
          <FAQItem
            question="見た目がよくない果物でも参加できますか？"
            defaultExpanded={false}
          />
          <FAQItem
            question="手ぶらでも参加できますか？"
            answer="もちろんご参加いただけます。果物をもらったら一言お礼を伝えると、生産者はとても喜びます。また、入場料お支払い時にお渡しする「参加特典カード」との交換も可能な仕組みとなっております。ぜひご活用ください。"
            defaultExpanded={true}
          />
        </div>
      </div>
    </div>
  );
};
