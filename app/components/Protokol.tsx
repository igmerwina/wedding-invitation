import TextWithLine from "./Utils/TextWithLine";
import bride from "~/images/erwin-img.jpg";

const Protokol = () => {
  return (
    <div className="pt-5 items-center w-full">
      <div className="w-full flex">
        <div className="w-1/3 px-2">
          <div className="flex flex-col items-center py-14 sm:px-8 text-center">
            <img
              src={bride}
              alt="Jaga jarak"
              className="md:w-48 md:h-48 rounded-full mb-8"
            />
            <div className="mb-4">
              <TextWithLine>Memakai Masker</TextWithLine>
            </div>
          </div>
        </div>

        <div className="w-1/3 px-2">
          <div className="flex flex-col items-center py-14 sm:px-8 text-center">
            <img
              src={bride}
              alt="pengantin perempuan"
              className="md:w-48 md:h-48 rounded-full mb-8"
            />
            <div className="mb-4">
              <TextWithLine>Menjaga Jarak</TextWithLine>
            </div>
          </div>
        </div>

        <div className="w-1/3 px-2">
          <div className="flex flex-col items-center py-14 sm:px-8 text-center">
            <img
              src={bride}
              alt="pengantin perempuan"
              className="md:w-48 md:h-48 rounded-full mb-8"
            />
            <div className="mb-4">
              <TextWithLine>Mencuci tangan<br/>/memakai Hand Sanitizer</TextWithLine>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Protokol;
