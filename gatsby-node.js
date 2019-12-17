const path = require(`path`)
const crypto = require('crypto');
const axios = require('axios');
const _toLower = require('lodash/toLower');

const LoadablePlugin = require('@loadable/webpack-plugin')
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()]
  })
}

exports.sourceNodes = async ({ actions }) => {
  const {createNode} = actions;
  const featured_skills = { 
    "drupal": "content",
    "drupal-8": "content",
    "wordpress":"content",
    "docker":"devops",
    "ansible":"devops",
    "circleci":"devops",
    "symfony":"frameworks",
    "twig":"front-end",
    "atomic-design":"front-end",
    "react":"javascript",
    "gatsby":"javascript"
  }
  
  const KEEPTRACK_URL= process.env.KEEPTRACK_URL;
  const KEEPTRACK_USER= process.env.KEEPTRACK_USER;
  const KEEPTRACK_PASSWORD= process.env.KEEPTRACK_PASSWORD;
  
  const token = await axios.post(KEEPTRACK_URL,
    {
      "query": "mutation {loginWithPassword(email: \""+KEEPTRACK_USER+"\", plainPassword: \""+KEEPTRACK_PASSWORD+"\") { id token tokenExpires }}",
    },
    {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }}, 
  );
  
  const getCapabilities = await axios.post(KEEPTRACK_URL, {
      "query": "{ capabilities_intermediate { id, name, quantity, skills { id, name, featured, state, relevance, quantity }}}"
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'meteor-login-token': token.data.data.loginWithPassword.token
        }
      }
    )
  const capabilities = getCapabilities.data.data.capabilities_intermediate
  for (const capability of capabilities) {
    // add capability
    await createNode({
      children: [],
      ...capability,
      parent: null,
      internal: {
        type: 'Capabilities',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(capability))
          .digest(`hex`),
      }
    })
  }

  for (const skill of Object.keys(featured_skills)) {
    const featured_skill = capabilities.find(capability => { 
      return capability.id === featured_skills[skill]
    });

    if (!featured_skill) {
      continue;
    }

    const skillAsCapability = { ...featured_skill, ...{id: skill, name: skill.charAt(0).toUpperCase() + skill.slice(1)} }

    // add featured skill as capability
    await createNode({
      children: [],
      ...skillAsCapability,
      parent: null,
      internal: {
        type: 'Capabilities',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(skillAsCapability))
          .digest(`hex`),
      }
    })
  }

};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allNodeLanding(filter: {path: {alias: {ne: "/homepage"}}}) {
        edges {
          node {
            path {
              alias
            }
          }
        }
      }

      allNodeBlogPost {
        edges {
          node {
            title
            path {
              alias
            }
          }
        }
      }

      allUserUser (filter: {field_public_profile: {eq: true}}){
        edges {
          node {
            id
            name
          }
        }
      }

      allNodeCaseStudy {
        edges {
          node {
            title
            path {
              alias
            }
          }
        }
      }

      allNodeCareer {
        edges {
          node {
            title
            path {
              alias
            }
          }
        }
      }

      allCapabilities {
        edges {
          node {
            id
          }
        }
      }

      allTaxonomyTermTags {
        nodes {
          name
          path{
            alias
          }
        }
      }

    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create landing pages.
    const landings = result.data.allNodeLanding.edges
    landings.forEach(landing => {
      createPage({
        path: landing.node.path.alias,
        component: path.resolve(`./src/templates/landing.js`),
        context: {
          slug: landing.node.path.alias,
        },
      })
    });

    // Create articles.
    const posts = result.data.allNodeBlogPost.edges
    posts.forEach(post => {
      createPage({
        path: post.node.path.alias,
        component: path.resolve(`./src/templates/article.js`),
        context: {
          slug: post.node.path.alias,
        },
      })
    });

    // Create user pages.
    const users = result.data.allUserUser.edges;
    users.forEach(user => {
      createPage({
        path: 'user/' + user.node.name,
        component: path.resolve(`./src/templates/user.js`),
        context: {
          slug: user.node.name,
        },
      })
    });

    // Create caseStudies pages.
    const caseStudies = result.data.allNodeCaseStudy.edges
    caseStudies.forEach(caseStudy => {
      createPage({
        path: caseStudy.node.path.alias,
        component: path.resolve(`./src/templates/case-study.js`),
        context: {
          slug: caseStudy.node.path.alias,
        },
      })
    });

    // Create careers pages.
    const careers = result.data.allNodeCareer.edges
    careers.forEach(career => {
      createPage({
        path: career.node.path.alias,
        component: path.resolve(`./src/templates/career.js`),
        context: {
          slug: career.node.path.alias,
        },
      })
    });

    // Create KeepTrack pages.
    const capabilities = result.data.allCapabilities.edges
    capabilities.forEach(capability => {
      createPage({
        path: `hire-${capability.node.id}-developers`,
        component: path.resolve(`./src/templates/capability.js`),
        context: {
          slug: `hire-${capability.node.id}-developers`,
          id: capability.node.id
        },
      })
    });

    // Create Tag pages.
    const tags = result.data.allTaxonomyTermTags.nodes
    tags.forEach(tag => {
      createPage({
        path: _toLower(tag.path.alias),
        component: path.resolve(`./src/templates/tag.js`),
        context: {
          slug: _toLower(tag.path.alias),
        },
      })
    });

  })

}
