import style from "../Styles/About.module.css";
import Services from "./Services";
import Personprofile from "./PersonProfile";
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headercontent}>
          <h1>About us</h1>
          <h2>We deliver fast services </h2>
        </div>
      </div>

      <div className={style.personalinfo}>
        <div className={style.personaldescription}>
          <p>
            As a result, Business IT Essentials has been around for 20+ years
            now, has worked with hundreds of clients across 4 continents in
            hundreds of industries. Our clients come to us and stay with us
            because they know how important it is to have someone they can trust
            with taking care of their personal or business website. Our clients
            seek our services because they want the peace of mind that their
            websites are in good hands. Our clients work with us because we save
            them time and money by providing complete care for their websites
            for a low fixed monthly price and an unbeatable 100% satisfaction
            guarantee. Our clients love us for the personal attention they
            receive, our quick responses, problem resolution skills, and of
            course our affordable services.
          </p>
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
