import React, { useState } from 'react';
import Swal from 'sweetalert2';

function ContactPage() {

   const [countryCode, setCountryCode] = useState('+91'); //added country code for better phone check
   const handleSubmit = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const phoneInput = form.phone;
    const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Remove non-numeric characters
    
    // Check if all required fields are filled
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Validate phone number length with country code length
    if (phoneNumber.length < 4 || phoneNumber.length > 15) {
      Swal.fire({
        title: 'Error!',
        text: 'Phone number must be 10 digits.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    // Display success message on proper submission
    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      // Clear the form fields after showing the alert
      form.reset();
    });
  };

  const handlePhoneInput = (event) => {
    const input = event.target;
    const formattedValue = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (formattedValue.length > 15) {
      input.value = formattedValue.slice(0, 15); // Limit to 15 digits
    } else {
      input.value = formattedValue;
    }
  };

  return (
    <div className="container mx-auto py-5 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center lg:text-left mt-[12vh]">Contact us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-100 p-4 transition-all duration-300 hover:bg-gray-200">
              <div className="flex items-center mb-2">
                <i className="fas fa-envelope text-xl mr-2"></i>
                <span className="text-lg font-semibold">Email</span>
              </div>
              <span>vigybag@gmail.com</span>
            </div>
            <div className="bg-gray-100 p-4 transition-all duration-300 hover:bg-gray-200">
              <div className="flex items-center mb-2">
                <i className="fas fa-phone text-xl mr-2"></i>
                <span className="text-lg font-semibold">Phone</span>
              </div>
              <span>+91 1234567890</span>
            </div>
            </div>
          <div className="bg-gray-100 p-4 mb-4 transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center mb-2">
              <i className="fas fa-location-pin text-xl mr-2"></i>
              <span className="text-lg font-semibold">Office location</span>
            </div>
            <span>Kanpur, Uttar Pradesh 208025</span>
            </div>
          <div className="w-full h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14285.080107370284!2d80.28175744899262!3d26.47924928052742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3811bdf58679%3A0x9518b04e61143882!2sKanpur%2C%20Uttar%20Pradesh%20208025!5e0!3m2!1sen!2sin!4v1721622007177!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 shadow-md"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Leave a message</h2>
          <form onSubmit={handleSubmit}> {/*handling submission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="fname" className="block mb-2">First Name</label>
                <input type="text" id="fname" className="w-full p-2 border rounded" placeholder="Enter your first name" minLength={3} required pattern="[a-zA-Z ]+"
              onInvalid={(e) => {
                e.target.setCustomValidity('Numbers and Symbols are not allowed.');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}/>
              </div>
              <div>
                <label htmlFor="lname" className="block mb-2">Last Name</label>
                <input type="text" id="lname" className="w-full p-2 border rounded" placeholder="Enter your last name" minLength={3} required pattern="[a-zA-Z ]+"
              onInvalid={(e) => {
                e.target.setCustomValidity('Numbers and Symbols are not allowed.');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}/>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" placeholder="name@example.com" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2">Phone</label>
                <select
                  id="countryCode"
                  name="countryCode"
                  className="p-2 border rounded mr-2"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  required
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+33">+33 (France)</option>
                  <option value="+49">+49 (Germany)</option>
                  {/* Add more country codes as needed */}
                </select>
                <input type="tel" 
                id="phone"
                name="phone" 
                className=" p-2 border rounded" 
                placeholder="+91888888888" 
                pattern="\d{10}" 
                minlength={4} 
                maxLength={15}
                required onInput={handlePhoneInput}
                title="Phone number must be between 4 and 15 digits"
                />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block mb-2">Country</label>
              <select id="country" className="w-full p-2 border rounded" required> {/*added list of all countries */}
                <option value="IN">India</option>
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BR">Brazil</option>
                <option value="BN">Brunei</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="CV">Cabo Verde</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo, Republic of the</option>
                <option value="CD">Congo, Democratic Republic of the</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Côte d'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="SZ">Eswatini</option>
                <option value="ET">Ethiopia</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GR">Greece</option>
                <option value="GD">Grenada</option>
                <option value="GT">Guatemala</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HN">Honduras</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">Korea, North</option>
                <option value="KR">Korea, South</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Laos</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia</option>
                <option value="MD">Moldova</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="MK">North Macedonia</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="QA">Qatar</option>
                <option value="RE">Réunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russia</option>
                <option value="RW">Rwanda</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syria</option>
                <option value="TW">Taiwan</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VA">Vatican City</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Vietnam</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" name="message" rows="3" className="w-full p-2 border rounded" placeholder='Enter your issues you face' minlength="10" required></textarea> {/*fixed min length to 10 char */}
            </div>
            <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 mb-[5vh]">Send Message</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;