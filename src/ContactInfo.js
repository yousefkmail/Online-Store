import style from "./Contact.module.css";

const Contactinfo = (props) => {
  return (
    <div className={style.contactinfo}>
      <h4>{props.info} :</h4>
      <p>{props.value}</p>
    </div>
  );
};

export default Contactinfo;
