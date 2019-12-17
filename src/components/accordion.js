import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = ({title, items}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mx-auto p-4 lg:px-6 lg:py-4 font-serif">
      {title&&<h3 className="text-primary text-4xl text-center font-normal my-3">{title}</h3>}
      {items&&items.map((item, index)=>(
        <div className="mx-auto w-full lg:w-11/12" key={index}>
          <h4 className="text-primary cursor-pointer text-2xl font-thin" onClick={(e)=>setActiveIndex(index)}>{item.title} {activeIndex===index?<FaMinus className="text-2xl float-right" />:<FaPlus className="text-2xl float-right" />}</h4>
          <div className={`text-lg text-darker py-3 font-thin ${activeIndex===index?'block':'hidden'}`} dangerouslySetInnerHTML={{ __html: item.content }}></div>
        </div>
      ))}
    </div>
  );
};

Accordion.defaultProps = {
  title: "Learn more about why weKnow",
  items: [
    {
      title: "Why weKnow?",
      content: `<p>Our people-centric approach allows us to identify the talent that is best suited for our clients’ challenging projects. We have a thorough selection process that evaluates technical skills, soft skills, and communication, in order to guarantee that our talent delivers as expected.</p>`
    },
    {
      title: "Where is billing coming from?",
      content: `<p>Our business model has the flexibility to adapt to your needs. We can manage billing/payment through the US or Latin America.</p>`
    },
    {
      title: "What if I only need a few hours on a specific task?",
      content: `<p>A project is never too small for us. We understand that sometimes you only need help with an specific task. In that case, we coordinate internally to have one of our devs work on the task alongside you or your team.</p>`
    },
    {
      title: "What if I want to hand over an entire project?",
      content: `<p>At weKnow we have the capability of taking on an entire project, going through the planning process, design/UX and moving to development and launch.</p>`
    },
    {
      title:
        "How much time does wK need in advance before assigning a resource?",
      content: `<p>The nature of our industry means that our availability can change overnight; however, the ideal scenario would be to let us know at least 2 weeks in advance, so we can coordinate internally and provide the best candidates for your needs.</p>`
    },
    {
      title: "Can wK help us estimate a project?",
      content: `<p>We can gladly help you not only with project estimation,but also by asking the right questions to ensure that all aspects of the SOW are specified before commiting on a fixed amount of hours.</p>`
    },
    {
      title: "How can you guarantee great performance of your team?",
      content: `<p>That's a great question, and we make sure our developers are highly proficient by recruiting exclusively the best talent in Latin America.</p>
      <p>Additionally, Anexus / weKnow are both leaders in the region. By providing trainings as well as organizing/sponsoring events, we have been able to attract great talent that is ready and motivated to take on the next challenge.</p>`
    },
    {
      title: "How does weKnow keep its developers motivated?",
      content: `<p>Our hybrid model allows us to provide our devs with the tools to keep them motivated. Some of the benefits we provide across our organization include: Paid trainings/certifications, English lessons, Work from anywhere, Travel to community events, Personal development bonus, Paid holidays and Sick days.</p>`
    }
  ]
}

Accordion.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

export default Accordion;