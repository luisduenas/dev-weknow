import React from 'react';
import { graphql } from "gatsby"
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleHero from '../components/title-hero';

const PostMeta = ({ text }) => (
    <div className="flex text-2xl font-bold text-white justify-center items-center">
        {text}
    </div>
);

const Content = ({ title, children }) => (
    <div className="container mx-auto px-4 my-5 text-2xl text-darker text-left font-serif w-full lg:w-8/12">
        <h2 className="text-3xl font-bold text-primary mb-2 leading-tight">{title}</h2>
        <div className="career font-thin" dangerouslySetInnerHTML={{ __html: children }}>
        </div>
    </div>
);


const separator = {
    backgroundColor: "#288DC1",
    display: "inline-block",
    height: "3px",
    width: "105px",
    marginTop: "30px"
};

const CareerTemplate = props => {
    const { data: { career } } = props;
    return (
        <Layout>
            <SEO
                title={career.title}
                keywords={[`drupal`, `weknowinc`]}
            />
            <TitleHero
                title={career.title}
                gradient="#AF1F45"
                image="https://weknowinc.com/sites/default/files/2017-11/approach-hero.png"
                postMeta=
                {
                    <PostMeta text={career.field_post_tittle} />
                }
            />
            <section>
                <div style={{ background: "#f6f7f8", alignSelf: 'stretch', width: "100%" }}>
                    <div className="flex flex-wrap container mx-auto">
                        <div className="flex flex-wrap" >
                            <Content title="RESPONSIBILITIES">
                                {career.field_responsibilities ? career.field_responsibilities.processed : ``}
                            </Content>

                            <div
                                className="p-4 w-full lg:w-4/12"
                                style={{
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: "white",
                                    margin: "auto",
                                    maxWidth: "350px",
                                }}>
                                <div>
                                    <h1 className="text-1xl text-center font-thin font-serif uppercase mb-3" style={{ color: "#644B78", fontSize: "22px" }}>
                                        Are you a good fit?
                                    </h1>
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <a href="#apply-job"
                                                className="border-b-4 bg-warning px-3 py-2 w-full text-md text-white uppercase mb-3 text-center">
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                    <div style={{ color: "#288DC1" }}>
                                        <Link to="/our-benefits" rel="nofollow" target="_blank">Learn about about our philosophy, culture and all the benefits weKnow provides.</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex flex-wrap container mx-auto" style={{ background: "white" }}>
                    <Content fullWidth title="WHAT THE POSITION INVOLVES">
                        {career.field_what_the_position_involves ? career.field_what_the_position_involves.processed : ``}
                    </Content>
                </div>
            </section>

            <separator>
                <div className="flex flex-wrap container mx-auto" style={{ background: "white" }}>
                    <div style={separator} className="mx-4 mb-0"></div>
                </div>
            </separator>

            <section>
                <div className="flex flex-wrap container mx-auto" style={{ background: "white" }}>
                    <Content fullWidth title="YOU SHOULD WORK WITH US, IF">
                        {career.field_you_should_work_with_us ? career.field_you_should_work_with_us.processed : ``}
                    </Content>
                </div>
            </section>


            <separator>
                <div className="flex flex-wrap container mx-auto" style={{ background: "white" }}>
                    <div style={separator} className="mx-4 mb-0"></div>
                </div>
            </separator>


            <section>
                <div className="flex flex-wrap container mx-auto" style={{ background: "white" }}>
                    <Content fullWidth title="QUALIFICATIONS">
                        {career.field_qualifications ? career.field_qualifications.processed : ``}
                    </Content>
                </div>
            </section>

            <section>
                <div className="p-5 font-serif"
                    style={{
                        background: 'linear-gradient(-45deg,#AF1F45 0%,#644B78 100%)',
                    }}>
                    <div className="container mx-auto text-white">
                        <div className="text-2xl text-center font-thin">
                            <p>WEKNOW IS AN EQUAL OPPORTUNITY EMPLOYER.</p>
                            <p> WE CELEBRATE DIVERSITY AND ARE COMMITTED TO CREATING AN INCLUSIVE ENVIRONMENT FOR ALL EMPLOYEES.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div style={{ background: "#f6f7f8", alignSelf: 'stretch', width: "100%" }}>
                    <div className="container mx-auto p-4">
                        <div className="flex justify-center items-center font-serif">
                            <h1 id="apply-job" className="text-3xl font-bold text-primary mb-2 leading-tight uppercase">Interested? apply now!</h1>
                        </div>
                        <div className="flex justify-center items-center font-serif">
                            <form
                                className="w-full my-5" 
                                style={{ maxWidth: "600px" }}
                                name="career"
                                method="POST"
                                action="/thank-you"
                                data-netlify-honeypot="bot-field"
                                data-netlify="true">
                                <input type="hidden" name="bot-field" />
                                <input type="hidden" name="form-name" value="career" />
                                <input type="hidden" name="carrer-title" value={career.title} />
                                <div className="w-full mb-2">
                                    <label className="block tracking-wide text-gray-700 text-md font-thin mb-2" for="full-name">
                                        Full name
                                    </label>
                                    <input required className="appearance-none block w-full bg-white text-xl text-black rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="full-name" name="full-name" type="text" />
                                </div>
                                <div className="w-full mb-2">
                                    <label className="block tracking-wide text-gray-700 text-md font-thin mb-2" for="email">
                                        Email
                                    </label>
                                    <input required className="appearance-none block w-full bg-white text-xl text-black rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" name="email" type="text" />
                                </div>
                                <div className="w-full mb-2">
                                    <label className="block tracking-wide text-gray-700 text-md font-thin mb-2" for="phone-number">
                                        Phone Number
                                    </label>
                                    <input className="appearance-none block w-full bg-white text-xl text-black rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone-number" name="phone-number" type="text" />
                                </div>

                                <div className="w-full mb-2">
                                    <label className="block tracking-wide text-gray-700 text-md font-thin mb-2" for="english-level">
                                        English level
                                    </label>
                                    <div className="relative">
                                        <select className="block appearance-none w-full bg-white border border-gray-200 text-black py-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xl" id="english-level" name="english-level">
                                            <option>--</option>
                                            <option>Beginner</option>
                                            <option>Intermediate</option>
                                            <option>Advanced</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full mb-2">
                                    <label className="block tracking-wide text-gray-700 text-md font-thin mb-2" for="english-level">
                                        Country of residence
                                    </label>
                                    <div className="relative">
                                        <select className="block appearance-none w-full bg-white border border-gray-200 text-black py-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xl" id="country" name="country">
                                            <option value="Afghanistan">Afghanistan</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antarctica">Antarctica</option>
                                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Ascension Island">Ascension Island</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bermuda">Bermuda</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia">Bolivia</option>
                                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                            <option value="Botswana">Botswana</option>
                                            <option value="Bouvet Island">Bouvet Island</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                            <option value="British Virgin Islands">British Virgin Islands</option>
                                            <option value="Brunei">Brunei</option>
                                            <option value="Bulgaria">Bulgaria</option>
                                            <option value="Burkina Faso">Burkina Faso</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Cambodia">Cambodia</option>
                                            <option value="Cameroon">Cameroon</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Canary Islands">Canary Islands</option>
                                            <option value="Cape Verde">Cape Verde</option>
                                            <option value="Caribbean Netherlands">Caribbean Netherlands</option>
                                            <option value="Cayman Islands">Cayman Islands</option>
                                            <option value="Central African Republic">Central African Republic</option>
                                            <option value="Ceuta and Melilla">Ceuta and Melilla</option>
                                            <option value="Chad">Chad</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Christmas Island">Christmas Island</option>
                                            <option value="Clipperton Island">Clipperton Island</option>
                                            <option value="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Comoros">Comoros</option>
                                            <option value="Congo - Brazzaville">Congo - Brazzaville</option>
                                            <option value="Congo - Kinshasa">Congo - Kinshasa</option>
                                            <option value="Cook Islands">Cook Islands</option>
                                            <option value="Costa Rica">Costa Rica</option>
                                            <option value="Croatia">Croatia</option>
                                            <option value="Cuba">Cuba</option>
                                            <option value="Curaçao">Curaçao</option>
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Czech Republic">Czech Republic</option>
                                            <option value="Côte d’Ivoire">Côte d’Ivoire</option>
                                            <option value="Denmark">Denmark</option>
                                            <option value="Diego Garcia">Diego Garcia</option>
                                            <option value="Djibouti">Djibouti</option>
                                            <option value="Dominica">Dominica</option>
                                            <option value="Dominican Republic">Dominican Republic</option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                            <option value="Eritrea">Eritrea</option>
                                            <option value="Estonia">Estonia</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Falkland Islands">Falkland Islands</option>
                                            <option value="Faroe Islands">Faroe Islands</option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">Finland</option>
                                            <option value="France">France</option>
                                            <option value="French Guiana">French Guiana</option>
                                            <option value="French Polynesia">French Polynesia</option>
                                            <option value="French Southern Territories">French Southern Territories</option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">Gambia</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Gibraltar">Gibraltar</option>
                                            <option value="Greece">Greece</option>
                                            <option value="Greenland">Greenland</option>
                                            <option value="Grenada">Grenada</option>
                                            <option value="Guadeloupe">Guadeloupe</option>
                                            <option value="Guam">Guam</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Guernsey">Guernsey</option>
                                            <option value="Guinea">Guinea</option>
                                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Hong Kong SAR China">Hong Kong SAR China</option>
                                            <option value="Hungary">Hungary</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="India">India</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="Iran">Iran</option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Isle of Man">Isle of Man</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jersey">Jersey</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="Kosovo">Kosovo</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Laos">Laos</option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Lebanon">Lebanon</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liberia">Liberia</option>
                                            <option value="Libya">Libya</option>
                                            <option value="Liechtenstein">Liechtenstein</option>
                                            <option value="Lithuania">Lithuania</option>
                                            <option value="Luxembourg">Luxembourg</option>
                                            <option value="Macau SAR China">Macau SAR China</option>
                                            <option value="Macedonia">Macedonia</option>
                                            <option value="Madagascar">Madagascar</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Mali">Mali</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Marshall Islands">Marshall Islands</option>
                                            <option value="Martinique">Martinique</option>
                                            <option value="Mauritania">Mauritania</option>
                                            <option value="Mauritius">Mauritius</option>
                                            <option value="Mayotte">Mayotte</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Micronesia">Micronesia</option>
                                            <option value="Moldova">Moldova</option>
                                            <option value="Monaco">Monaco</option>
                                            <option value="Mongolia">Mongolia</option>
                                            <option value="Montenegro">Montenegro</option>
                                            <option value="Montserrat">Montserrat</option>
                                            <option value="Morocco">Morocco</option>
                                            <option value="Mozambique">Mozambique</option>
                                            <option value="Myanmar [Burma]">Myanmar [Burma]</option>
                                            <option value="Namibia">Namibia</option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Netherlands">Netherlands</option>
                                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                                            <option value="New Caledonia">New Caledonia</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="Nicaragua">Nicaragua</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="Niue">Niue</option>
                                            <option value="Norfolk Island">Norfolk Island</option>
                                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                            <option value="North Korea">North Korea</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Outlying Oceania">Outlying Oceania</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Palau">Palau</option>
                                            <option value="Palestinian Territories">Palestinian Territories</option>
                                            <option value="Panama">Panama</option>
                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="Peru">Peru</option>
                                            <option value="Philippines">Philippines</option>
                                            <option value="Pitcairn Islands">Pitcairn Islands</option>
                                            <option value="Poland">Poland</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Puerto Rico">Puerto Rico</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Romania">Romania</option>
                                            <option value="Russia">Russia</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="Réunion">Réunion</option>
                                            <option value="Saint Barthélemy">Saint Barthélemy</option>
                                            <option value="Saint Helena">Saint Helena</option>
                                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                            <option value="Saint Lucia">Saint Lucia</option>
                                            <option value="Saint Martin">Saint Martin</option>
                                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                            <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="San Marino">San Marino</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Senegal">Senegal</option>
                                            <option value="Serbia">Serbia</option>
                                            <option value="Seychelles">Seychelles</option>
                                            <option value="Sierra Leone">Sierra Leone</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Sint Maarten">Sint Maarten</option>
                                            <option value="Slovakia">Slovakia</option>
                                            <option value="Slovenia">Slovenia</option>
                                            <option value="Solomon Islands">Solomon Islands</option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                            <option value="South Korea">South Korea</option>
                                            <option value="South Sudan">South Sudan</option>
                                            <option value="Spain">Spain</option>
                                            <option value="Sri Lanka">Sri Lanka</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Suriname">Suriname</option>
                                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                            <option value="Swaziland">Swaziland</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Syria">Syria</option>
                                            <option value="São Tomé and Príncipe">São Tomé and Príncipe</option>
                                            <option value="Taiwan">Taiwan</option>
                                            <option value="Tajikistan">Tajikistan</option>
                                            <option value="Tanzania">Tanzania</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Timor-Leste">Timor-Leste</option>
                                            <option value="Togo">Togo</option>
                                            <option value="Tokelau">Tokelau</option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                            <option value="Tristan da Cunha">Tristan da Cunha</option>
                                            <option value="Tunisia">Tunisia</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Turkmenistan">Turkmenistan</option>
                                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                            <option value="Tuvalu">Tuvalu</option>
                                            <option value="U.S. Outlying Islands">U.S. Outlying Islands</option>
                                            <option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="Ukraine">Ukraine</option>
                                            <option value="United Arab Emirates">United Arab Emirates</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="United States">United States</option>
                                            <option value="Uruguay">Uruguay</option>
                                            <option value="Uzbekistan">Uzbekistan</option>
                                            <option value="Vanuatu">Vanuatu</option>
                                            <option value="Vatican City">Vatican City</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Vietnam">Vietnam</option>
                                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                                            <option value="Western Sahara">Western Sahara</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                            <option value="Åland Islands">Åland Islands</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full mb-2">
                                    <label className="block tracking-wide text-gray-700 text-md font-thin mb-2" for="phone-number">
                                        Attach your resume
                                    </label>
                                    <input required className="appearance-none block w-full bg-white text-xl text-black rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="resume" name="resume" type="file" />
                                </div>

                                <div className="w-full mb-2">
                                    <label className="block tracking-wide text-gray-700 text-md font-thin mb-2" for="phone-number">
                                        Include cover letter
                                    </label>
                                    <input className="appearance-none block w-full bg-white text-xl text-black rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="cover" name="cover" type="file" />
                                </div>

                                <button className="border-b-4 bg-warning px-3 py-2 w-full text-2xl text-white uppercase mb-3 mt-5 font-bold">
                                    Apply
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

CareerTemplate.propTypes = {

};

export default CareerTemplate;

export const pageQuery = graphql`
  query career($slug: String!) {
    career: nodeCareer (path: {alias: {eq: $slug}}){
        title
        path {
          alias
        }
        field_post_tittle
        field_learn_link {
          title
        }
        field_bottom_text {
          processed
        }
        field_overlays_color
        field_qualifications {
          processed
        }
        field_responsibilities {
          processed
        }
        field_you_should_work_with_us {
          processed
        }
        field_what_the_position_involves {
          processed
        }
        
      }
  }
`