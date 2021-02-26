import React from 'react';
import PropTypes from "prop-types";
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';


const Image = ({ imgName }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === `${imgName}.jpg`
      )
      if (!image) {
        console.log('image not found')
        return null
      }
      return <Img fluid={image.node.fluid} />
    }}
  />
)

Image.propTypes = {
  imgName: PropTypes.string,
}


export default Image