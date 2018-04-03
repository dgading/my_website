import React from 'react';
import styled from "styled-components";
import Link from 'gatsby-link';

const TeaserContainer = styled.div`
  position: relative;
`;

const TeaserTitle = styled.h3`
  margin: 0;
  padding: 0;
`;

const TeaserLink = styled(Link)`
  display: inline-block;
  color: #212121;
  text-decoration: none;
  transition: all .1s ease-in-out;
  border-bottom: 1px solid transparent;
  :hover {
    transform: scale(1.2);
    border-bottom: 1px solid #212121;
  }
`;

const Date = styled.span`
  font-size: 14px;
`;

const PostTeaser = ({post}) => {
  return (
    <TeaserContainer>
      <TeaserTitle>
        <TeaserLink to={post.frontmatter.path}>
          {post.frontmatter.title}
        </TeaserLink>
      </TeaserTitle>
      <Date>{post.frontmatter.date}</Date>
      <p>{post.excerpt}</p>
    </TeaserContainer>
  )
}

export default PostTeaser;
