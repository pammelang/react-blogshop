import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Gallery from "../components/gallery"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Porntip Kanok" />
    
    <Gallery id='rings-gal' galleryDirName="rings"/>
    <Gallery id='earrings-gal' galleryDirName="earrings"/>

    <Link to="/about/">Go to About</Link>
  </Layout>
)

export default IndexPage
