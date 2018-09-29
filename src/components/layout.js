import data from '../data'

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Experience from './experience';
import Education from './education';
import Personal from './personal';
import Skills from './skills';
import Footer from './footer';
import Github from './github';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={metaData => (
      <>
        <Helmet title={metaData.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <Header item={data.personal}/>
        <div style={{
          display: 'flex'
        }}>
          <div style={{padding:'1rem'}}>
            <Experience items={data.experience}/>
            <Education items={data.education} />
          </div>
          <div style={{ background:'rgb(230,230,230)', padding:'1rem'}}>
            <Personal item={data.personal} />
            <Skills item={data.skills[0]} />
            <Skills item={data.skills[1]} />
            <Github />
          </div>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
