import SectionWrapper from "./Utils/SectionWrapper";

const MAP_REDIRECT_URL =
  "https://www.google.com/maps/dir//Lombok+Astoria+-+Hotel,+Jl.+Jend.+Sudirman+No.40,+Rembiga,+Selaparang,+Mataram+City,+West+Nusa+Tenggara+83124/@-8.5647062,116.1187227,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2dcdc0b633c190d1:0x45ecf492cff9eca0!2m2!1d116.1209288!2d-8.5646417!3e0";
const MAP_ADDRESS =
  "Jl. Jend. Sudirman No.40, Rembiga, Kec. Selaparang, Kota Mataram, Nusa Tenggara Barat";

const LocationMapLombok = () => {
  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center text-gray-700 font-bold">
              <h3 className="text-2xl font-head mb-3">
                Resepsi II
              </h3>
              <h4 className="text-xl md:text-xl mb-4 font-sans">
                Ballroom Mandalika <br />Hotel Lombok Astoria, Mataram
              </h4>
              <p className="mb-16 md:mb-5 font-sans font-normal">{MAP_ADDRESS}</p>
              <p className="mb-1 font-sans text-xl">Minggu, 20 November 2022</p>
              <p className="mb-5 font-sans text-xl">🕰 11.30 - 14.00 WITA</p>
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

export default LocationMapLombok;
