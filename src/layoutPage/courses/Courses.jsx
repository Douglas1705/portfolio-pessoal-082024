import { SectionCourses } from "./coursesStyle"
function Courses() {
    return (
        <SectionCourses id="courses">
            <h2>CURSOS</h2>
            <div className="containerCourses">
                <h3>WEB Desenvolvimento - Udemy</h3>
                <p>
                    Tecnologias aprendidas: HTML5,
                    CSS3, BootStrap 4, Java Script (ES14),
                    PHP, Orientação a Objetos, MySQL,PHP
                    com PDO, Ajax, JQuery, MVC, APIs,
                    IONIC e WordPress.
                </p>
                <h3>Analista de Dados - XP Educação</h3>
                <p>
                    Tecnologias aprendidas: NoSql com MongoDB,
                    SqlServer, SGBD. modelagem, manipulação,
                    relacionamentos, CRUD, Schema, trigger,
                    performance e otimização.
                </p>
                <h3>Graphic Design Masterclass - Udemy</h3>
                <p>
                    Typography, color theory, layout and
                    composition, how to use  photos in
                    design, photo manipulations and editing
                    and magazine layout design, branding and
                    logo design, UI/UX;
                </p>
                <h3>Automação de Testes - Udemy</h3>
                <p>
                    Conteúdo aprendido: fundamentos de testes,
                    gerenciamento, documentação, tipos de testes,
                    codificação e manutenção. tecnologia JUnit.
                </p>
                <h3>API REST e AWS, com microsserviços - Udemy</h3>
                <p>
                    Spring Boot 3, Java 18, Conceitos arquiteturais
                    do REST/RESTful. Migrations com Flyway. Postman,
                    Integração com o banco de dados MySQL, Docker,
                    Content Negotiation, Versionamento de API’s,
                    HATEOAS, Swagger Open API, Autenticação com JWT
                    e Spring Security, Testes unitários e de
                    integração com, JUnit 5, Mockito, REST Assured,
                    T estcontainers.
                </p>
            </div>
        </SectionCourses>
    )
}
export default Courses
