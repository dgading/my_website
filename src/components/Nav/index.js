import React from 'react';
import styled from "styled-components";
import Link from 'gatsby-link';

const NavLinkContainer = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: none;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #cd2026;
  text-decoration: none;
  transition: all .1s ease-in-out;
  border-bottom: 1px solid transparent;
  margin: 0 20px;
  :hover {
    transform: scale(1.2);
    border-bottom: 1px solid #cd2026;
  }
`;


const Nav = () => {
  return (
    <NavLinkContainer>
      <ul>
        <li>
          <NavLink to={'/projects'}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>
            Contact
          </NavLink>
        </li>
      </ul>
        
    </NavLinkContainer>
  );
};

export default Nav;