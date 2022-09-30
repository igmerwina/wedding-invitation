import { Fragment, memo, useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useFetcher, useLoaderData } from "remix";
import { LoaderDataType } from "~/controls";
import TextWithLine from "./Utils/TextWithLine";

const PER_PAGE = 5;

const Message = memo(() => {
  const { messages } = useLoaderData<LoaderDataType>();
  const fetcher = useFetcher<{ ok: boolean }>();
  const formRef = useRef<HTMLFormElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState(0);

  const messagesSantized = messages.filter((message) => !message.hide);
  const messagesDisplay = messagesSantized.slice(
    PER_PAGE * page,
    PER_PAGE * (page + 1)
  );

  const totalPages = Math.ceil(messagesSantized.length / PER_PAGE);
  const paginationArr = [...Array(totalPages).keys()];
  const paginationDisplay = paginationArr.filter((num) => {
    const leftBoundary = page - 2;
    const rightBoundary = page + 2;
    return (
      (num >= leftBoundary && num <= rightBoundary) ||
      (page < 4 && num < 4) ||
      (page > totalPages - 5 && num > totalPages - 5)
    );
  });

  const scrollTop = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollIntoView();
    }
  };

  const onChangePage = (newPage: number) => {
    setPage(newPage);
    scrollTop();
  };

  useEffect(() => {
    if (fetcher.data?.ok && fetcher.state === "loading") {
      formRef.current?.reset();
      onChangePage(0);
    }
  }, [fetcher]);

  return (
    <div>
      <div className="text-2xl md:text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700">
        <h4 className="mb-1"><TextWithLine>Berikan Doa/Ucapan Bagi Kami</TextWithLine></h4>
      </div>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 px-4">
          <div className="rounded-lg shadow-lg p-6 mt-10 md:p-8 bg-white top-8 mb-6 md:mb-10">
            <fetcher.Form replace method="post" ref={formRef}>
              <fieldset disabled={fetcher.state === "submitting"}>
                <input
                  className="w-full bg-[#f8fafc] rounded border px-2 py-1.5 mb-6 outline-[#CE7BB0]"
                  placeholder="Nama Anda"
                  name="name"
                  required
                  maxLength={30}
                />
                <textarea
                  className="w-full bg-[#f8fafc] rounded border px-2 py-1.5 min-h-[6rem] mb-4 outline-[#CE7BB0]"
                  placeholder="Doa/Ucapan bagi kami"
                  name="message"
                  required
                  maxLength={200}
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-[#CE7BB0] hover:bg-[#A267AC] outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    Kirim
                  </button>
                </div>
              </fieldset>

              {fetcher.data?.ok === false && (
                <p className="pt-4 text-red-500">Gagal mengirim pesan.</p>
              )}
            </fetcher.Form>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4" ref={messagesRef}>
          <div className="pt-4">
            {fetcher.state === "loading" && (
              <div className="mb-5">
                <h5>
                  <strong>
                    <Skeleton width={120} />
                  </strong>
                </h5>
                <p>
                  <Skeleton width={200} />
                </p>
              </div>
            )}

            <h5 className="font-bold font-sans text-sm md:text-base text-gray-700 mb-1">
              Daftar Ucapan
            </h5>

            {messagesDisplay.map((message, i) => (
              <div className="mb-4 mt-2 md:mb-5" key={i}>
                <h5 className="font-semibold font-sans text-sm md:text-base text-gray-700">
                  💌  {message.name}
                </h5>
                <p className="text-left text-xs font-light mt-1 pl-5"> {new Date(`${message.date}`).toDateString()}</p>
                <p className="whitespace-pre-wrap font-extralight font-head text-sm sm:text-lg md:text-base text-gray-800 leading-6 sm:leading-10 border-b-2 pl-5 pt-1 pb-4">
                  {message.message}
                </p>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages === 1 ? null : (
            <div className="flex items-center justify-center pl-2 pt-0 mb-3">
              <button
                className="mr-2 text-2xl text-gray-700 transition-all hover:text-[#CE7BB0] disabled:opacity-50 disabled:hover:text-gray-700 pt-1"
                onClick={() => onChangePage(page - 1)}
                disabled={page === 0}
                aria-label="page-left"
              >
                <i className="bx bx-chevron-left" />
              </button>

              {paginationDisplay[0] > 0 ? (
                <Fragment>
                  <button
                    className={
                      "mr-2 px-1 font-semibold text-lg text-gray-700 transition-all hover:text-[#CE7BB0]"
                    }
                    onClick={() => onChangePage(0)}
                  >
                    1
                  </button>
                  <div className="font-semibold text-lg mr-2">...</div>
                </Fragment>
              ) : null}

              {paginationDisplay.map((num) => (
                <button
                  className={
                    "mr-2 px-1 font-semibold text-lg " +
                    (num === page
                      ? "text-[#CE7BB0]"
                      : "text-gray-700 transition-all hover:text-[#CE7BB0]")
                  }
                  key={num}
                  onClick={() => onChangePage(num)}
                >
                  {num + 1}
                </button>
              ))}

              {paginationDisplay[paginationDisplay.length - 1] <
                totalPages - 1 ? (
                <Fragment>
                  <div className="font-semibold text-lg mr-2">...</div>
                  <button
                    className={
                      "mr-2 px-1 font-semibold text-lg text-gray-700 transition-all hover:text-[#CE7BB0]"
                    }
                    onClick={() => onChangePage(totalPages - 1)}
                  >
                    {totalPages}
                  </button>
                </Fragment>
              ) : null}

              <button
                className="text-2xl mr-2 text-gray-700 transition-all hover:text-[#CE7BB0] disabled:opacity-50 disabled:hover:text-gray-700 pt-1"
                onClick={() => onChangePage(page + 1)}
                disabled={page === totalPages - 1}
                aria-label="page-right"
              >
                <i className="bx bx-chevron-right" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Message;
