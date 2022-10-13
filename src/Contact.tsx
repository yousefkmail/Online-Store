import style from "./Contact.module.css";
import Contactinfo from "./ContactInfo";
import { CONTACTUS_EMAIL , CONTACTUS_MESSAGE , CONTACTUS_NAME , CONTACTUS_SUBJECT , EMAIL , WEBSITE , PHONE_NUMBER ,ADDRESS  , CONTACTUS_EMAIL_LABEL , CONTACTUS_NUMBER_LABEL , CONTACTUS_ADDRESS_LABEL , CONTACTUS_WEBSITE_LABEL} from "./constants";
const Contact = () => {
  return (
    <div className={style.outer}>
      <div className={style.contactus}>
        <div className={style.headercontactus}>
          <h2>Send us a message </h2>
        </div>
        <form>
          <div className={style.inputfield}>
            <label>{CONTACTUS_NAME}</label>
            <input type={"text"}></input>
          </div>
          <div className={style.inputfield}>
            <label>{CONTACTUS_EMAIL}</label>
            <input type={"text"}></input>
          </div>
          <div className={style.inputfield}>
            <label>{CONTACTUS_SUBJECT}</label>
            <input type={"text"}></input>
          </div>
          <div className={style.inputfield}>
            <label>{CONTACTUS_MESSAGE}</label>
            <textarea maxLength={100} ></textarea>
          </div>
        </form>
      </div>

      <div className={style.ourinfo}>
        <div className={style.headerourinfo}>
          <h2>Contact us </h2>
        </div>
        <Contactinfo info={CONTACTUS_NUMBER_LABEL} value={PHONE_NUMBER} />
        <Contactinfo info={CONTACTUS_ADDRESS_LABEL} value={ADDRESS} />
        <Contactinfo info={CONTACTUS_EMAIL_LABEL} value={EMAIL} />
        <Contactinfo info={CONTACTUS_WEBSITE_LABEL} value={WEBSITE} />
      </div>
    </div>
  );
};

export default Contact;
