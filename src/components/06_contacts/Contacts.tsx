import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FooterIcon } from "./../07_footer/footerIcon/FooterIcon";

let styleContainer = require("../../common/styles/Container.module.scss");
let style = require("./Contacts.module.scss");

export const Contacts = () => {
  return (
    <div className={style.contactsBlock} id={"contacts"}>
      <div className={`${styleContainer.container} ${style.block}`}>
        <h2>Contacts</h2>
        <form className={style.contacts}>
          <h2>
            <FooterIcon icon={faGoogle} link={"http://"} />{" "}
            kurulluvarov@gmail.com
          </h2>
          <h2>
            <FooterIcon icon={faMailBulk} link={"http://"} />{" "}
            kirya.uvarov.2003@mail.ru
          </h2>
        </form>
      </div>
    </div>
  );
};
