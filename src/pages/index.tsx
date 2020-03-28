import React from "react"

import Layout from "../components/layout"
import LeapYear from "../components/leapYear"
import SEO from "../components/seo"

function IndexPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="Home" />
      <LeapYear />
    </Layout>
  )
}

export default IndexPage
