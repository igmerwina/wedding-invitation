import SectionWrapper from "./Utils/SectionWrapper";

const MAP_EMBEDED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.786648656996!2d115.16062641538797!3d-8.42260218737717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd225d389fc9011%3A0x49760d2db5b741a4!2sBalai%20Bajar%20Cacab%20Jangkahan!5e0!3m2!1sen!2sid!4v1659887713299!5m2!1sen!2sid";
const MAP_REDIRECT_URL =
  "https://www.google.com/maps/dir//Balai+Bajar+Cacab+Jangkahan,+H5G7%2BX44,+Cacab,+Biaung,+Penebel,+Tabanan+Regency,+Bali+82181/@-8.422521,115.1277957,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x2dd225d389fc9011:0x49760d2db5b741a4!2m2!1d115.1628337!2d-8.4226115!3e0";
const MAP_TITLE = "Desa Cacab, Penebel, Tabanan";
const MAP_ADDRESS =
  "Dusun Cacab - Jangkahan. Desa biaung. Kecamatan Penebel, Kabupaten Tabanan, Bali, 82152";

const LocationMap = () => {
  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <iframe
                src={MAP_EMBEDED_URL}
                className="w-full h-[350px] md:h-[350px]"
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
              <h3 className="text-2xl font-head mb-3 font-semibold text-gray-700">
                Resepsi I
              </h3>
              <h4 className="text-xl md:text-xl mb-4 font-sans text-gray-700">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 md:mb-5 font-sans">{MAP_ADDRESS}</p>
              <p className="mb-1 font-sans font-bold">Kamis, 13 Oktober 2022</p>
              <p className="mb-5 font-sans font-semibold text-sm">11.00 - 18.00 WITA</p>
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

export default LocationMap;
