import { useState } from "react";
import "./ScrollVedio.css";
import { Vedios } from "../../../Data/Vedios";
import ScrollCards from "./ScrollCard";
import { useTranslation } from "react-i18next";

function ScrollVedios() {
  const [nOfElement, setNOfElement] = useState(3);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const slice = Vedios.slice(0, nOfElement);

  const loadMore = () => {
    const newNOfElement = nOfElement + nOfElement;
    setNOfElement(newNOfElement >= Vedios.length ? Vedios.length : newNOfElement);
  };
  

  const loadLess = () => {
    setNOfElement(3);
  };

  return (
    <section className="items-center">
      <div className="con bg-navColor">
        <div className="lg:grid lg:grid-cols-3 md:grid-cols-6 lg:gap-5">
          {slice.map((vedio, index) => (
            <div className="m-5" key={index}>
              <ScrollCards vedio={vedio} />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center items-center flex justify-center"  dir={isRTL ? "rtl" : "ltr"}>
        {nOfElement < Vedios.length && (
          <button
            onClick={() => loadMore()}
            className="font-semibold hover:text-navColor py-2 px-4 border border-none"
          >
           {t("SeeMore")}
       
          </button>
        )}
        {nOfElement > 3 && (
          <button
            onClick={() => loadLess()}
            className="font-semibold hover:text-navColor py-2 px-4 border border-none mr-2"
          >
             {t("SeeLess")}
          </button>
        )}
      </div>
    </section>
  );
}

export default ScrollVedios;
