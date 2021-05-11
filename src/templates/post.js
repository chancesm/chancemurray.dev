import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      fileAbsolutePath
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;
function PostTemplate({ data: { mdx: post }, scope, pageContext }) {
  if (!post) {
    return <p>No Post Found? This should be a 404</p>;
  }

  return (
    <>
      <MDXRenderer>
        {post.body}
      </MDXRenderer>
    </>
  );
}

export default PostTemplate;