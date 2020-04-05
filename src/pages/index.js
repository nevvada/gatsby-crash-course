import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <SEO
          description="This is a sample website for Gatsby crash course"
          title="Home"
        />
        <h1>Welcome to my website</h1>
        <p>This is a sample site for the Gatsby crash course</p>
      </Layout>
    </div>
  )
}

export default IndexPage
