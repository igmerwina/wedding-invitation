import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Agendas from "~/components/Agendas";
import BrideAndGroom from "~/components/BrideAndGroom";
import Countdown from "~/components/Countdown";
import LocationMap from "~/components/LocationMap";
import Message from "~/components/Massage";
import SectionWrapper from "~/components/Utils/SectionWrapper";
import WelcomeModal from "~/components/WelcomeModal";
import { indexAction, indexLoader, LoaderDataType } from "~/controls";
import heroBg from "~/images/hero-bg.jpg";
import footerbg from "~/images/footernew.jpg";
import heroBgMobile from "~/images/hero-bg-mobiles.jpg";
import MusicPlayer from "~/components/MusicPlayer";
import GalleryPhotos from "~/components/GalleryPhotos";
import LocationMapLombok from "~/components/LocationMapLombok";
import ProtokolKesehatan from "~/components/Protokol";
import OpeningMessage from "~/components/OpeningMessage";
import TextWithLine from "~/components/Utils/TextWithLine";
import { useLoaderData } from "remix";

export const loader = indexLoader;
export const action = indexAction;

export default function Index() {
  const isSmallScreen = useMediaQuery({ query: `(max-width: 768px)` });

  const [openWelcome, setOpenWelcome] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const onCloseWelcomeModal = () => {
    setOpenWelcome(false);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);

  const { isBoth: isBoth } = useLoaderData<LoaderDataType>();

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="bg-[#f9f9f9]"
    >
      <WelcomeModal isOpen={openWelcome} onClose={onCloseWelcomeModal} />

      <div
        className="flex justify-center items-center h-screen md:h-[800px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${isMobile ? heroBgMobile : heroBg})` }}
      >
        <div className="mb-1 md:w-1/2">
          <h5
            className="text-left font-head text-2xl mb-4 text-[#EFEFEF]"
            style={{ textShadow: "1px 1px 1px #CE7BB0" }}
          >
            The Wedding Of
          </h5>
          <h4
            className="text-left font-head text-5xl mb-4 text-[#EFEFEF]"
            style={{ textShadow: "3px 3px 1px #CE7BB0" }}
          >
            Erwin & Iin
          </h4>
          <div
            className="text-left font-head text-md text-[#EFEFEF]"
            style={{ textShadow: "1px 1px 1px #CE7BB0" }}
          >
            Kamis, 13 Oktober 2022
          </div>
        </div>
      </div>

      <SectionWrapper>
        <OpeningMessage />
      </SectionWrapper>

      <SectionWrapper className="bg-[#EFEFEF]">
        <BrideAndGroom />
      </SectionWrapper>

      <SectionWrapper className="mb-20">
        <Agendas />
      </SectionWrapper>

      {isBoth === '1' ? (
        <div>
          <SectionWrapper className="mb-10 pt-1">
            <div className="text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700">
              <h4 className="mb-1"><TextWithLine>Lokasi Acara</TextWithLine></h4>
            </div>
            <LocationMap />
          </SectionWrapper>

          <SectionWrapper className="mb-20">
            <LocationMapLombok />
          </SectionWrapper>
        </div>
      ) : (
        <SectionWrapper className="mb-10 pt-1">
          <div className="text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700">
            <h4 className="mb-1"><TextWithLine>Lokasi Acara</TextWithLine></h4>
          </div>
          <LocationMap />
        </SectionWrapper>
      )}

      <SectionWrapper className="mb-20">
        <GalleryPhotos />
      </SectionWrapper>

      <SectionWrapper className="mb-10">
        <Countdown />
      </SectionWrapper>

      <div className="text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700">
        <h4 className="mb-1"><TextWithLine>Berikan Doa Terbaik Untuk Kami</TextWithLine></h4>
      </div>
      <SectionWrapper className="mb-20 bg-[#EFEFEF]">
        <Message />
      </SectionWrapper>

      <div className="text-2xl font-head font-bold text-center mb-10 pt-10 text-gray-700 px-2">
        <h4 className="mb-1"><TextWithLine>Mohon Patuhi Protokol Kesehatan Selama Menghadiri Acara</TextWithLine></h4>
      </div>
      <SectionWrapper className="mb-0">
        <ProtokolKesehatan />
      </SectionWrapper>

      <footer style={{ height: "200px", position: "relative", backgroundRepeat: "no-repeat", opacity: 0.87, backgroundSize: "100%", backgroundImage: `url(${footerbg})` }}>
        <p className="text-gray-600 bottom-0 absolute text-right bg-gradient-to-r from-slate-400 font-light">
          © 2022 with💕 by <strong><a href="https://instagram.com/igmerwina" target="blank">Erwin</a></strong>
          <a href="https://github.com/igmerwina/wedding-invitation" target="blank">&nbsp; ®👨‍💻</a>
          <a href="https://youtu.be/M-iIFo6wJ_w" target="blank"> ®🎶 </a>
          <a href="https://www.instagram.com/holly.lotus/" target="blank"> ®📸 &nbsp;</a>
        </p>
      </footer>
      <MusicPlayer play={!openWelcome} />
    </div>
  );
}
