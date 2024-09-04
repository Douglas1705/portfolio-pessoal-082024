import styled from 'styled-components';

export const HeaderStyle = styled.header`
position: relative;
height: auto ;
box-sizing: border-box;
background: linear-gradient(90deg, rgb(27, 24, 23) 50%, rgb(255, 255, 255) 50%);
border-top: 1px solid black;
h1{
margin-top: 10vw;
font-family: "DM Serif Display", serif;
font-size: 6.6vw;
letter-spacing: 1.7vw;
line-height: 60px;
transform: scaleY(1.4);
animation: slide 2s linear, increaseSource 3s 2s 1 alternate;
}
p{
font-family: 'Klein Text Trial', sans-serif;
font-size: 1.7vw;
letter-spacing: 5px;
color: white;
animation: slide 2s linear;
}
span{
color: black;
}
@keyframes slide {
0%{
transform: translateX(30%);
}
100% {
transform: translateX(0);
}
}
@keyframes increaseSource {
0% {
font-size: 6.6vw; /* Tamanho inicial */
}
25% {
font-size: 6.9vw; /* Tamanho aumentado */
text-shadow: 0 0 10px white;
}
75% {
font-size: 6.6vw; /* Tamanho original */
}
}
.containerSkillAndTags{
display: flex;
width: 100%;
margin-top: 4vw;
justify-content:center ;
}
`;