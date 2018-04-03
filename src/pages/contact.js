import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from "styled-components";

const ContactLink = styled.a`
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

const Contact = () => {
  return(
    <section>
      <h1>Contact</h1>
      <p>You can find some of my code and ramblings below. Really just try @dgading on most platforms and there is a good chance you will find me.</p>
      <ul>
        <li>
          <ContactLink href='https://github.com/dgading'>Github</ContactLink>
        </li>
        <li>
          <ContactLink href='https://twitter.com/dgading'>Twitter</ContactLink>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
