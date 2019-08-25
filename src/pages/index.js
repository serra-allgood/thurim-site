import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    Future homepage of Thurim, a <a href="https://matrix.org">Matrix</a> server
    implementation written in <a href="https://elixir-lang.org">Elixir</a>
  </Layout>
)

export default IndexPage
