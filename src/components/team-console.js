import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import TeamItem from './team-item';

const TeamConsole = (props) => {

  const { users } = useStaticQuery(graphql`
  {
    users: allUserUser(filter: {field_public_profile: {}, field_dc_maintainer: {eq: true}}, sort: {fields: field_full_name}) {
      edges {
        node {
          name
          path {
            alias
          }
          field_bio {
            processed
          }
          field_dc_maintainer
          field_facebook {
            title
            uri
          }
          field_full_name
          field_github {
            title
            uri
          }
          field_position
          field_linkedin {
            title
            uri
          }
          field_twitter {
            title
            uri
          }
          field_has_profile
          relationships {
            field_avatar {
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 480, maxHeight: 480, cropFocus: CENTER) {
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
    }
  }
`)

  const team = users.edges.map(({node}) => {
    return {
      name: node.field_full_name,
      position: node.field_position,
      image: node.relationships.field_avatar.relationships.field_media_image.localFile.childImageSharp.fluid,
      page: node.path.alias,
      hasProfile: node.field_has_profile
    }
  })

  return (
    <div className="md:flex flex-wrap container mx-auto my-5">
      {team && team.map((person, i)=>(
        <TeamItem key={i} person={person} />
      ))}
    </div>
  );
};

export default TeamConsole;