import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import format from "date-fns/format"

export default function Blog({ data }) {
  console.log({ data })
  return (
    <Layout>
      <h1>Blog</h1>
      <p>
        {data.allMdx &&
          data.allMdx.edges.map(function ({ node: post }) {
            return (
              <div key={post.id}>
                <div className="postMeta">
                  {format(new Date(post.frontmatter.date), "MMMM d, yyyy")}
                </div>
                <div>
                  <h3>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                </div>
              </div>
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
