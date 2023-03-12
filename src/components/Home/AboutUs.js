import React from "react";
import AboutUsRow from "../AboutUsRow";
import AboutUsRowReverse from "../AboutUsRowReverse";
import Title from "../Title";
const AboutUs = () => {
  return (
    <div className="my-0 py-0 md:px-20 px-8 bg-dry">
      <Title title="About us " />

      <AboutUsRow
        title="Our Story"
        para="We are a for-profit organization that 
aims to provide services of aqeeq, alms and 
vows to our Muslim brothers in the state of Tanzania at nominal prices and in accordance with Islamic law."
        imgSrc="Group1.png"
      />
      <AboutUsRowReverse
        title="Why us"
        para="We document all our work 
        with videos and photos,
taking into account honesty, transparency and
the privacy of the donor"
        imgSrc="Group6.png"
      />
      <AboutUsRow
        title="Our Goal"
        para="Our goal is to serve people for 
        the implementation of sacrifices, aqeeq and alms,
         and delivering them to needy Muslims."
        imgSrc="Group3.png"
      />
    </div>
  );
};

export default AboutUs;
