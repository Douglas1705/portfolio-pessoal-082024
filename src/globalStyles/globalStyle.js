import { createGlobalStyle } from "styled-components";
import '../assets/fonts.css'

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
html{
    scroll-behavior: smooth;
}
body{           
width: 100%;
//background-color: linear-gradient(180deg, rgba(27,24,23,1) 68%, rgba(163,14,14,1) 89%, rgba(148,8,8,1) 100%); 
background: rgba(27, 24, 23) url("https://i.postimg.cc/MGdVBT6V/BackRoad.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-position: center;//
}
h2{
color:white;
font-family: 'Klein Text Trial', sans-serif;
padding: 10px;
border-left: 4px solid white;
letter-spacing: 1.8vw;
font-size: 5vw;
}
h3{
 color:white;
 font-family: 'Klein Text Trial', sans-serif;
}
p:not(Header){
 font-family: "Questrial", sans-serif;
color: white;
}
main{    
margin: 0 28px;
}
//Mediq query 480px
@media (min-width: 480px) and  (max-width: 558px){
h2{
font-size: 4vw;
}
#about{
p{
padding: 10px 30px;
font-size: 3.5vw;
}
}
#projects{
h3{
font-size: 5vw;
}
p{
padding: 0 40px;
}
img:not(.logoGit){
width: 25vw;
}
.logoGit{
width: 30vw;
height: auto;
}
} //final projects
}//final media 480 and 699
//Mediq query 558px
@media (min-width: 558px) {
h2{
font-size: 3vw;
}
main{
//border: 2px solid green;
display:grid;
grid-row-start: header;
grid-template-areas:
'header header'
'about projects'
'courses projects'
'contacts projects'
'. projects'
;
grid-template-columns: 2fr 1fr;
grid-auto-rows: minmax(1px, auto);
}

#header{
h1{
font-size: 5.9vw;
}
@keyframes increaseSource {
25% {
font-size: 6.0vw; /* Tamanho inicial */
}
50% {
font-size: 6.1vw; /* Tamanho aumentado */
text-shadow: 0 0 10px white;
}
75% {
font-size: 6.2vw; /* Tamanho original */
}
}
}//final Header
#about{
grid-area: about;
height: min-content;
p{
//border: 1px solid green;
width: 80%;
word-spacing: 5px;
font-size: 15px;
line-height: 25px;
}
}//Final do About
#projects{
margin-top: 8px;
grid-area: projects;
//border: 1px solid green;
width: 30vw;
box-sizing: border-box;
hyphens: auto;
text-align: justify;
img:not(.logoGit){
width: 20vw;
height: 100%;
}
.containerGit{
width: 200px;
}
.logoGit{
width: 15vw;
height: auto;
}
h3{
font-size: 2.8vw;
}
article{
display: flex;
flex-direction: column;
}
}//final projects
#courses{
grid-area: courses;
height: min-content;
h3{
font-size: 2vw;
}
p{
font-size: 2vw;
letter-spacing: 0.2vw;
line-height: 3.5vw;
}
}//final course
#contacts{
grid-area:contacts;
img{
width: 16vw;
}
.logos{
font-size:  3vw;
}
p{
font-size: 2vw;
}
}//final contact
}//final media 558px
//Media query 900
@media (min-width:900px) {
main{
margin: 0 8vw;
}
#header{
grid-area:header;
h1{
font-size: 4vw;
}
.tagOpen{
width: 5vw;
margin-left: 10vw;
}
.tagClose{
width: 10vw;
margin-left: 10vw;
}
.containerSkills{
width: 30.5vw;
height: 3vw;
font-size: 1vw;
margin-left: 20vw;
}
}//final Header
#about{
p{
font-size: 1.5vw;
}
} //final about
#courses{
.containerCourses{
padding: 20px 4vw;
}
h3{
font-size: 1.5vw;
}
p{
padding: 0 40px;
font-size: 1.5vw;
line-height: 30px;
}
}
}`
export default GlobalStyle