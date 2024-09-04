import { AsideContact } from "./contactStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import Perfil from "../../assets/img/imgContacts/perfil.jpg"
function Contact() {
    return (
        <AsideContact id="contacts">
            <h2>CONTATO</h2>
            <div className="containerImgContacts">
                <img className="perfil" src={Perfil} alt=""></img>
                <div className="containerContact">
                    <div className="containerLogos">
                        <FontAwesomeIcon icon={faEnvelope} className="logos envelope" />
                        <p>bertoldi_douglas@hotmail.com</p>
                    </div>
                    <div className="containerLogos">
                        <FontAwesomeIcon icon={faMobileScreen} className="logos mobile" />
                        <p>(31)9 9537-8098</p>
                    </div>
                </div>
            </div>
        </AsideContact>
    )
}
export default Contact;