import TextWithLine from "./Utils/TextWithLine";
import lotus from "~/images/lotus-section.png";

const OpeningMessage = () => {
  return (
    <div className="pt-10">
      <h3 className="text-3xl pb-5 text-center font-sans font-bold">
        <TextWithLine>Om Swastiastu</TextWithLine>
      </h3>
      <div className="pb-2 -pt-2 content-center">
        <div className="text-center text-sm sm:text-lg italic font-medium font-head text-gray-600 pb-2 mx-2">
          <p>
            Ya Tuhanku Yang Maha Pengasih dan Penyayang, <br />
            anugrahkanlah kepada pasangan ini kebahagiaan, <br />
            kesehatan, kebersamaan, umur yang panjang <br />
            dan tinggal dirumah yang penuh <br /> dengan kegembiraan <br />
            <TextWithLine>(Rgveda : X.85.42)</TextWithLine>
          </p>
        </div>
        <div className="text-center text-sm sm:text-lg font-medium font-head text-gray-600 mb-5">
          <div className="m-auto sm:w-24 sm:h-24 h-16 w-16 bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${lotus})` }} >
          </div>
          <p> Dalam kebahagiaan dan rasa syukur kepada Tuhan YME, <br />
            Kami bermaksud untuk mengundang Bapak/Ibu <br />
            pada Resepi pernikahan Putra & Putri kami.<br /><br />

            <TextWithLine>•••</TextWithLine>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningMessage;
