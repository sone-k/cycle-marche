import { SPACING } from "../../../../constants/styles";

export const Form = () => {

  return (
    <div className="w-full flex justify-center py-16 px-4 m-auto text-center bg-white text-xl" style={{ marginTop: SPACING.sectionMarginSmall, maxWidth: SPACING.maxWidth }} >
      <div className=" w-full" style={{ maxWidth: SPACING.maxWidth }}>
        <p>開催にあたってのご相談、資料DL、サイト掲載、機材のレンタル希望の方はこちら▼</p>

        <div className="w-[743px] h-[101px] bg-[#438856] m-auto flex justify-center items-center mt-8" >
          <p className="text-white " style={{ fontSize: 32, fontWeight: 'bold' }}>主催希望者の方のお問い合わせForm</p>
        </div>
      </div>
    </div>
  );
};
