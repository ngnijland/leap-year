import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>This year</h1>
    </Layout>
  )
}

export default IndexPage
