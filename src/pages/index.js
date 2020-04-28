import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import data from "../../content/data.json"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Best Laid Plans"
    console.log(data)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          <span role="img" aria-label="crystal ball">
            🔮
          </span>
        </h1>
        {data.map(chunk => {
          return (
            <p>
              {chunk.year} {chunk.season} • aged {chunk.age} • {chunk.what} •{" "}
              {chunk.where}
            </p>
          )
        })}
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
