// LightGalleryComponent.jsx
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

//fotos
import PortfolioReact from "../../assets/img/imgProjects/PorfolioReact.jpg";
import SiteFinans from "../../assets/img/imgProjects/siteFinans.jpg";
import SiteSpotify from "../../assets/img/imgProjects/siteSpotify.jpg";
import SiteMuseu from "../../assets/img/imgProjects/site-museu.jpg"

const LightGalleryComponent = () => {
    return (
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <a href={PortfolioReact} data-sub-html="<h3>Site criado usando Jquery e Bootstrap</h3>">
                <img alt="" src={PortfolioReact} />
            </a>
            <a href={SiteFinans} data-sub-html="<h3>Site criado em curso</h3>">
                <img alt="" src={SiteFinans} />
            </a>
            <a href={SiteSpotify} data-sub-html="<h3>Site criado em curso</h3>">
                <img alt="" src={SiteSpotify} />
            </a>
            <a href={SiteMuseu} data-sub-html="<h3>Site criado em curso</h3>">
                <img alt="" src={SiteMuseu} />
            </a>
        </LightGallery>
    );
};
export default LightGalleryComponent;
