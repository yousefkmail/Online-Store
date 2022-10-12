import style from "./Contact.module.css";
import Contactinfo from "./ContactInfo";
const Contact = () => {
  return (
    <div className={style.outer}>
      <div className={style.contactus}>
        <div className={style.headercontactus}>
          <h2>Send us a message </h2>
        </div>
        <form>
          <div className={style.inputfield}>
            <label>Name</label>
            <input type={"text"}></input>
          </div>
          <div className={style.inputfield}>
            <label>Email</label>
            <input type={"text"}></input>
          </div>
          <div className={style.inputfield}>
            <label>Subject</label>
            <input type={"text"}></input>
          </div>
          <div className={style.inputfield}>
            <label>Message</label>
            <textarea maxLength={100} type={"text"}></textarea>
          </div>
        </form>
      </div>

      <div className={style.ourinfo}>
        <div className={style.headerourinfo}>
          <h2>Contact us </h2>
        </div>
        <Contactinfo info="number" value={process.env.REACT_APP_PHONE_NUMBER} />
        <Contactinfo info="Address" value={process.env.REACT_APP_ADDRESS} />
        <Contactinfo info="Email" value={process.env.REACT_APP_EMAIL} />
        <Contactinfo info="Website" value={process.env.REACT_APP_WEBSITE} />
      </div>
    </div>
  );
};

export default Contact;
