import React from 'react';
import { useStaticQuery, graphql  } from "gatsby"
import StatChild from './statistic-child';
import EventsChild from './events-child';

export default StatEventsBlocks => {
  const { statistics, events } = useStaticQuery(
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
        events: allAirtable(filter: {table: {eq: "Events"}}, sort: {order: DESC, fields: data___start_date}, limit: 5 ) {
          edges {
            node {
              data {
                name
                place
                start_date
                end_date
                link
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
            return i>1?(
              <React.Fragment key={i}>
                <StatChild
                  icon={statistic.node.data.icon.localFiles[0]}
                  color={statistic.node.data.color}
                  title={statistic.node.data.title}
                  subtitle={statistic.node.data.subtitle}
                />
              </React.Fragment>
            ):null
          })
        )}
        {events && (
          <EventsChild
            events={events.edges.reverse()}
          />
        )}
      </div>
    )
}