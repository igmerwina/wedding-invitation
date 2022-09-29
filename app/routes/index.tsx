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
import heroBgMobile from "~/images/hero-bg-mobile.jpg";
import MusicPlayer from "~/components/MusicPlayer";
import GalleryPhotos from "~/components/GalleryPhotos";
import LocationMapLombok from "~/components/LocationMapLombok";
import ProtokolKesehatan from "~/components/Protokol";
import OpeningMessage from "~/components/OpeningMessage";
import { useLoaderData } from "remix";
import Footer from "~/components/Footer";

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
        {isMobile ? (
          <div className="mt-96">
            <div className="bg-[#000] rounded-lg bg-opacity-40 py-3 px-20">
              <h5 className="text-center font-head text-2xl mb-4 text-[#fff]">
                The Wedding Of
              </h5>
              <h4 className="text-center font-head font-bold text-4xl mb-4 text-[#fff]">
                Erwin & Iin
              </h4>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2 content-center">
            <div className="text-center static w-full pb-10 pr-20 pl-10">
              <h5 className="font-head text-4xl text-[#EFEFEF]"
                style={{ textShadow: "2px 2px 2px #CE7BB0" }} >
                The Wedding Of
              </h5>
              <h4 className="text-center font-head text-8xl text-[#EFEFEF]"
                style={{ textShadow: "3px 3px 2px #CE7BB0" }} >
                Erwin <br /> -&- <br /> Iin
              </h4>
            </div>
          </div>
        )}
      </div>

      <SectionWrapper>
        <OpeningMessage />
      </SectionWrapper>

      <SectionWrapper className="bg-[#EFEFEF]">
        <BrideAndGroom />
      </SectionWrapper>

      <SectionWrapper className="mb-5">
        <Agendas />
      </SectionWrapper>

      <SectionWrapper className="mb-10">
        <Countdown />
      </SectionWrapper>

      {isBoth === '1' ? (
        <div>
          <SectionWrapper className="mb-10 pt-1">
            <LocationMap />
          </SectionWrapper>

          <SectionWrapper className="mb-20">
            <LocationMapLombok />
          </SectionWrapper>
        </div>
      ) : (
        <SectionWrapper className="mb-10 pt-1">
          <LocationMap />
        </SectionWrapper>
      )}

      <SectionWrapper className="mb-20">
        <GalleryPhotos />
      </SectionWrapper>

      <SectionWrapper className="mb-10 bg-[#EFEFEF]">
        <Message />
      </SectionWrapper>

      <SectionWrapper className="mb-0">
        <ProtokolKesehatan />
      </SectionWrapper>

      <Footer />

      <MusicPlayer play={!openWelcome} />
    </div>
  );
}
