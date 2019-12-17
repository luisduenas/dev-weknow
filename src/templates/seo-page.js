import React from 'react';
import PropTypes from 'prop-types';
import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleHero from '../components/title-hero';

const SeoPage = props => {
  return (
    <Layout>
      <SEO
        title="Open Source Development"
        keywords={[`gatsby`, `tailwind`, `react`, 'weknowinc']}
      />
      <TitleHero 
        title="Open Source Development" 
        image="https://weknowinc.com/sites/default/files/styles/hero/public/2019-08/gatsby-yaml.png?itok=BNePlavV" 
        
      />
      <div className="container mx-auto py-5 leading-normal px-3 text-2xl font-serif text-darker font-thin">
				<p>While working on a Gatsby site, we have a requirement to provide support for multiple authors/contributors per page. We got this working by following the excellent Gatsby documentation <a href="https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types">Mapping node types</a>.&nbsp; In this post, I will be describing the steps we followed.</p>

        <h3>Adding gatsby-transformer-yaml dependency using npm</h3>

        <p>Run this on your Gatsby project within the root directory.</p>

        <pre><code >npm install --save gatsby-transformer-yaml</code></pre>

        <h3>Configuring the plugins</h3>

        <p>For this example, we are going to have a `contributor.yaml`&nbsp;file located at&nbsp;src/data.</p>

        <pre><code>- id: jane_doe 
          name: Jane Doe 
          twitter: jane_doe
          github: //github.com/jane_doe
          drupal: //www.drupal.org/u/jane_doe
          wordpress: //profiles.wordpress.org/jane_doe

          bio: CEO
        - id: john_doe
          name: John Doe 
          twitter: john_doe
          linkedin: //www.linkedin.com/in/john_doe
          github: //github.com/john_doe
          bio: Technical Manager, Training and Certification
        </code></pre>

      </div>

    </Layout>
  );
};

SeoPage.propTypes = {
  
};

export default SeoPage;