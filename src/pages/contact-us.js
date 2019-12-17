import React from "react";
import { graphql  } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from '../components/contact-form';

const  ContactUs = (props) =>  {

  return (
    <Layout noHero={true}>
      <SEO
        title={`Contact Us`}
        keywords={[`drupal`, `staff augmentation`, `offshore`, 'weknowinc']}
        description={'Contact Us'}
        url={`${process.env.PROJECT_URL}/contact-us`}
      />

      <div className="container md:flex flex-wrap mx-auto  py-6 leading-normal px-3 text-2xl font-serif text-darker font-thin">
        <ContactForm />
      </div>

    </Layout>
  );
}

export default ContactUs;
