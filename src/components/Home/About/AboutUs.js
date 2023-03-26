import React from "react";
import AboutUsRow from "./AboutUsRow";
import AboutUsRowReverse from "./AboutUsRowReverse";
import "./About.css"
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

 
  return (
    <section id="about">
    <div class="flex flex-col justify-center items-center ">
    <header class="mb-2 mt-12 text-4xl font-bold">
        <div class="relative titlee">
          <img src="/HomeImages/title.png" alt="" />
          <h1 class="lg:text-3xl  text-2xl">
          {t("About us")}

          </h1>
        </div>
      </header>
    </div>
<div className="flex ml-8 mr-8  lg:gap-4 gap-10 flex-col " dir={isRTL ? "rtl" : "ltr"}>
{i18n.language ==="en" ?

       <AboutUsRow
        title="Our Story"
        para="We are a for-profit organization that 
aims to provide services of aqeeq, alms and 
vows to our Muslim brothers in the state of Tanzania 
at nominal prices and in accordance with Islamic law."
        imgSrc="Group1.png"
      />
        :
        <AboutUsRow
        title="قصتنــا"
        para="نحن منظمة هادفة للربح تهدف إلى تقديم خدمات العقائق
والصدقات والنذور لإخواننا المسلمين في دولة تنزانيا
بأسعار رمزية ووفقًا للشريعة الإسلامية"
        imgSrc="Group1.png"
      />
       }
{i18n.language==="en" ? <AboutUsRowReverse
        title="Why us"
        para="We document all our work 
        with videos and photos,
taking into account honesty, transparency and
the privacy of the donor."
        imgSrc="Group6.png"
      />: <AboutUsRowReverse
        title="لماذا نحن ؟"
        para="نحن نوثق جميع أعمالنا بالفيديو والصور مع مراعاة 
الصدق والشفافية وخصوصية المتبرع. "
        imgSrc="Group6.png"
      />}
     {i18n.language==="en" ? <AboutUsRow
        title="Our Goal"
        para="Our goal is to serve people for 
        the implementation of sacrifices, aqeeq and alms,
         and delivering them to needy Muslims."
        imgSrc="Group3.png"
      />:
       <AboutUsRow
        title="هدفنــا"
        para="هدفنا خدمة الناس في تنفيذ الأضاحي والعقائق 
والصدقات وإيصالها للمحتاجين من المسلمين"
        imgSrc="Group3.png"
      />}
     
</div>
     
    </section>
  );
};

export default AboutUs;
