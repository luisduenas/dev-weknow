import React from 'react';
import { useStaticQuery, graphql  } from "gatsby"
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { FaChalkboard } from "react-icons/fa";

const Presentations = ({title, text}) => {

  const presentations = useStaticQuery(
    graphql`
      {
        allAirtable(filter: {table: {eq: "Presentations"}}, sort: {fields: data___event___data___start_date, order: DESC}) {
          edges {
            node {
              data {
                name
                link
                event {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
  `)

  return (
    <div className="py-4 px-3 md:p-5 font-serif"
      sx={{
        background: 'linear-gradient(180deg,#288DC1 0%,#AF1F45 100%)',
      }}
    >
      <div className="container mx-auto text-white">
        <h2 className="text-4xl text-center mb-5">{title}</h2>
        <div 
          className="text-2xl text-center font-thin mb-5"
          dangerouslySetInnerHTML={{ __html: text }}
        >
        </div>
        <div className="flex flex-wrap justify-center items-start">
          {presentations && presentations.allAirtable.edges.map(({node},i) => {
            return <React.Fragment key={i} >
              <div className="flex lg:w-1/3 w-full items-center justify-center mb-4">
                <div className="w-3/12 p-3"><FaChalkboard className="text-4xl"/></div>
                <div className="w-9/12">
                  <h3 className="text-2xl">
                    <a target="_blank" href={node.data.link}>{node.data.name}</a>
                  </h3>
                  {node.data.event && (
                    <p className="text-lg font-thin">{node.data.event[0].data.name}</p>
                  )}
                </div>
              </div>
            </React.Fragment>
          })}
        </div>
      </div>
      
    </div>
  );
};

Presentations.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Presentations;