import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import TextWithLine from "./Utils/TextWithLine";
import lotus from "~/images/lotus-section.png";

const Footer = () => {
  const isSmallScreen = useMediaQuery({ query: `(max-width: 768px)` });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);

  return (
    <div className="pt-14">
      <h3 className="text-2xl sm:text-3xl text-center font-sans pt-7 font-bold bg-[#EFEFEF] text-gray-700">
        <TextWithLine>Terima Kasih</TextWithLine>
      </h3>

      <div className="content-center bg-[#EFEFEF]">
        <div className="text-center text-sm sm:text-lg font-normal font-head text-gray-600 py-7 mx-12 sm:px-72">
          <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami
            apabila Bapak/Ibu/Saudara(i) berkenan hadir
            dan memberikan doa restu. <br />
          </p>
          <p className="mt-4 sm:mt-1">
            Atas kehadiran dan doa restunya,
            kami ucapkan Terima Kasih
          </p><br />
          <div className="m-auto sm:w-24 sm:h-24 h-16 w-16 bg-center bg-contain bg-no-repeat px-10"
            style={{ backgroundImage: `url(${lotus})` }} >
          </div>
          <i>Om Shanti Shanti Shanti Om...</i>
          <TextWithLine>•••</TextWithLine>
        </div>

        <div className="text-center text-sm sm:text-lg font-light font-sans text-gray-600 bg-[#e2e2e2]">
          <div className="p-3 grid sm:grid-cols-2 gap-4 sm:text-right sm:border-r-4 sm:text-sm">
            <p>
              © {(new Date().getFullYear())} - build with 💕 by <strong><a href="https://instagram.com/igmerwina" target="blank"><b><u>Erwin</u></b></a></strong>
            </p>

            {isMobile ? (
              <div className="sm:text-left font-extralight text-xs sm:text-xs pl-2 mb-5 -mt-2">
                <p>
                  © <a href="https://github.com/igmerwina/wedding-invitation" target="blank" className="underline"> Code</a>
                  - <a href="https://youtu.be/M-iIFo6wJ_w" target="blank" className="underline"> Music</a>
                  - <a href="https://www.instagram.com/holly.lotus/" target="blank" className="underline"> Photo</a>
                </p>
              </div>
            ) : (
              <div className="mb-0 md:mb-0 sm:text-left font-light text-xs sm:text-sm pl-2">
                <p>
                  © <a href="https://github.com/igmerwina/wedding-invitation" target="blank" className="underline"> Code</a>
                  - <a href="https://youtu.be/M-iIFo6wJ_w" target="blank" className="underline"> Music</a>
                  - <a href="https://www.instagram.com/holly.lotus/" target="blank" className="underline"> Photo</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
