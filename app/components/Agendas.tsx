import TextWithLine from "./Utils/TextWithLine";
import cincin from "~/images/tukar-cincin.jpg";
import stage from "~/images/stage.jpg";
import { useLoaderData } from "remix";
import { LoaderDataType } from "~/controls";

const CALENDAR_URL = `https://www.google.com/calendar/render?
action=TEMPLATE&
text=Pernikahan+Erwin+%26+Iin+%F0%9F%92%8C&
location=Dusun Cacab - Jangkahan. Desa biaung. Kecamatan Penebel. Tabanan&
details=Dengan segala kerendahan hati dan sukacita%2C kami menyampaikan kabar bahagia mengenai pernikahan kami%3A I Gusti Made Erwin A dan Putu Ayu Indira Savitri.%0A%0ATautan undangan%3A%0Ahttps%3A%2F%2Fwww.igmerwina.github.io/weddingerwiniin%2F%0A%0AMerupakan sebuah kebahagiaan bagi kami jika Bapak%2FIbu%2FSaudara%2Fi turut hadir dalam acara resepsi kami dan%2Fatau berkenan memberikan doa restu.%0A%0AAtas perhatiannya%2C kami ucapkan terima kasih.%0A%0AYang berbahagia%2C%0AErwin %26 Iin&
dates=20221013T010000Z%2F20220730T080000Z`;

const Agendas = () => {
  const { isBoth: isBoth } = useLoaderData<LoaderDataType>();

  return (
    <div className="max-w-3xl mx-auto text-center mt-10">
      <div className="mb-4 text-gray-500 font-head md:text-lg font-medium">
        Resepsi pernikahan kami akan dilaksanakan pada:
      </div>
      {isBoth === '1' ? (
        <h3 className="text-3xl md:text-4xl mb-6 text-center text-gray-700 font-head">
          Kamis, 13 Oktober 2022 <br /> <TextWithLine>&</TextWithLine> Minggu, 20 November 2022
        </h3>
      ) : (
        <h3 className="text-3xl md:text-4xl mb-6 text-center text-gray-700 font-head">
          Kamis, 13 Oktober 2022
        </h3>)
      }

      <div className="mb-12 text-gray-500 font-head md:text-2xl font-medium mt-16">
        <TextWithLine>Rangkaian Acara</TextWithLine>
      </div>

      <div className="container mx-auto pt-2">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${cincin})` }} >
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font mb-2 font-bold">Upacara Pawiwahan</h2>
            <p className="leading-relaxed text-base">Rangkaian Prosesi Pernikahan <br /> 
              dilaksanakan dalam adat Hindu Bali, <br /> 
              Tanggal 12 Oktober 2022
            </p>
          </div>
        </div>

        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${stage})` }} >
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font mb-2 font-bold">Resepsi</h2>
            <p className="leading-relaxed text-base">Mengundang keluarga dan teman-teman semua untuk bersama merayakan momen bahagia kami,</p>
            {isBoth === '1' ? ( 
              <p> Tanggal 13 Oktober 2022 & 20 November 2022 </p>
            ) : (
              <p> Tanggal 13 Oktober 2022 </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agendas;
