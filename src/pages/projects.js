import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PreviewCard from "../components/preview-card"

export default function Projects({ data }) {
  return (
    <Layout>
      <h1>Projects</h1>
      {data.allMdx &&
        data.allMdx.edges.map(function ({ node: post }) {
          return (
            <PreviewCard mdxData={post} />
          )
        })}
    </Layout>
  )
}
export const query = graphql`
  query projectPages {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      filter: { fields: { collection: { eq: "projects" } } }
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
