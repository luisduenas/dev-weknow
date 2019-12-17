import React, { useState } from "react";
import PropTypes from "prop-types";
import _isEmpty from "lodash/isEmpty";

const ContactForm = ({title}) => {
  const initalState = {
    type: "contact",
    fullName: "",
    email: "",
    company: "",
    message: ""
  };
  const [formData, setFormData] = useState(initalState);
  const handleSetFormData = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <form
      className="mb-5 w-10/12 mx-auto"
      name="contact"
      method="POST"
      action="/thank-you"
      data-netlify-honeypot="bot-field"
      data-netlify="true">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <h3 className="text-center text-4xl mb-4 text-darker">{title}</h3>
      <p className=" leading-tight mb-2 text-center text-2xl font-thin text-darker mb-4">
        Use the form below to provide as much information as possible about your
        project and how we can help you bring it to live.
      </p>
      <input
        className="block bg-gray-200 mb-3 px-3 py-2 text-darker w-full border-darken-1 border"
        id="fullName"
        type="text"
        name="fullName"
        required
        placeholder="Name"
        onChange={handleSetFormData}
        value={formData["fullName"]}
      />
      <input
        className="block bg-gray-200 mb-3 px-3 py-2 text-darker w-full border-darken-1 border"
        id="email"
        type="email"
        name="email"
        required
        placeholder="Email"
        onChange={handleSetFormData}
        value={formData["email"]}
      />
      <input
        className="block bg-gray-200 mb-3 px-3 py-2 text-darker w-full border-darken-1 border"
        id="company"
        type="text"
        name="company"
        required
        placeholder="Company"
        onChange={handleSetFormData}
        value={formData["company"]}
      />
      <textarea
        className="bg-gray-200 mb-3 px-3 py-2 text-darker w-full border-darken-1 border mb-3"
        id="message"
        name="message"
        required
        placeholder="What can you tell us about your needs?"
        rows="6"
        onChange={handleSetFormData}
        value={formData["message"]}
      />
      <button
        type="submit"
        className="border-b-4 bg-secondary hover:bg-gray font-bold px-4 py-3 w-full text-md text-white"
      >
        Contact Us
      </button>
      <p className="text-darker my-3 text-center">Or email us <a className="text-info" href="mailto:yes@weknowinc.com">yes@weknowinc.com</a></p>
    </form>
  );
};

ContactForm.propTypes = {
  title: PropTypes.string,
};

ContactForm.defaultProps = {
  title: "Get expert help",
};

export default ContactForm;
