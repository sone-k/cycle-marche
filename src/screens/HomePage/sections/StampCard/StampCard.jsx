import { useState } from "react";
import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from "../../../../constants/styles";
import { SectionLabel, SectionHeading } from "../../../../components/SectionComponents";
import { Button } from "../../../../components/Button";
import CardImage from './card.png';
import Card1Image from './card1.png';
import Card2Image from './card2.png';

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 cursor-pointer"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] p-4">
        <button
          className="absolute top-2 right-2 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
          onClick={onClose}
        >
          ×
        </button>
        <img
          className="max-w-full max-h-[85vh] object-contain"
          src={imageSrc}
          alt="Card detail"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export const StampCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div id="stampcard" className="w-full flex justify-center px-4" style={{ marginTop: SPACING.sectionMarginLarge }}>
        <div className="w-full  md:flex-row gap-8 " style={{ maxWidth: SPACING.maxWidth }}>
          <div className="text-center">
            <SectionLabel>CARD</SectionLabel>
            <div className="mt-[26px]">
              <SectionHeading>参加特典カード</SectionHeading>
            </div>
          </div>

          <div className="flex mt-20 items-start gap-8">
            <div className="flex flex-col justify-start flex-1">
              <div
                className="font-normal text-[24px] tracking-[4.50px] leading-[42px]"
                style={{ fontFamily: TYPOGRAPHY.fontFamily, color: COLORS.textDark }}
              >
                入場料をお支払いいただいた方にお配りする「参加特典カード」。<br />出展者のかごの野菜や果物を特典カードと交換いただけます。

              </div>
              <div className="m-auto mt-16">
                <Button
                  style={{ fontSize: '22px' }}
                  btRed={true}
                  text="参加特典カードについて知る"
                />
              </div>
            </div>

            <div className="relative w-[480px]" style={{ borderRadius: BORDER_RADIUS.large }}>
              <img
                className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity"
                src={CardImage}
                alt="Card"
                onClick={() => openModal(CardImage)}
              />
              <div className="flex gap-3 mt-4">
                <img
                  className="w-[230px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
                  src={Card1Image}
                  alt="Card 1"
                  onClick={() => openModal(Card1Image)}
                />
                <img
                  className="w-[230px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
                  src={Card2Image}
                  alt="Card 2"
                  onClick={() => openModal(Card2Image)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageModal isOpen={modalOpen} onClose={closeModal} imageSrc={selectedImage} />
    </>
  );
};
