import Aos from "aos";
import Schedule from "./Schedule";
import { useEffect } from "react";

export default function Sponser() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section>
      <div className="sponsers" data-aos="fade-up">
        <div className="sn_glitch_forNHeading atmosphere snsponsors flex items-center justify-center">
          <div className="sn_line_forNHeading flex items-center justify-center">
            SPONSORS
          </div>
          <div className="sn_line_forNHeading flex items-center justify-center">
            SPONSORS
          </div>
          <div className="sn_line_forNHeading flex items-center justify-center">
            SPONSORS
          </div>
          <div className="sn_line_forNHeading flex items-center justify-center">
            SPONSORS
          </div>
          <div className="sn_line_forNHeading flex items-center justify-center">
            SPONSORS
          </div>
          <div className="sn_line_forNHeading flex items-center justify-center">
            SPONSORS
          </div>
          <div className="sn_line_forNHeading flex items-center justify-center">
            SPONSORS
          </div>
          <div className="sn_line_forNHeading flex items-center justify-center">
            SPONSORS
          </div>
          <div className="sn_line_forNHeading flex items-center justify-center">
            SPONSORS
          </div>
        </div>
        <div className="sponsers-whole">
          <Schedule />
        </div>
      </div>
    </section>
  );
}
