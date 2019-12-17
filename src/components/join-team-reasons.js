import React from "react";
import PropTypes from "prop-types";
import Cta from "./cta";
import _isString from "lodash/isString";
import { FaQuoteLeft } from "react-icons/fa";

const JoinTeamReasons = ({ title, subtitle, quotes, cta }) => {
  return (
    <div className="bg-infoHover">
      <div className="container mx-auto px-4 py-5 lg:p-6 py-3 font-serif">
        <h2 className="text-center text-4xl text-white mb-3 lg:mb-4">
          {title}
        </h2>
        {!_isString(subtitle) && (
          <p className="text-xl text-white text-center flex flex-col">
            {subtitle}
          </p>
        )}
        {_isString(subtitle) && (
          <div
            className="text-xl text-white text-center flex flex-col"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
        <div className="py-3 flex flex-wrap justify-start items-start">
          {quotes &&
            quotes.map((item, index) => {
              const lastItem = index === quotes.length - 1;
              return (
                <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-3 h-full">
                  <div
                    className={`${
                      lastItem ? "bg-info" : "bg-white"
                    } font-serif p-3 lg:py-4 h-12`}
                  >
                    <div
                      className={`${
                        lastItem ? "text-white" : "text-primary"
                      } text-2xl font-bold`}
                    >
                      {item.title}
                    </div>
                    <div className={`${lastItem ? "text-white" : "text-darker"}`}>
                      <FaQuoteLeft className="text-5xl float-left m-3"/>
                      <span
                        className="text-xl font-thin"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      ></span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="my-5">
          {cta && (
            <Cta link={cta.link} text="SEE ALL OUR BENEFITS" color="warning" />
          )}
        </div>
      </div>
    </div>
  );
};

JoinTeamReasons.propTypes = {
  quotes: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  cta: PropTypes.object
};

export default JoinTeamReasons;
