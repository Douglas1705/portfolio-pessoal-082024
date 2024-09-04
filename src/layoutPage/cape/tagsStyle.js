import styled, { css } from 'styled-components';

export const TagsBanner = styled.img`
width: ${props => props.width};;
animation: slide 2s linear;
${({ variant }) => variant === 'left' && css`
width: 8%;
margin-left: 6%;
margin-top: 15px;
position: absolute;
`}
${({ variant }) => variant === 'right' && css`
width: 15%;
margin-left: 28px;
position: relative
`}
@keyframes slideLeft {
0%{
transform: translateX(30%);
}
100% {
transform: translateX(0);
}
}
`;