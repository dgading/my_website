import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from "styled-components";

const ProjectLink = styled.a`
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

const Projects = () => {
  return(
    <section>
      <h1>Current/Past Projects</h1>
      <p>This list consists of ideas I started and finished or at least got up on Github.</p>
      <ul>
        <li>
          <ProjectLink href='https://vue-gitman.firebaseapp.com'>Vue Hangman</ProjectLink>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
