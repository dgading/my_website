import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, {injectGlobal} from "styled-components";

import Header from '../components/Header';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono');
  body {
    color: #212121;
    font-family: 'IBM Plex Mono', monospace;
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  } 
`

const MainLayout = styled.div`
  padding: 20px;
`;

const ContentArea = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  a {
    display: inline-block;
    color: #cd2026;
    text-decoration: none;
    transition: all .1s ease-in-out;
    border-bottom: 1px solid transparent;
    :hover {
      transform: scale(1.2);
      border-bottom: 1px solid #cd2026;
    }
  }
`;

const TemplateWrapper = ({ children }) => (
  <MainLayout>
    <Helmet
      title="Daniel Gading's Blogfolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <ContentArea>
      {children()}
    </ContentArea>
  </MainLayout>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
