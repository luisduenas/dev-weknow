import React, { useState } from "react";
import PropTypes from "prop-types";
import _isEmpty from "lodash/isEmpty";

const DownloadForm = props => {
  const initalState = {
    type: "download",
    email: "",
    company: "",
  };
  const [formData, setFormData] = useState(initalState);
  const handleSetFormData = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <form
      className="mb-5 w-10/12 mx-auto"
      name="download"
      method="POST"
      action="/thank-you"
      data-netlify-honeypot="bot-field"
      data-netlify="true">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="download" />
      <h3 className="text-center text-secondary text-2xl mt-1 mb-3">Download Success Case</h3>
      <p className="text-lg text-center mb-2">
      Create digital experiences with amazing presence engaging customers immediately
      </p>
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
      <button
        type="submit"
        className="border-b-4 bg-primary hover:bg-gray font-bold px-3 py-2 w-full text-md text-white"
      >
        Unlock our talent
      </button>
    </form>
  );
};

DownloadForm.propTypes = {};

export default DownloadForm;
