import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Agendas from "~/components/Agendas";
import BrideAndGroom from "~/components/BrideAndGroom";
import Countdown from "~/components/Countdown";
import LocationMap from "~/components/LocationMap";
import Message from "~/components/Massage";
import SectionWrapper from "~/components/Utils/SectionWrapper";
import WelcomeModal from "~/components/WelcomeModal";
import { indexAction, indexLoader } from "~/controls";
import heroBg from "~/images/hero-bg.jpg";
import heroBgMobile from "~/images/hero-bg-mobiles.jpg";
import MusicPlayer from "~/components/MusicPlayer";
import GalleryPhotos from "~/components/GalleryPhotos";
import LocationMapLombok from "~/components/LocationMapLombok";

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
            12 October 2022
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-[#EFEFEF]">
        <BrideAndGroom />
      </SectionWrapper>

      <SectionWrapper>
        <Countdown />
      </SectionWrapper>

      <SectionWrapper className="mb-36">
        <Agendas />
      </SectionWrapper>

      <div className="text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700 px-2">
        <h4 className="mb-1">Lokasi Acara</h4>
      </div>

      <SectionWrapper className="mb-24">
        <LocationMap />
      </SectionWrapper>
      
      <SectionWrapper className="mb-24">
        <LocationMapLombok />
      </SectionWrapper>

      <SectionWrapper className="mb-36">
        <GalleryPhotos />
      </SectionWrapper>

      <SectionWrapper className="mb-36">
        <Message />
      </SectionWrapper>

      <div className="py-24 bg-[#EFEFEF] text-gray-700 relative text-center font-sans">
        © 2022 by <span className="font-semibold"><a href="https://instagram.com/igmerwina" target="blank">Erwin</a></span><br/>
        <p className="text-xs text-gray-400"><a href="https://github.com/igmerwina/wedding-invitation" target="blank">Source</a></p>
      </div>

      <MusicPlayer play={!openWelcome} />
    </div>
  );
}
