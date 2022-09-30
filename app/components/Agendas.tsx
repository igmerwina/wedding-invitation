import TextWithLine from "./Utils/TextWithLine";
import cincin from "~/images/tukar-cincin.jpg";
import stage from "~/images/stage.jpg";
import { useLoaderData } from "remix";
import { LoaderDataType } from "~/controls";

const Agendas = () => {
  const { isBoth: isBoth } = useLoaderData<LoaderDataType>();

  return (
    <div className="max-w-3xl mx-auto text-center mt-10">
      <div className="text-2xl font-head font-bold text-center mb-10 pt-5 text-gray-700 px-2">
        <h4 className="mb-1"><TextWithLine>Rangkaian Acara</TextWithLine></h4>
      </div>

      <div className="container mx-auto pt-2">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${cincin})` }} >
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font mb-2 font-semibold">Upacara Pawiwahan</h2>
            <p className="leading-relaxed text-base pr-8">Rangkaian Prosesi Pernikahan <br /> 
              dilaksanakan dalam adat Hindu Bali. <br /> 
              📅 - 12 Oktober 2022
            </p>
          </div>
        </div>

        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${stage})` }} >
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font mb-2 font-semibold">Resepsi Pernikahan</h2>
            <p className="leading-relaxed text-base mx-10 sm:mx-0">Mengundang Bapak/Ibu,Saudara, keluarga, dan semua rekan untuk bersama merayakan momen bahagia kami.</p>
            {isBoth === '1' ? ( 
              <p> 📅 - 13 Oktober 2022 <br /> -&- <br />20 November 2022 </p>
            ) : (
              <p> 📅 - 13 Oktober 2022 </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agendas;
