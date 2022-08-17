import TextWithLine from "./Utils/TextWithLine";
import bride from "~/images/erwin-img.jpg";

const CALENDAR_URL = `https://www.google.com/calendar/render?
action=TEMPLATE&
text=Pernikahan+Erwin+%26+Iin+%F0%9F%92%8C&
location=Dusun Cacab - Jangkahan. Desa biaung. Kecamatan Penebel. Tabanan&
details=Dengan segala kerendahan hati dan sukacita%2C kami menyampaikan kabar bahagia mengenai pernikahan kami%3A I Gusti Made Erwin A dan Putu Ayu Indira Savitri.%0A%0ATautan undangan%3A%0Ahttps%3A%2F%2Fwww.igmerwina.github.io/weddingerwiniin%2F%0A%0AMerupakan sebuah kebahagiaan bagi kami jika Bapak%2FIbu%2FSaudara%2Fi turut hadir dalam acara resepsi kami dan%2Fatau berkenan memberikan doa restu.%0A%0AAtas perhatiannya%2C kami ucapkan terima kasih.%0A%0AYang berbahagia%2C%0AErwin %26 Iin&
dates=20221013T010000Z%2F20220730T080000Z`;

const Agendas = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-4 text-gray-500 font-head md:text-lg font-medium">
        Resepsi pernikahan kami akan dilaksanakan pada:
      </div>
      <h3 className="text-3xl md:text-4xl mb-6 text-center text-gray-700 font-sans">
        Kamis, 13 Oktober 2022
      </h3>
      <div className="px-12 flex max-w-md mx-auto mb-10">
        <a
          href={CALENDAR_URL}
          target={"_blank"}
          className="px-8 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-[#CE7BB0] hover:bg-[#A267AC] outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
        >
          Simpan di Kalender
        </a>
      </div>

      <div className="mb-12 text-gray-500 font-head md:text-2xl font-medium mt-20">
          <TextWithLine>Rangkaian Acara</TextWithLine>
      </div>

      <div className="container mx-auto pt-2">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Upacara Pawiwahan</h2>
            <p className="leading-relaxed text-base">Rangkaian Prosesi Pernikahan <br/> dilaksanakan dalam adat Hindu Bali</p>
          </div>
        </div>

        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Resepsi I</h2>
            <p className="leading-relaxed text-base">Mengundang rekan/keluarga untuk bersama merayakan momen bahagia kami di Bali</p>
          </div>
        </div>
        
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Resepsi II</h2>
            <p className="leading-relaxed text-base">Mengundang rekan/keluarga untuk bersama merayakan momen bahagia kami di Lombok</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agendas;
