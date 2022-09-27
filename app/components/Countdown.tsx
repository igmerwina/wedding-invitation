import { memo, useEffect, useState } from "react";
import { useLoaderData } from "remix";
import { LoaderDataType } from "~/controls";
import TextWithLine from "./Utils/TextWithLine";

const EVENT_DATE = "October 12, 2022 10:00:00";
const COUNTDOWN_DATE = new Date(EVENT_DATE).getTime();

interface COUNTDOWNTYPE {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const countdownBase: COUNTDOWNTYPE = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const Countdown = memo(() => {
  const [countdown, setCountdown] = useState<COUNTDOWNTYPE>(countdownBase);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();

      const delta = COUNTDOWN_DATE - now;

      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((delta % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (delta < 0) {
        clearInterval(interval);
        setCountdown(countdownBase);
      }
    }, 1000);
  }, []);

  const { isBoth: isBoth } = useLoaderData<LoaderDataType>();

  return (
    <div className="w-full px-1 md:px-4">
      <div className="text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700 px-2">
        <TextWithLine>Save The Date</TextWithLine>
      </div>

      <div className="flex justify-center pb-10">
        <NumberCard number={countdown.days} label="Hari" />
        <NumberCard number={countdown.hours} label="Jam" />
        <NumberCard number={countdown.minutes} label="Menit" />
        <NumberCard number={countdown.seconds} label="Detik" />
      </div>

      {isBoth === '1' ? (
        <h3 className="text-2xl md:text-3xl mb-6 text-center text-gray-700 font-head">
          Kamis, 13 Oktober 2022 <br /> <TextWithLine>&</TextWithLine> Minggu, 20 November 2022
        </h3>
      ) : (
        <h3 className="text-2xl md:text-3xl mb-6 text-center text-gray-700 font-head">
          Kamis, 13 Oktober 2022
        </h3>)
      }
    </div>
  );
});

interface NumberCardProps {
  number: number;
  label: string;
}

const NumberCard = memo(({ number, label }: NumberCardProps) => {
  const numberString = number < 100 ? ("0" + number).slice(-2) : String(number);

  return (
    <div className="rounded-lg bg-[#fde1e1] py-7 px-2 w-24 text-center mx-2 text-gray-700 font-sans">
      <div className="text-3xl mb-2">{numberString}</div>
      <div>{label}</div>
    </div>
  );
});

export default Countdown;
