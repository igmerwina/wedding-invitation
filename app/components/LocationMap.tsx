import { useLoaderData } from "remix";
import { LoaderDataType } from "~/controls";
import SectionWrapper from "./Utils/SectionWrapper";
import TextWithLine from "./Utils/TextWithLine";

const MAP_REDIRECT_URL =
  "https://www.google.com/maps/dir//Balai+Bajar+Cacab+Jangkahan,+H5G7%2BX44,+Cacab,+Biaung,+Penebel,+Tabanan+Regency,+Bali+82181/@-8.422521,115.1277957,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x2dd225d389fc9011:0x49760d2db5b741a4!2m2!1d115.1628337!2d-8.4226115!3e0";
const MAP_TITLE = "Dusun Cacab, Penebel, Tabanan";
const MAP_ADDRESS =
  "Dusun Cacab, Desa Biaung. Kec. Penebel, Kab. Tabanan, Bali";

const LocationMap = () => {
  const { isBoth: isBoth } = useLoaderData<LoaderDataType>();
  let title = 'Resepsi';
  isBoth === '1' ? title = 'Resepsi I' : title

  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>
      <div className="text-3xl font-head font-bold text-center mb-10 pt-3 text-gray-700">
            <h4 className="mb-1"><TextWithLine>Lokasi Acara</TextWithLine></h4>
          </div>
        <div className="flex flex-col-reverse md:flex-row">
          <div className=" w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-center text-gray-700 font-bold">
              <h3 className="text-2xl font-head mb-3">
                {title}
              </h3>
              <h4 className="text-xl md:text-xl mb-4 font-sans">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 md:mb-5 font-sans font-normal">{MAP_ADDRESS}</p>
              <p className="mb-1 font-sans text-xl">Kamis, 13 Oktober 2022</p>
              <p className="mb-5 font-sans text-xl">🕰 11.00 - 18.00 WITA</p>
              <div className="flex justify-center">
                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-[#CE7BB0] hover:bg-[#A267AC] outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  Buka Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;
