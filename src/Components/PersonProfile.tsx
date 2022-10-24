import style from "../Styles/About.module.css";
const Personprofile = () => {
  return (
    <div className={style.person}>
      <img
        src="https://cdn.discordapp.com/attachments/710546761537683490/1032572978422108201/uuuuuu.jpg"
        alt=""
      />

      <i className={"fa-brands fa-facebook" + " " + style.icon}></i>
      <i className={"fa-brands fa-instagram" + " " + style.icon}></i>
      <i className={"fa-brands fa-youtube" + " " + style.icon}></i>
    </div>
  );
};

export default Personprofile;
