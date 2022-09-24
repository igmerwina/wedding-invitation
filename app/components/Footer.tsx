import TextWithLine from "./Utils/TextWithLine";

const Footer = () => {
  return (
    <div className="pt-10">
      <h3 className="text-2xl sm:text-3xl text-center font-sans pt-5 font-bold bg-[#EFEFEF] text-gray-700">
        <TextWithLine>Terima Kasih</TextWithLine>
      </h3>

      <div className="content-center bg-[#EFEFEF]">
        <div className="text-center text-xs sm:text-lg font-light font-head text-gray-600 py-7 mx-2">
          <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami<br />
            Apabila Bapak/Ibu/Saudara(i) berkenan hadir <br />
            dan memberikan doa restu bagi kami. <br />
            Atas kehadiran dan doa restunya <br/> 
            Kami ucapkan Terima Kasih
          </p>
        </div>

        <div className="text-center mt-2 text-sm sm:text-lg font-light font-sans text-gray-600">
          <footer className="bg-[#e2e2e2] text-center lg:text-left">
            <div className="container p-3 text-gray-800">
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="sm:mb-6 md:mb-0 sm:pl-16 sm:pr-4 pb-2 sm:text-right sm:border-r-4 text-xs sm:text-sm">
                  <p><br /><br />
                    © 2022 with💕 by <strong><a href="https://instagram.com/igmerwina" target="blank">Erwin</a></strong>
                  </p>
                </div>

                <div className="mb-0 md:mb-0 sm:text-left font-light text-xs sm:text-sm pl-2">
                  <p>
                     Credits <br />
                    👨‍💻 - <a href="https://github.com/igmerwina/wedding-invitation" target="blank"> Code &nbsp; </a> <br />
                    🎶 - <a href="https://youtu.be/M-iIFo6wJ_w" target="blank"> Music</a> <br />
                    📸 - <a href="https://www.instagram.com/holly.lotus/" target="blank"> Photo &nbsp;</a> <br />
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
