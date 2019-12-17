import React from "react";
import PropTypes from "prop-types";

const TextBlock = ({ children, title, fullWidth, verticalSeparator, bigTitle, centered }) => {
  return (
    <div
      className={`container mx-auto px-4 ${
        fullWidth ? "w-full" : "w-full lg:w-2/3 lg:px-5"
      }
      ${
        centered ? "text-center" : ""
      } my-5 text-2xl text-darker text-left font-serif`}
    >
      {verticalSeparator && (
        <p className="border-l border-secondary h-5 lg:h-6 mb-3 lg:mb-5" />
      )}
      {title && (
        <h2 className={`${bigTitle?'text-4xl md:text-6xl text-secondary':'text-4xl text-primary'} mb-4 leading-tight`}>{title}</h2>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </div>
  );
};

TextBlock.propTypes = {
  title: PropTypes.string,
  fullWidth: PropTypes.bool,
  verticalSeparator: PropTypes.bool,
  bigTitle: PropTypes.bool,
  centered: PropTypes.bool,
};

export default TextBlock;
