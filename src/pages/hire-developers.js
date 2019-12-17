import React from 'react';
import PropTypes from 'prop-types';
import { graphql  } from "gatsby"
import { FaChartBar, FaFileAlt, FaUser, FaTrophy } from "react-icons/fa";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Cta from '../components/cta';
import TextBlock from '../components/text-block';
import Contributions from '../components/contributions';
import DownloadForm from '../components/download-form';
const capabilityTemplate = ( {data: {allCapabilities} } ) => {
  const capabilities = allCapabilities.edges
  return (
    <Layout noHero>
      <SEO
        title={`Hire developers`}
        keywords={['weknowinc']}
        description={`Hire developers`}
        url={`${process.env.PROJECT_URL}/hire-developers`}
      />
      <div className="container md:flex flex-wrap mx-auto  py-6 leading-normal px-3 text-2xl font-serif text-darker font-thin">
        <p className="w-full border-l border-secondary h-4 md:h-5 mb-3 md:mb-3" />
        <div className="md:w-1/2 pr-3">
          <div  className={`container mx-auto mb-5 text-2xl text-darker text-left font-serif`} >
            <h2 className="text-4xl md:text-5xl text-secondary mb-3 leading-tight">{`Hire weKnow's talented Developers`}</h2>
            <p>weKnow is a development agency with highly skilled developers, programmers, engineers and coders from around the world. Providing top Onshore / Nearshore talent to help companies scale their development teams.</p>
          </div>
          <Cta link="/contact" left text='READY TO BOOST <span className="font-bold">YOUR TEAM?</span>' color="secondary" />
        </div>
        <div className="md:w-1/2 pl-0 lg:pl-3">
          <DownloadForm />
        </div>
      </div>
      <div className="py-4 bg-lightDark">
        <div className="container mx-auto">
          <h3 className="text-primary text-4xl my-3 text-center">Talent as a service (Taas)</h3>
          <p className="text-xl mb-3 text-darker text-center w-10/12 mx-auto">At weKnow we combine the flexibility and scalability of the outsourcing model with the governance and quality control of robust management. Our partners value the increased productivity, convenience and accelerated delivery they obtain by using our talent.</p>
          <div className="md:flex my-5 flex-wrap p-4 lg:p-0">
            <div className="w-full lg:w-1/2 pr-3">
              <img src="https://weknowinc.com/modules/custom/keeptrack/images/taas/taas-1.jpg" alt=""/>
            </div>
            <div className="lg:w-1/2 pl-3 flex flex-wrap items-center justify-center mt-4 md:mt-0">
              <FaChartBar className="w-2/12 md:w-1/12 h-4 text-4xl text-info"/>
              <div className="w-10/12 md:w-11/12">
              <h4 className="text-primary text-2xl w-10/12">Control & Reports</h4>
              <p className="w-10/12 text-xl text-darker">All our partners have access to our internal Time Tracking tool for real time reporting.</p>
              </div>
              <FaFileAlt className="w-2/12 md:w-1/12 h-4 text-4xl text-info"/>
              <div className="w-10/12 md:w-11/12">
              <h4 className="text-primary text-2xl w-10/12">Contract Flexibility</h4>
              <p className="w-10/12 text-xl text-darker">Get a flexible commitment that adjusts to your needs.</p>
              </div>
              <FaUser className="w-2/12 md:w-1/12 h-4 text-4xl text-info"/>
              <div className="w-10/12 md:w-11/12">
              <h4 className="text-primary text-2xl w-10/12">Account Manager</h4>
              <p className="w-10/12 text-xl text-darker">Dedicated account manager, available any time.</p>
              </div>
              <FaTrophy className="w-2/12 md:w-1/12 h-4 text-4xl text-info"/>
              <div className="w-10/12 md:w-11/12">
              <h4 className="text-primary text-2xl w-10/12">Dedicated Experts</h4>
              <p className="w-10/12 text-xl text-darker">Full-time, scalable team of experts you can trust.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TextBlock centered title="Connect our experts with your project needs">
        {"<p>Get access to a large pool of expert talent across different technologies, ready to be plugged into your organization’s workflow.</p>"}
      </TextBlock>
      <div className="flex flex-wrap container mx-auto flex-wrap my-4 px-4 md:px-0 justify-center items-center">
        {capabilities && capabilities.map((capability)=>(
          <div key={capability.node.id} className="w-full md:w-1/3  text-darker text-3xl text-center px-2">
            <div className="border-lightDark border-2 my-2 py-5">
              {capability.node.name}
            </div>
          </div>
        ))}
      </div>
      <Contributions title="Contributions" text="A list of projects created or co-maintained under our sponsored time program." />
      <Cta link="/let-discuss-your-project" text='<p>READY TO BOOST <span className="font-bold">YOUR TEAM?</span></p>' color="secondary" />
    </Layout>
  );
};

export default capabilityTemplate;

export const pageQuery = graphql`
  query {
    allCapabilities {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`