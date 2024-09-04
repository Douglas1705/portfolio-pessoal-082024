import Typewriter from 'typewriter-effect';
import { TypeEffectStyle } from './typeEffectStyle';

const TypeEffect = () => {
return (
<div>
<TypeEffectStyle>
<Typewriter
options={{
strings: ['Analista de sistemas', 'Programador', 'Desenvolvedor', 'Segurança', "Qualidade"],
autoStart: true,
loop: true,

}}
/>
</TypeEffectStyle>
</div>
);
};

export default TypeEffect;
