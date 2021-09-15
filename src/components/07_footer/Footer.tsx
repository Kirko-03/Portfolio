import { faGithub, faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {FooterIcon} from './footerIcon/FooterIcon'
import  style from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={style.block}>
        <h2>
Uvarov Kirill Olegovich
        </h2>
        <div className={style.border}>
          <FooterIcon link={'https://github.com/Kirko-03'} icon={faGithub}/>
          <FooterIcon link={'https://www.linkedin.com/in/kirill-uvarov-615437219/'} icon={faLinkedin}/>
          <FooterIcon link={'https://t.me/Gendalfl'} icon={faTelegram}/>
          <FooterIcon link={'https://wa.me/79992206876'} icon={faWhatsapp}/>
        </div>
        <span><b>©2021 All rights reserved</b></span>
      </div>
    </div>
  );
};
