import styled from "styled-components";
export const SectionProject = styled.section`
margin-top: 35px;
div{
text-align: center;
}
img:not(.logoGit){
width: 30vw;
height: 40vw;
margin: 15px;
object-fit: cover;
object-position: top;
margin-left: 20px;
margin-top: 25px;
animation: pulsar 2s infinite;
}
article{
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 40px;
box-sizing: border-box;
}
.containerGit{
text-align: center;
}
.logoGit{
width: 40vw;
height: auto;
}
h3{
margin-top: 30px;
color: white;
font-size: 8vw;
text-align: center;
}
p{
color: white;
padding: 10px;
}
/* Definindo a animação de pulsar */
@keyframes pulsar {
0% {
box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
}
50% {
box-shadow: 0 0 40px rgba(255, 0, 0, 1);
}
100% {
box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
}
}
`;