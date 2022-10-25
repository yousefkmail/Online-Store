import style from "../Styles/About.module.css";
import Services from "./Services";
import Personprofile from "./PersonProfile";
import { ABOUT_US_INFO, ABOUT_US_LABEL, ABOUT_US_TITLE } from "../constants";
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headercontent}>
          <h1>{ABOUT_US_LABEL}</h1>
          <h2>{ABOUT_US_TITLE} </h2>
        </div>
      </div>

      <div className={style.personalinfo}>
        <div className={style.personaldescription}>
          <p> {ABOUT_US_INFO} </p>
        </div>
        <div className={style.personalinfo}>
          <Personprofile />
          <Personprofile />
          <Personprofile />
        </div>
      </div>

      <Services />
    </div>
  );
};

export default About;
