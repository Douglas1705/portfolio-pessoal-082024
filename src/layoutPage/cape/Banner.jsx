import TagOpening from '../../assets/img/imgBanner/img_left_opening_tag.svg';
import TagClose from '../../assets/img/imgBanner/img_right_close_tag.svg';
import { HeaderStyle } from './headerStyle';
import { ContainerStyle } from './containerStyle';
import { TagsBanner } from './tagsStyle';
import { ContainerSkillStyle } from './containerSkillStyle';
import TypeEffect from './typeEffect';

function Banner() {
    return (
        <HeaderStyle id='header'>
            <TagsBanner className='tagOpen' variant='left' src={TagOpening} alt="imagem ilustrativa para efeito visual" />
            <ContainerStyle className='containerText'>
                <p>Hello <span>World</span></p>
                <h1> DOUGLAS <span>BERTOLDI</span></h1>
                <div className='containerSkillAndTags'>
                    <ContainerSkillStyle className='containerSkills'>
                        <TypeEffect />
                    </ContainerSkillStyle>
                    <TagsBanner className='tagClose' variant='right' src={TagClose} alt="imagem ilustrativa para efeito visual" />
                </div>
            </ContainerStyle>
        </HeaderStyle>
    )
}
export default Banner
