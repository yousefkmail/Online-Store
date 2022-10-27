import style from "../Styles/About.module.css";
import {
  INSTAGRAM_ICON,
  FACEBOOK_ICON,
  YOUTUBE_ICON,
  ABOUT_HEADER,
  IMAGE_NOT_FOUND,
} from "../constants";
const Personprofile = () => {
  return (
    <div className={style.person}>
      <img src={ABOUT_HEADER} alt={IMAGE_NOT_FOUND} />

      <i className={FACEBOOK_ICON + " " + style.icon}></i>
      <i className={INSTAGRAM_ICON + " " + style.icon}></i>
      <i className={YOUTUBE_ICON + " " + style.icon}></i>
    </div>
  );
};

export default Personprofile;
