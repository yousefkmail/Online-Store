import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.outer}>
      <div className={style.contact}>
        <div className={style.header}>
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

      <div className={style.contact1}>
        <div className={style.header1}>
          <h2>Contact us </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
