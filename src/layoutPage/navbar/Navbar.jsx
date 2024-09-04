import { useState, useEffect, useRef } from 'react';

import "../navbar/sidebar.css";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu();
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <nav id='Navbar'>
            <div className="hamburger-menu" ref={menuRef}>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#header" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Projetos</a></li>
                        <li><a href="#courses" onClick={closeMenu}>Cursos</a></li>
                        <li><a href="#contacts" onClick={closeMenu}>Contato</a></li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
};
export default Navbar;
