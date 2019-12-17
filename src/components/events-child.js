import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";
import theme from "../../theme";
import { FaBuilding } from "react-icons/fa";

let eventShown = 0;

const EventChild = ({ color='primary', events }) => {
  return (
    <div className={`bg-${color} p-5 flex-1 text-white font-serif`}>
      <div className="flex justify-center">
        <span
          sx={{
            borderBottomColor: theme.colors.info
          }}
          className="w-5 h-0 border-t-4 border-white border-b-8 mr-2"
        ></span>
        <FaBuilding />
        <span
          sx={{
            borderBottomColor: theme.colors.info
          }}
          className="w-5 h-0 border-t-4 border-white border-b-8 ml-2"
        ></span>
      </div>
      <h3 className="text-3xl mt-3 mb-3 text-center font-bold">MEET US AT</h3>
      <div className="block mb-4">
        {events &&
          events.map((event, i) => {
            const {
              node: { data }
            } = event;

            if (new Date(data.end_date).getTime() <  Date.now()) {
              return;
            }

            if (eventShown == 3) {
              return;
            }

            eventShown++;

            return (
              <React.Fragment key={i}>
              <a
                className="text-center leading-snug pb-2 block text-lg"
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
              >
              {data.name} ● {data.start_date} <br/>
              <span className="text-sm">{data.place}</span>
              </a>
              </React.Fragment>
            );
          })}
      </div>
      <div className="flex justify-center">
        <span
          sx={{
            borderBottomColor: theme.colors.info
          }}
          className="w-5 h-0 border-t-4 border-white border-b-8 mr-2"
        ></span>
        <FaBuilding />
        <span
          sx={{
            borderBottomColor: theme.colors.info
          }}
          className="w-5 h-0 border-t-4 border-white border-b-8 ml-2"
        ></span>
      </div>
    </div>
  );
};

EventChild.propTypes = {
  events: PropTypes.array,
  color: PropTypes.string
};

export default EventChild;
