import TextWithLine from "./Utils/TextWithLine";
import bride from "~/images/erwincp.jpg";
import groom from "~/images/iin.jpg";

const BrideAndGroom = () => {
  return (
    <div className="pt-20 pb-4">
      <h3 className="text-3xl text-center font-sans font-bold text-gray-700 mb-6">
      <TextWithLine>Kami yang Berbahagia</TextWithLine>
      </h3>
      <div className="w-full flex flex-wrap pb-2">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src={bride}
              alt="pengantin perempuan"
              className="w-80 h-100 rounded-full mb-8"
            />
            <h3 className="text-xl font-medium font-head mb-4 text-black">
              I Gusti Made Erwin Ardiantha, M.T
            </h3>
            <div className="mb-4">
              <TextWithLine>Pengantin Pria</TextWithLine>
            </div>
            <p className="font-head text-gray-600 leading-6">
              Putra kedua dari <br/>
              Bapak dr. I Gusti Putu Winangun Sp.PD & <br/>
              Ibu Dra. Ni Made Citra Resmi, M.M
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={groom}
                alt="pengantin laki-laki"
                className="w-80 h-100 rounded-full mb-8"
              />
              <h3 className="text-xl font-medium font-head mb-4 text-black">
                Putu Ayu Indira Savitri, S.Si.Kom
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>Pengantin Wanita</TextWithLine>
              </div>
              <p className="font-head text-gray-600 leading-6">
                Putri pertama dari <br /> 
                Bapak Ir. I Made Budiasa Astawa & <br />
                Ibu Ir. Putu Nuryati (Almh.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;
