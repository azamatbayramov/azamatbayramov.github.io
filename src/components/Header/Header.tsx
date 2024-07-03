import React from 'react';
import styled from 'styled-components';


const HeaderContainer = styled.header`
    background-color: var(--color2);
    color: var(--color4);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 10%;
`

const Nav = styled.nav`
    display: flex;
    gap: 4em;
`

const NavLink = styled.a`
    color: var(--color4);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: var(--color3);
    }
`


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>Azamat Bayramov</h1>
      <Nav>
        <NavLink href="#about-me">About Me</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="#contacts">Contacts</NavLink>
        <NavLink href="./joke">Joke</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
