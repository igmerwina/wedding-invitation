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
      <h3 className="text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans">
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

      <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          Upacara Pawiwahan
        </div>
        <div className="col-span-1 text-xl text-gray-700 text-right md:text-center font-sans">
          12 Oktober 2022
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl  font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          RESEPSI I 
        </div>
        <div className="col-span-2 text-gray-700 text-xl text-right md:text-center font-sans">
          13 Oktober 2022 - 10.00 WITA
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl  font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          RESEPSI II
        </div>
        <div className="col-span-1 text-gray-700 text-xl text-right md:text-center font-sans">
          20 November 2022 - 11.00 WITA
        </div>
      </div>
    </div>
  );
};

export default Agendas;
