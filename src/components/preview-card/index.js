import React from "react"
import { Link } from "gatsby"
import * as styles from "./preview-card.module.scss"
import format from "date-fns/format"

export default function PreviewCard({ mdxData }) {
  return (
    <div className={styles.ClickableCard} key={mdxData.id}>
      <div className="">
        {format(new Date(mdxData.frontmatter.date), "MMMM d, yyyy")}
      </div>
      <div>
        <h3>
          <Link to={mdxData.fields.slug}>{mdxData.frontmatter.title}</Link>
        </h3>
        <p>{mdxData.excerpt}</p>
      </div>
    </div>
  )
}
