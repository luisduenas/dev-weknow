import React from 'react';
import { useStaticQuery, graphql  } from "gatsby"
import StatChild from './statistic-child';

export default StatBlocks => {
  const { statistics } = useStaticQuery(
    graphql`
      query {
        statistics: allAirtable(filter: {table: {eq: "Statistics"}}, sort: {order: ASC, fields: data___order}) {
          edges {
            node {
              data {
                color
                title
                subtitle
                icon {
                  localFiles {
                    url
                    extension
                    childImageSharp {
                      fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)

    return (
      <div className="md:flex flex-wrap my-5">
        {statistics && (
          statistics.edges.map((statistic, i) => {
            return (
              <React.Fragment key={i}>
                <StatChild
                  icon={statistic.node.data.icon.localFiles[0]}
                  color={statistic.node.data.color}
                  title={statistic.node.data.title}
                  subtitle={statistic.node.data.subtitle}
                />
              </React.Fragment>
            )
          })
        )}
      </div>
    )
}