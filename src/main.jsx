import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './globalStyles/globalStyle'
import Banner from './layoutPage/cape/Banner'
import MainHtml from './layoutPage/mainComponentHtml/MainHtml'
import Navbar from './layoutPage/navbar/Navbar'
import About from './layoutPage/about/About'
import Projects from './layoutPage/projects/Projects'
import Courses from './layoutPage/courses/Courses'
import Contact from './layoutPage/contact/Contact'
import Baseboard from './layoutPage/footer/Baseboard'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Banner />
        <Navbar />
        <MainHtml>
            <About />
            <Projects />
            <Courses />
            <Contact />
        </MainHtml>
        <Baseboard />
        <GlobalStyle />
    </React.StrictMode>,
)
