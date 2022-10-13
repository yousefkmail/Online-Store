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
            <textarea maxLength={100} ></textarea>
          </div>
        </form>
      </div>

      <div className={style.ourinfo}>
        <div className={style.headerourinfo}>
          <h2>Contact us </h2>
        </div>
        <Contactinfo info="number" value="askhdasjkd" />
        <Contactinfo info="Address" value="asdasdasd" />
        <Contactinfo info="Email" value="asdasdasd" />
        <Contactinfo info="Website" value="asdasdas" />
      </div>
    </div>
  );
};

export default Contact;
