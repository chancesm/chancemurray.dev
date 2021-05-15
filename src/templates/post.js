import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from "../components/layout"

function PostTemplate({ data: { mdx: post }, scope, pageContext }) {
  if (!post) {
    return <p>No Post Found? This should be a 404</p>;
  }

  return (
    <Layout>
      <MDXRenderer>
        {post.body}
      </MDXRenderer>
    </Layout>
  );
}
export const query = graphql`
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

export default PostTemplate;