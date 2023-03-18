import React from "react";
import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import "./Questions.css";
import { useTranslation } from "react-i18next";
const Questions = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      id="faq"
      className=" pb-10  flex items-center justify-center flex-col relative"
    >
      <img
        src="/HomeImages/QusetionImages/topMap.png"
        className="absolute top-0 right-0 lg:w-64  w-28 "
        alt="-alt-text"
      />
      <img
        src="/HomeImages/QusetionImages/bottomMap.png"
        className="absolute bottom-0 left-0 lg:w-64  w-28"
        alt="-alt-text"
      />

      <header class="lg:m-2 m-0  text-4xl font-bold">
        <div class="relative">
          <img src="/HomeImages/title.png" alt="" />
          <h1 class="lg:text-3xl text-xl ml-1 lg:ml-1 w-full absolute text-black font-bold top-1/2 lg:left-1 left-1/4 transform -translate-x-1/4 -translate-y-1/2 whitespace-nowrap">
            {t("FrequentlyAskedQuestions")}
          </h1>
        </div>
      </header>
      <div className="w-full px-4 pt-2 z-10">
        <div className="mx-auto  w-full max-w-md rounded-md  p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="flex w-full justify-between raduisSpan bg-white px-4 py-2 text-left text-sm font-medium text-black  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 border-t-2  border-navColor"
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  <span>{t("question1")}</span>
                  <div>
                    {open ? (
                      <MinusIcon className=" h-5 w-5" />
                    ) : (
                      <PlusIcon className=" h-5 w-5" />
                    )}
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel
                  className="px-4 raduisan bg-white pt-4 pb-2 text-sm text-gray-500"
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  {t("answer1")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="mt-6">
            {({ open }) => (
              <>
                <Disclosure.Button
                  dir={isRTL ? "rtl" : "ltr"}
                  className="flex w-full justify-between raduisSpan bg-white px-4 py-2 text-left text-sm font-medium text-black  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 border-t-2  border-navColor"
                >
                  <span>{t("question2")}</span>

                  <div>
                    {" "}
                    {open ? (
                      <MinusIcon className=" h-5 w-5" />
                    ) : (
                      <PlusIcon className=" h-5 w-5" />
                    )}
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel
                  className="px-4 raduisan bg-white pt-4 pb-2 text-sm text-gray-500"
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  {t("answer2")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-6">
            {({ open }) => (
              <>
                <Disclosure.Button
                  dir={isRTL ? "rtl" : "ltr"}
                  className="flex w-full justify-between raduisSpan bg-white px-4 py-2 text-left text-sm font-medium text-black  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 border-t-2  border-navColor"
                >
                  <span>{t("question3")}</span>
                  {open ? (
                    <MinusIcon className=" h-5 w-5" />
                  ) : (
                    <PlusIcon className=" h-5 w-5" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className="px-4 raduisan bg-white pt-4 pb-2 text-sm text-gray-500"
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  {t("answer3")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-6">
            {({ open }) => (
              <>
                <Disclosure.Button
                  dir={isRTL ? "rtl" : "ltr"}
                  className="flex w-full justify-between raduisSpan bg-white px-4 py-2 text-left text-sm font-medium text-black  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 border-t-2  border-navColor"
                >
                  <span>{t("question4")}</span>
                  {open ? (
                    <MinusIcon className=" h-5 w-5" />
                  ) : (
                    <PlusIcon className=" h-5 w-5" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className="px-4 raduisan bg-white pt-4 pb-2 text-sm text-gray-500"
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  {t("answer4")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-6">
            {({ open }) => (
              <>
                <Disclosure.Button
                  dir={isRTL ? "rtl" : "ltr"}
                  className="flex w-full justify-between raduisSpan bg-white px-4 py-2 text-left text-sm font-medium text-black  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 border-t-2  border-navColor"
                >
                  <span>{t("question5")}</span>
                  {open ? (
                    <MinusIcon className=" h-5 w-5" />
                  ) : (
                    <PlusIcon className=" h-5 w-5" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className="px-4 raduisan bg-white pt-4 pb-2 text-sm text-gray-500"
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  {t("answer5")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-6">
            {({ open }) => (
              <>
                <Disclosure.Button
                  dir={isRTL ? "rtl" : "ltr"}
                  className="flex w-full justify-between raduisSpan bg-white px-4 py-2 text-left text-sm font-medium text-black  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 border-t-2  border-navColor"
                >
                  <span> {t("question6")}</span>
                  {open ? (
                    <MinusIcon className=" h-5 w-5" />
                  ) : (
                    <PlusIcon className=" h-5 w-5" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className="px-4 raduisan bg-white pt-4 pb-2 text-sm text-gray-500"
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  {t("answer6")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </section>
  );
};

export default Questions;
