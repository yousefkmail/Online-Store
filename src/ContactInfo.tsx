import style from "./Contact.module.css";
  
interface contact {
  info : string ;
  value : string ;
}

const Contactinfo = (props:contact) => {
  return (
    <div className={style.contactinfo}>
      <h4>{props.info} :</h4>
      <p>{props.value}</p>
    </div>
  );
};

export default Contactinfo;
