import TextWithLine from "./Utils/TextWithLine";
import lotus from "~/images/lotus-section.png";

const OpeningMessage = () => {
  return (
    <div className="pt-10">
      <h3 className="text-3xl pb-5 text-center font-sans font-bold">
        <TextWithLine>Om Swastyastu</TextWithLine>
      </h3>
      <div className="pb-2 -pt-2 content-center">
        <div className="text-center text-sm sm:text-lg italic font-normal font-head text-black pb-2 sm:px-44 px-16">
          <p>
            Ya Tuhanku Yang Maha Pengasih dan Penyayang,
            anugrahkanlah kepada pasangan ini kebahagiaan,
            kesehatan, kebersamaan, umur yang panjang
            dan tinggal dirumah yang penuh dengan kegembiraan <br />
            <TextWithLine>(Rgveda: X.85.42)</TextWithLine>
          </p>
        </div>
        <div className="text-center text-sm sm:text-lg font-light font-head text-black mb-5 px-16 sm:px-44">
          <div className="m-auto sm:w-24 sm:h-24 h-16 w-16 bg-center bg-contain bg-no-repeat px-10"
            style={{ backgroundImage: `url(${lotus})` }} >
          </div>
          <p> Dalam kebahagiaan dan rasa syukur kepada Tuhan YME, 
            kami bermaksud untuk mengundang Bapak/Ibu 
            pada acara Resepi pernikahan Putra & Putri Kami<br />
            <TextWithLine>•••</TextWithLine>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningMessage;
