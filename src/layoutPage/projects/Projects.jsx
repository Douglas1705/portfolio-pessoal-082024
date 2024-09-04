import LightGalleryComponent from './LightGalleryComponent';
import LogoGit from "../../assets/img/imgProjects/gitLogo.png";
import { SectionProject } from './projectStyle';

function Projects() {
    return (
        <SectionProject id='projects'>
            <h2 id="projects">PROJETOS</h2>
            <div className='containerProjects'>
                <LightGalleryComponent />
                <article>
                    <a href="https://github.com/Douglas1705" target='_blank'>
                        <img className="logoGit" src={LogoGit} alt="Logo do GitHub com acesso ao meu GitHub" />
                    </a>
                    <div className='containerGit'>
                        <h3>Projetos no GitHub</h3>
                        <p>
                            Clique na logo!
                        </p>
                    </div>
                </article>
            </div>
        </SectionProject>
    )
}
export default Projects