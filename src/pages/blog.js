import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ClickableCard from "../components/clickable-card"

export default function Blog({ data }) {
  console.log({ data })
  return (
    <Layout>
      <h1>Blog</h1>
      <p>
        {data.allMdx &&
          data.allMdx.edges.map(function ({ node: post }) {
            return (
              <ClickableCard mdxData={post} />
            )
          })}
      </p>
    </Layout>
  )
}
export const query = graphql`
  query blogPosts {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            collection
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
