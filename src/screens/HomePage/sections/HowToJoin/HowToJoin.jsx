import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from "../../../../constants/styles";
import { SectionLabel, SectionHeading } from "../../../../components/SectionComponents";
import { Button } from "../../../../components/Button";
import "./HowToJoin.css";


const ParticipantCard = ({ title, description, bgColor, buttonText, btCoral, btWater }) => (
  <div className="participant-card">
    <div
      className="card-background"
      style={{ backgroundColor: bgColor, borderRadius: BORDER_RADIUS.large }}
    />
    <div
      className="card-title"
      style={{ color: COLORS.textDark }}
    >
      {title}
    </div>
    <div
      className="card-description"
      style={{ color: COLORS.textDark }}
    >
      {description}
    </div>
    <Button
      className="card-button"
      divClassName="card-button-text"
      btCoral={btCoral}
      btWater={btWater}
      text={buttonText}
    />
  </div>
);

export const HowToJoin = () => {
  return (
    <div className="how-to-join-container" style={{ marginTop: SPACING.sectionMargin }}>
      <div className="how-to-join-inner" style={{ maxWidth: SPACING.maxWidth }}>
        <div className="how-to-join-header">
          <SectionLabel>HOW TO JOIN</SectionLabel>
          <div className="how-to-join-heading-wrapper">
            <SectionHeading>参加方法</SectionHeading>
          </div>
        </div>

        <div className="cards-container">
          <ParticipantCard
            title="生産者の方"
            description="近くのサイクルマルシェにお庭で採れた果物をお持ち寄りください！"
            bgColor={COLORS.backgroundPeach}
            buttonText="近くの出店会場を探す"
            btCoral={true}
          />
          <ParticipantCard
            title="来場者の方"
            description="受付で入場料をお支払いいただき、チケットをお渡しします。生産者の方が愛情込めて育てた果物を自由にお持ちいただけます！"
            bgColor={COLORS.backgroundWhite}
            buttonText="近くの出店会場を探す"
            btWater={true}
          />
        </div>
      </div>
    </div>
  );
};
