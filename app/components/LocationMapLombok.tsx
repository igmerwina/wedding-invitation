import SectionWrapper from "./Utils/SectionWrapper";

const MAP_EMBEDED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.325088140063!2d116.11872271538942!3d-8.564706189243113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc0b633c190d1%3A0x45ecf492cff9eca0!2sLombok%20Astoria%20-%20Hotel!5e0!3m2!1sen!2sid!4v1659887839160!5m2!1sen!2sid";
const MAP_REDIRECT_URL =
  "https://www.google.com/maps/dir//Lombok+Astoria+-+Hotel,+Jl.+Jend.+Sudirman+No.40,+Rembiga,+Selaparang,+Mataram+City,+West+Nusa+Tenggara+83124/@-8.5647062,116.1187227,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2dcdc0b633c190d1:0x45ecf492cff9eca0!2m2!1d116.1209288!2d-8.5646417!3e0";
const MAP_TITLE = "Hotel Lombok Astoria, Mataram";
const MAP_ADDRESS =
  "Jl. Jend. Sudirman No.40, Rembiga, Kec. Selaparang, Kota Mataram, Nusa Tenggara Barata, 83124";

const LocationMapLombok = () => {
  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <iframe
                src={MAP_EMBEDED_URL}
                className="w-full h-[580px] md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                scrolling="no"
                aria-label={MAP_TITLE}
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="text-3xl font-head font-bold mb-3 text-gray-700">
                Resepsi II
              </h3>
              <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 md:mb-5 font-sans">{MAP_ADDRESS}</p>
              <p className="mb-3 font-sans font-bold">Minggu, 20 November 2022</p>
              <div className="flex md:justify-start justify-center">
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
