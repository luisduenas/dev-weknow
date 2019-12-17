import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";

const BlockList = ({title, items}) => {
  const [mobileSize] = useState(1024);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if(typeof window !== 'undefined'){
      const handleResize = (event) => {
        const isMobile = window.innerWidth < mobileSize;
        setIsMobile(isMobile);
      }
      const isMobile = window.innerWidth < mobileSize;
      window.addEventListener('resize', handleResize, {passive: true});
      
      setIsMobile(isMobile);
    }
  }, [mobileSize]);
  return (
    <div className="container mx-auto mb-3 font-serif">
      <div className="mx-4 mt-6">
        <div
        sx={{
          maxWidth: '10rem'
        }}
        className="max-w-16 relative flex flex-col">
          <h2 sx={{
            transformOrigin: 'center'
          }} 
            className="text-darker border-l-2 border-secondary pl-4 mt-4 text-3xl mb-4"
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h2>
          <div className="hidden bg-secondary w-24 ml-4 mt-4 h-full"></div>
        </div>

        <div className="md:pl-3">
          {items && items.map(({title, content},i)=>(
            <div key={i} className="mb-4">
              <h3
                className="font-bold text-2xl text-darker leading-relaxed mb-3"
                dangerouslySetInnerHTML={{ __html: title }}
              >
              </h3>
              <div
                className="text-darker text-xl"
                dangerouslySetInnerHTML={{ __html: content }}
              >
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BlockList.propTypes = {};

export default BlockList;
