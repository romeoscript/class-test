import React from "react";
import { confirmed } from "../../assets";
import "./aboutflex.scss";

const AboutFlex1 = () => {
  return (
    <section className="about__flex">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          rhoncus cursus cum massa viverra nibh. Vitae amet eget odio
          pellentesque erat id enim, lorem. Massa egestas adipiscing elit
          facilisi. Erat varius dolor volutpat nunc fermentum praesent magnis
          felis. Leo integer pharetra augue et vulputate urna. Enim dignissim
          non pellentesque lacus molestie nibh accumsan nunc vel. Mi id id sed
          donec. Sociis pulvinar tempus, rutrum vel id tristique est. Venenatis
          eget sollicitudin in suspendisse cursus ipsum a volutpat vitae. Neque,
          eget amet et nisl volutpat euismod ultrices morbi posuere.
        </p>
      </div>
      <div>
        <img src={confirmed} alt="" />
      </div>
    </section>
  );
};

export default AboutFlex1;
