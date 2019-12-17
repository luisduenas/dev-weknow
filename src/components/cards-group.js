import React from "react";
import PropTypes from "prop-types";
import Card from './card';

const CardsGroup = ({ title, cards }) => {
  return (
    <React.Fragment>
      {title&&<h3 className="text-primary text-4xl text-center font-normal mt-5">{title}</h3>}
      <div className="lg:flex items-start justify-center items-stretch mb-5 mt-3 container mx-auto ">
        {cards && cards.map(card => {
          return (
            <Card
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              color={card.color}
              content={card.content}
              ctaLink={card.ctaLink}
              ctaLinkText={card.ctaLinkText}
            />
          )
        })}
      </div>
    </React.Fragment>
  );
};

CardsGroup.propTypes = {
  cards: PropTypes.array
};

export default CardsGroup;
