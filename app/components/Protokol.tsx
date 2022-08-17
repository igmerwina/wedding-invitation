import TextWithLine from "./Utils/TextWithLine";
import bride from "~/images/erwin-img.jpg";

const Protokol = () => {
  return (
    <div className="pt-5 items-center w-ful">
      <div className="w-full flex">
        <div className="md:w-1/3 px-2">
          <div className="flex flex-col items-center py-14 sm:px-8 text-center">
            <img
              src={bride}
              alt="Jaga jarak"
              className="w-48 h-48 rounded-full mb-8"
            />
            <div className="mb-4">
              <TextWithLine>Memakai Masker</TextWithLine>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 px-2">
          <div className="flex flex-col items-center py-14 sm:px-8 text-center">
            <img
              src={bride}
              alt="pengantin perempuan"
              className="w-48 h-48 rounded-full mb-8"
            />
            <div className="mb-4">
              <TextWithLine>Menjaga Jarak</TextWithLine>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 px-2">
          <div className="flex flex-col items-center py-14 sm:px-8 text-center">
            <img
              src={bride}
              alt="pengantin perempuan"
              className="w-48 h-48 rounded-full mb-8"
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
