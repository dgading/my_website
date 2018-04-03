import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from "styled-components";

import Nav from '../Nav';

const SiteHeader = styled.header`
  padding: 0 20px;
`;

const SiteTitle = styled.h1`
  text-align: right;
`;

const SiteTitleLink = styled(Link)`
  display: inline-block;
  color: #212121;
  text-decoration: none;
  transition: all .2s ease-in-out;
  border-bottom: 1px solid transparent;
  :hover {
    transform: scale(1.2);
    border-bottom: 1px solid #212121;
  }
`;

const Header = () => (
  <SiteHeader>
    <SiteTitle>
      <SiteTitleLink to="/">
        Daniel Gading
      </SiteTitleLink>
    </SiteTitle>
    <Nav />
  </SiteHeader>
);

Header.propTypes = {
  
}

export default Header;