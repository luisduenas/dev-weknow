import React from 'react';
import PropTypes from 'prop-types';

const TwoBlockGrid = ({title, columns}) => {
  return (
    <React.Fragment >
      {title&&<h4 className="text-primary text-4xl text-center font-normal mt-5 mb-4">{title}</h4>}
      <div className="container mx-auto p-4 lg:pt-0 lg:pb-3 flex flex-wrap font-serif items-start justify-center">
        {columns && columns.map((column)=>(
          <div className="w-full lg:w-1/2 py-4 lg:px-3 lg:pt-0">
            <h3 className="text-secondary text-4xl mb-3 mt-0 leading-normal">{column.title}</h3>
            <div className="text-2xl leading-normal font-thin text-darker"
              dangerouslySetInnerHTML={{ __html: column.content }}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

TwoBlockGrid.propTypes = {
  
};

TwoBlockGrid.defaultProps = {
  columns: [
    {
      title: 'Time Zone',
      content: 'Why source your development needs to experts operating so far outside your hours of operations? Get top-tier Drupal talent in the same time zone.'
    },
    {
      title: 'Language & Culture',
      content: 'Multilingual and english proficiency teams. Speaking the same language but also sharing cultures are value aspects into the nearshore sourcing model.'
    },
    {
      title: 'Talent',
      content: "Recognized as the region's top Drupal development company. Our prospective hires go through an exhaustive screening process prior to joining us."
    },
    {
      title: 'Reputation',
      content: 'For +10 years, our focus has been on building premium digital experiences for our clients. Perfect execution and community projects, e.g Drupal Console. We are one of the top software development companies in latinamerica.   '
    },
  ]
};

export default TwoBlockGrid;