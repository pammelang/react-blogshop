import React from "react"
import * as util from 'util'
import Carousel from 'react-bootstrap/Carousel'
import { StaticQuery, graphql } from "gatsby"

import Image from "./image"


class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      galleryDirName: this.props.galleryDirName,
      index: 0,
    }
  }
  componentDidMount() {
    console.log('Gallery mounted!')
  }
  componentWillUnmount() {
    console.log('Gallery unmounted!')
  }


  render() {
    
    return (
      <StaticQuery
        query={graphql`
        query {
          rings: allFile(filter: {relativeDirectory: {eq: "rings"}}) {
            edges {
              node{
                ...dirFragment
              }
            }
          }
          earrings: allFile(filter: {relativeDirectory: {eq: "earrings"}}) {
            edges {
              node{
                ...dirFragment
              }
            }
          }
        }
      `}

      render={data => {
        // console.log(`gallery query log: ${JSON.stringify(data)}`)
        // testing RINGS - to convert to dynamic
        var imgNames = data[this.state.galleryDirName].edges.filter(x => !x.node.name.match(/\./)).map(x => x.node.name)
        var imgs = imgNames.map(x => {
          return (
            <Carousel.Item> 
              <Image imgName={x} alt="..."/>
            </Carousel.Item>
          )
        });

        return (
          <div> 
            {this.state.galleryDirName.toUpperCase()}
            <Carousel> 
              {imgs}
            </Carousel>
          </div>
        )
      }} />
    )
  }
}


  export const query = graphql`
  fragment dirFragment on File {
    name
    relativePath
    id
  }`


export default Gallery;


