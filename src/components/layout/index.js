import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from './layout.module.scss';
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className={styles.Layout}>
      <nav className={styles.navigation}>
        <div className={styles.leftNav}>
          <Link to={`/`}>
            <h3>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
        </div>
        <div className={styles.rightNav}>
          <Link to={`/blog/`}>
            Blog
          </Link>
          <Link to={`/projects/`}>
            Projects
          </Link>
          <Link to={`/about/`}>
            About
          </Link>
        </div>
      </nav>
      <div className={styles.pageContent}>
        {children}
      </div>
    </div>
  )
}