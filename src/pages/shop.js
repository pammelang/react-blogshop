import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Shop = () => (
  <Layout>
    <SEO title="Shop" />
    <h1>Artisan, handmade jewelry</h1>
    <p>Every piece is unique</p>
    <Link to="/">Back to the homepage</Link>
  </Layout>
)

export default Shop
