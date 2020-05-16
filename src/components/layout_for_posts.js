import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import SidebarForPosts from '.././components/sidebar_for_posts'

import '../styles/main.scss'
import '../styles/fonts/font-awesome/css/font-awesome.min.css'

const LayoutForPosts = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery1 {
        site {
          siteMetadata {
            author
            description
            social {
              twitter
              facebook
              linkedin
              github
              email
            }
          }
        }
      }
    `}
    render={data => (
      <div className="wrapper">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Lato|PT+Serif&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <SidebarForPosts siteMetadata={data.site.siteMetadata} />
        <div className="content-box clearfix">{children}</div>
      </div>
    )}
  />
)

LayoutForPosts.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutForPosts
