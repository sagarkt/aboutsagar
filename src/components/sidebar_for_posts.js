import { Link } from 'gatsby'
import React from 'react'

import ProfilePhoto from '../../static/images/profile-image.jpeg'

const SidebarForPosts = ({ siteMetadata }) => (
  <aside className="sidebar">
    <header>
      <div className="about">
        <Link to="/">
          <div className="author-name">{siteMetadata.author}</div>
        </Link>
        <Link to="/">
          <div className="sidebar-links">About Me</div>
        </Link>
        <Link to="/">
          <div className="sidebar-links">Projects</div>
        </Link>
      </div>
    </header>
    <footer>
      <section className="contact">
        <h3 className="contact-title">Contact me</h3>
        <ul>
          {siteMetadata.social.twitter && (
            <li>
              <a
                href={`https://twitter.com/${siteMetadata.social.twitter}`}
                target="_blank"
              >
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
          )}
          {siteMetadata.social.facebook && (
            <li>
              <a
                href={`https://facebook.com/${siteMetadata.social.facebook}`}
                target="_blank"
              >
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
          )}
          {siteMetadata.social.github && (
            <li>
              <a
                href={`https://github.com/${siteMetadata.social.github}`}
                target="_blank"
              >
                <i className="fa fa-github" aria-hidden="true" />
              </a>
            </li>
          )}
          {siteMetadata.social.linkedin && (
            <li>
              <a
                href={`https://linkedin.com/in/${siteMetadata.social.linkedin}`}
                target="_blank"
              >
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </li>
          )}
          {siteMetadata.social.email && (
            <li>
              <a href={`mailto:${siteMetadata.social.email}`} target="_blank">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </a>
            </li>
          )}
        </ul>
      </section>
      <div className="copyright">
        <p>
          {new Date().getFullYear()} &copy; {siteMetadata.author}
        </p>
      </div>
    </footer>
  </aside>
)

export default SidebarForPosts
