import la17 from "../../assets/la17.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
import youtube from "../../assets/youtube.png";

import "./footer.css";
const Footer = () => {
  const urlFacebook = "https://www.facebook.com/LU17com"
  const urlTwitter = "https://twitter.com/lu17com"
  const urlInstagram = "https://www.instagram.com/lu.17_com/"
  const urlTiktok = "https://www.tiktok.com/@lu17.com"
  const urlYoutube = "https://www.youtube.com/@Lu17com"

  return (
    <div className="footer-component">
      <div className="img-footer-container">
        <img src={la17} alt="" />
        <div className="redes-container">
          <p>www.lu17.com</p>
          <div className="redes-logos-div">
            <a href={urlFacebook} target="_blank" rel="noreferrer"><img className="redes" src={facebook} alt="facebook" /></a>
            <a href={urlTwitter} target="_blank" rel="noreferrer"><img className="redes" src={twitter} alt="twitter" /></a>
            <a href={urlInstagram} target="_blank" rel="noreferrer"><img className="redes" src={instagram} alt="instagram" /></a>
            <a href={urlTiktok} target="_blank" rel="noreferrer"><img className="redes" src={tiktok} alt="tiktok" /></a>
            <a href={urlYoutube} target="_blank" rel="noreferrer"><img className="redes" src={youtube} alt="youtube" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
