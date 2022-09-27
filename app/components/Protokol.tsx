import TextWithLine from "./Utils/TextWithLine";
import masker from "~/images/prokes/masker.png";
import cucitgn from "~/images/prokes/cucitgn.png";
import jarak from "~/images/prokes/socialdistancing.png";

const Protokol = () => {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-head font-bold text-center mb-20 pt-5 text-gray-700 px-2">
        <h4 className="mb-1"><TextWithLine>Mohon Patuhi Protokol Kesehatan</TextWithLine></h4>
      </div>
      <div className="grid grid-cols-3 gap-1 content-center">
        <div className="m-auto">
          <div className="sm:w-32 sm:h-32 h-24 w-24 rounded-full bg-center bg-cover mb-2"
            style={{ backgroundImage: `url(${masker})` }} >
          </div>
          <div className="mb-4">
            <p className="leading-relaxed text-center text-xs sm:text-sm">Memakai Masker</p>
          </div>
        </div>
        <div className="m-auto items-center">
          <div className="sm:w-32 sm:h-32 h-24 w-24 rounded-full bg-center bg-cover mb-2"
            style={{ backgroundImage: `url(${cucitgn})` }} >
          </div>
          <div className="mb-4 content-center">
            <p className="leading-relaxed text-center text-xs sm:text-sm">Mencuci tangan</p>
          </div>
        </div>
        <div className="m-auto items-center">
          <div className="sm:w-32 sm:h-32 h-24 w-24 rounded-full bg-center bg-cover mb-2"
            style={{ backgroundImage: `url(${jarak})` }} >
          </div>
          <div className="mb-4 content-center">
            <p className="leading-relaxed text-center text-xs sm:text-sm">Menjaga Jarak</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Protokol;
