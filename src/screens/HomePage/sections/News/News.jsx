import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from "../../../../constants/styles";
import { SectionLabel, SectionHeading } from "../../../../components/SectionComponents";

const NewsItem = ({ date, title, isUnderline = false }) => (
  <div className="ml-1 h-[75.16px] w-full self-center flex flex-col items-center gap-[5.1px]">
    <div
      className="self-start h-[35.01px] font-bold text-[26px] tracking-[0.50px] leading-[34px] whitespace-nowrap"
      style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.textDark }}
    >
      {date}
    </div>
    <div
      className={`self-start h-[35.01px] w-full font-normal text-[26px] tracking-[0.50px] leading-[34px] whitespace-nowrap ${isUnderline ? "underline cursor-pointer" : ""
        }`}
      style={{ fontFamily: TYPOGRAPHY.fontFamily, color: date === "2025.11.01" ? COLORS.textDark : COLORS.textBlack }}
    >
      {title}
    </div>
  </div>
);

const NewsDivider = () => (
  <img
    className="w-full h-px object-cover"
    alt="Line"
    src="https://c.animaapp.com/JaCpjrwI/img/line-4.svg"
  />
);

export const News = () => {
  const newsItems = [
    { date: "2025.11.30", title: "2026年1月10日　青葉区民文化センター「フィリアホール」前広場で開催決定", underline: true },
    { date: "2025.11.30", title: "2025年12月30日　三鷹市立第三小学校で開催決定", underline: true },
    { date: "2025.11.01", title: "WEBサイトをオープンしました！", underline: false },
  ];

  return (
    <div className="w-full flex justify-center px-4" style={{ marginTop: SPACING.sectionMarginLarge }}>
      <div className="relative h-[603px] w-full" style={{ maxWidth: SPACING.maxWidth }}>
        <div
          className="absolute top-0 left-0 right-0 h-[603px]"
          style={{
            backgroundColor: COLORS.backgroundWhite,
            borderRadius: BORDER_RADIUS.medium,
          }}
        />

        <div className="absolute top-[173px] left-[98px] right-[98px] flex flex-col gap-[24.5px]">
          <NewsItem date={newsItems[0].date} title={newsItems[0].title} isUnderline={newsItems[0].underline} />
          <NewsDivider />

          <div className="mt-[14px]">
            <NewsItem date={newsItems[1].date} title={newsItems[1].title} isUnderline={newsItems[1].underline} />
          </div>
          <NewsDivider />

          <NewsItem date={newsItems[2].date} title={newsItems[2].title} isUnderline={newsItems[2].underline} />
        </div>

        <div className="absolute top-[86px] left-0 right-0 flex justify-center">
          <SectionHeading>新着情報</SectionHeading>
        </div>

        <div className="absolute top-11 left-0 right-0 flex justify-center">
          <SectionLabel>NEWS</SectionLabel>
        </div>
      </div>
    </div>
  );
};
