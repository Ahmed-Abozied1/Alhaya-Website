import React from 'react';
import Button from '../../Button/Button';

const MyAboutUs = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <h1 className="flex-auto text-right font-semibold text-3xl leading-relaxed px-4 py-2 sm:w-1/2 sm:block  sm:py-4">
        خبره فى المساج تنسيك مشوار زيارة الفروع
        <br />
        من عام 2022 واحنا مستمرين فى تقديم خجمة العناية الشخصيه
        <br />
        قاعدة بيانات عملائنا تجاةوت 500 عميل سعيد جدا بخدماتنا الاحترافيه
        <br />
        <div className="m-4">
          <Button />
        </div>
      </h1>

      <h1 className="flex-auto text-right font-semibold text-3xl leading-relaxed px-4 py-2 sm:w-1/2 sm:block  sm:py-4">
        مستحيل كل ما حبيت تسوى مساج تشيل هم المشوار؟ <br />
        العنايه الشخصيه لازم تكون فى البيت وعلى يد ناس متفرغين لك فقط <br />
        !زيارات لين بيتك تغنيك عن وجع الرأس
        <br />
        ليش تروح للفروع وتسوى مساج واحنا عندنا المتخصصين يجوك لين البيت
      </h1>
      <br />
    </div>
  );
};

export default MyAboutUs;
