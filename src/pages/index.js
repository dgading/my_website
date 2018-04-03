import React from 'react';
import Helmet from 'react-helmet';

import PostTeaser from '../components/PostTeaser';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return(
    <div>
    {posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => {
        return (
          <PostTeaser post={post} key={post.id}/>
        );
      })}
  </div>
  );
}

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        excerpt(pruneLength: 250)
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          path
        }
      }
    }
  }
}
`;