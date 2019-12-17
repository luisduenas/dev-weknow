import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql  } from "gatsby"
import _map from 'lodash/map';
import ProjectList from '../components/contributions-project-list';

const Contributions = ({title, text}) => {
  const contributions = useStaticQuery(
    graphql`
      {
        allAirtable(filter: {table: {eq: "Contributions"}}) {
          group(field: data___type) {
            edges {
              node {
                data {
                  type
                  name
                  link
                }
              }
            }
          }
        }
      }
  `)

  return (
    <div className="container mx-auto font-serif mb-4 pb-2 px-4 lg:px-0">
      <h2 className="text-4xl text-secondary text-center">{title}</h2>
      <div 
        className="md:text-2xl text-lg font-thin text-darker text-center mb-4"
        dangerouslySetInnerHTML={{ __html: text }}
      >
      </div>
      {
        contributions && _map(contributions.allAirtable.group, (group,i)=> {
          return <React.Fragment key={i}>
              <h3 className="capitalize text-2xl text-primary text-center">{group.edges[0].node.data.type}</h3>
              <ProjectList items={group.edges} columns="2" key={i}/>
          </React.Fragment>
        })
      }
    </div>
  );
};

Contributions.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Contributions;