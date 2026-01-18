import React, { useEffect } from "react";
import "./privacy.css";

// Lightweight loader for html2pdf.js via CDN to avoid bundler resolution issues
const loadHtml2Pdf = () => {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && window.html2pdf) {
      resolve(window.html2pdf);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/html2pdf.js@0.12.0/dist/html2pdf.bundle.min.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => resolve(window.html2pdf);
    script.onerror = () => reject(new Error("Failed to load html2pdf.js"));
    document.body.appendChild(script);
  });
};

const Privacy = () => {
  useEffect(() => {
    document.title = "VigyBag | Privacy Policy";
  }, []);


  const generatePdf = async () => {
    const element = document.getElementById("pdf-content");
    if (!element) return;

    const html2pdf = await loadHtml2Pdf();

    const opt = {
      margin: [10, 20, 10, 20],
      filename: "privacy_policy.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        logging: false,
        letterRendering: true,
        useCORS: true,
      },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
      pagebreak: {
        mode: ["css", "legacy"],
        before: ".queries-fix",
      },
    };
    html2pdf().set(opt).from(element).save();
  };



  return (
    <div className="privacy-policy">
      <div className="containerprivacy">
        <main id="pdf-content" style={{ lineHeight: "1.4" }}>
          <div className="head" style={{ textAlign: "center", marginBottom: "8px" }}>
            <h1 style={{
              margin: "0",
              fontWeight: "bold",   
              color: "forestgreen"
            }}>
              VigyBag Privacy Policy
            </h1>
          </div>
          <section>
            <div className="Lastupdate" style={{ marginBottom: "6px" }}>
              Last Updated: September 5, 2025
            </div>
            <p>
              We value the trust you place in us and recognize the importance of
              secure transactions and information privacy. This Privacy Policy
              describes how VigyBag Pvt. Ltd. and its affiliates
              (collectively “VigyBag, we, our, us”) collect, use, share, or
              otherwise process your personal data through the VigyBag website{" "}
              <a className="a" href="https://www.vigybag.com/" target="_blank">
                https://www.vigybag.com/
              </a>
              , its mobile application, and m-site (hereinafter referred to as
              the “Platform”). While you can browse sections of the Platform
              without sharing any information with us, please note that we do
              not offer any product or service under this Platform outside{" "}
              <b>India</b> and your personal data will primarily be stored and
              processed in India. By visiting this Platform, providing your
              information, or availing of our product/service, you expressly
              agree to be bound by the terms and conditions of this Privacy
              Policy, the Terms of Use, and the applicable service/product terms
              and conditions, and agree to be governed by the laws of{" "}
              <b>India</b>, including but not limited to the laws applicable to
              data protection and privacy. If you do not agree, please do not
              use or access our Platform.
            </p>
          </section>
          <section className="keep-together">
            <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>Collection of Your Information </h2>
            <p>
              When you use our Platform, we collect and store your information
              which is provided by you from time to time. Once you give us your
              personal data, you are not anonymous to us. Where possible, we
              indicate which fields are required and which fields are optional.
              You always have the option to not provide data by choosing not to
              use a particular service, product, or feature on the Platform
            </p>

            <p>
              We may track your buying behavior, preferences, and other
              information that you choose to provide on our Platform. We use
              this information to do internal research on our users'
              demographics, interests, and behavior to better understand,
              protect, and serve our users. This information is compiled and
              analyzed on an aggregated basis. This information may include the
              URL that you just came from (whether this URL is on our Platform
              or not), which URL you next go to (whether this URL is on our
              Platform or not), your computer browser information, and your IP
              address.
            </p>
            <p>
              We may collect personal data (such as email address, delivery
              address, name, phone number, credit card/debit card, and other
              payment instrument details) from you when you set up an account or
              transact with us or participate in any event or contest. While you
              can browse some sections of our Platform without being a
              registered member, certain activities (such as placing an order or
              consuming our online content or services) do require registration.
              We use your contact information to send you offers based on your
              previous orders and your interests.
            </p>
            <p>
              If you choose to post messages on our message boards, chat rooms,
              or other message areas, or leave feedback on the Platform or the
              social media handles maintained by us, or if you use voice
              commands or virtual try-and-buy or similar features to shop on the
              Platform, we will collect that information you provide to us. We
              retain this information as necessary to resolve disputes, provide
              customer support, troubleshoot problems, or for internal research
              and analysis as permitted by law.
            </p>
            <p>
              If you send us personal correspondence, such as emails or letters,
              or if other users or third parties send us correspondence about
              your activities or postings on the Platform, we may collect such
              information into a file specific to you.
            </p>
          </section>
          <section className="keep-together">
            <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>Use of Demographic / Profile Data / Your Information </h2>
            <p>
              We use your personal data to take and fulfill orders, deliver
              products and services, process payments, and communicate with you
              about orders, products, and services, and promotional offers. To
              the extent we use your personal data to market to you, we will
              provide you the ability to opt out of such uses. We use your
              personal data to assist sellers and business partners in handling
              and fulfilling orders; enhancing customer experience; resolving
              disputes; troubleshooting problems; helping promote a safe
              service; collecting money; measuring consumer interest in our
              products and services; informing you about online and offline
              offers, products, services, and updates; customizing and enhancing
              your experience; reporting to regulatory authorities wherever
              required; detecting and protecting us against error, fraud, and
              other criminal activity; enforcing our terms and conditions; and
              as otherwise described to you at the time of collection of
              information.
            </p>
            <p>
              With your consent, we may have access to your SMS, instant
              messages, contacts in your directory, location, camera, photo
              gallery, and device information. We may also request you to
              provide your PAN, credit information report (from credit
              agencies), GST Number, Government-issued ID cards/number, and
              Know-Your-Customer (KYC) details to:
            </p>
            <ul style={{ marginLeft: "20px" }}>
              <li> Check your eligibility for certain products and services like insurance, credit, and payment products;</li>
              <li> Issue GST invoice for the products and services purchased for your business requirements;</li>
              <li> Enhance your experience on the Platform and provide you access to the products and services...</li>
            </ul>

            <p>
              In our efforts to continually improve our product and service
              offerings, we and our affiliates collect and analyze demographic
              and profile data about our users' activity on our Platform. We
              identify and use your IP address to help diagnose problems with
              our server and to administer our Platform. Your IP address is also
              used to help identify you and to gather broad demographic
              information.
            </p>
            <p>
              We will occasionally ask you to participate in optional surveys
              conducted either by us or through a third-party market research
              agency. These surveys may ask you for personal data, contact
              information, date of birth, demographic information (like zip
              code, age, or income level), attributes such as your interests,
              household or lifestyle information, your purchasing behavior or
              history, preferences, and other such information that you may
              choose to provide. The surveys may involve the collection of voice
              data or video recordings, the participation of which would purely
              be voluntary in nature. We use this data to tailor your experience
              at our Platform, providing you with content that we think you
              might be interested in, and to display content according to your
              preferences.
            </p>
          </section>
          <section className="keep-together">
            <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>Cookies</h2>
            <p>
              We use data collection devices such as "cookies" on certain pages
              of the Platform to help analyze our web page flow, measure
              promotional effectiveness, and promote trust and safety. "Cookies"
              are small files placed on your hard drive that assist us in
              providing our services.
            </p>
            <p>
              Cookies do not contain any of your personal data. We offer certain
              features that are only available through the use of a "cookie". We
              also use cookies to allow you to enter your password less
              frequently during a session. Cookies can also help us provide
              information that is targeted to your interests. Most cookies are
              "session cookies," meaning that they are automatically deleted
              from your hard drive at the end of a session. You are always free
              to decline/delete our cookies if your browser permits, although in
              that case, you may not be able to use certain features on the
              Platform and you may be required to re-enter your password more
              frequently during a session. Additionally, you may encounter
              "cookies" or other similar devices on certain pages of the
              Platform that are placed by third parties. We do not control the
              use of cookies by third parties. We use cookies from third-party
              partners such as Google Analytics for marketing and analytical
              purposes. Google Analytics helps us understand how our customers
              use the site. You can read more about how Google uses your
              personal data here: Google Privacy Policy. You can opt-out of
              Google Analytics here: Google Analytics Opt-out. You can also
              control the use of cookies at the individual browser level, but if
              you choose to disable cookies, it may limit your use of certain
              features or functions on the services.
            </p>
          </section>
          <section className="keep-together">
            <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>Sharing of Personal Data</h2>
            <p>
              We may share personal data internally within VigyBag group
              companies and third parties, including Credit Bureaus and business
              partners, for purposes of providing products and services offered
              by them. These entities and affiliates may share such information
              with their affiliates, business partners, and other third parties
              for the purpose of conducting the required checks, namely for the
              purpose of credit underwriting, providing you their products and
              services, and may market to you as a result of such sharing unless
              you explicitly opt out.
            </p>
            <p>
              We may disclose your personal data to third parties, such as
              sellers and business partners. This disclosure may be required for
              us to provide you access to our products and services; for
              fulfillment of your orders; for enhancing your experience; for
              providing feedback on products; to collect payments from you; to
              comply with our legal obligations; to conduct market research or
              surveys; to enforce our Terms of Use; to facilitate our marketing
              and advertising activities; to analyze data; for customer service
              assistance; to prevent, detect, mitigate, and investigate
              fraudulent or illegal activities related to our products and
              services. We may disclose personal data if required to do so by
              law or in the good faith belief that such disclosure is reasonably
              necessary to respond to subpoenas, court orders, or other legal
              processes. We may disclose personal data to law enforcement
              agencies, third party rights owners, or others in the good faith
              belief that such disclosure is reasonably necessary to enforce our
              Terms of Use or Privacy Policy; respond to claims that an
              advertisement, posting, or other content violates the rights of a
              third party; or protect the rights, property, or personal safety
              of our users or the general public.
            </p>
            <p>
              We and our affiliates will share/sell some or all of your personal
              data with another business entity should we (or our assets) plan
              to merge with, or be acquired by that business entity, or undergo
              reorganization, amalgamation, or restructuring of business. Should
              such a transaction occur, that another business entity (or the new
              combined entity) will be required to follow this Privacy Policy
              with respect to your personal data.
            </p>
          </section>
          <section className="keep-together">
            <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>Links to Other Sites</h2>
            <p>
              Our Platform may provide links to other websites or applications
              that may collect personal data about you, and you will be governed
              by their privacy policies. VigyBag shall not be responsible for
              the privacy practices or the content of their privacy policies,
              and we request you to read their privacy policies prior to
              disclosing any information.
            </p>
          </section>
          <section className="keep-together">
            <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>Security Precautions</h2>
            <p>
              We maintain reasonable physical, electronic, and procedural
              safeguards to protect your personal data from unauthorized access
              or disclosure. Whenever you access your account information, we
              offer the use of a secure server. Once your data is in our
              possession, we adhere to reasonable security guidelines,
              protecting it against unauthorized access.
            </p>
          </section>
          <section className="keep-together">
            <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>Your Consent</h2>
            <p>
              By using the Platform and/or by providing your information, yous
              consent to the collection and use of the information you disclose
              on the Platform in accordance with this Privacy Policy, including
              but not limited to your consent for sharing your information as
              per this privacy policy.
            </p>
            <p>
              If we decide to change our Privacy Policy, we will post those
              changes on this page so that you are always aware of what
              information we collect, how we use it, and under what
              circumstances we disclose it.
            </p>
          </section>
          <section className="keep-together">
            <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>Grievance Officer</h2>
            <p>
              In accordance with the Information Technology Act, 2000 and the
              rules made thereunder, the name and contact details of the
              Grievance Officer are provided below:
              <p>In accordance with the Information Technology Act, 2000 and the rules made thereunder, the name and contact details of the Grievance Officer are provided below:</p>
              <ul style={{ marginLeft: "20px", listStyleType: "none" }}>
                <li><b>Name:</b> Vivek Prajapati</li>
                <li><b>Email:</b> <a className="a" href="mailto:grievanceofficer@vigybag.com" target="_blank">grievanceofficer@vigybag.com</a></li>
                <li><b>Time:</b> Mon - Fri (9:00 - 18:00)</li>
                <li><b>Address:</b> Kanpur, Uttar Pradesh</li>
              </ul>
            </p>
          </section>
          <div
            className="queries-fix"
            style={{
              pageBreakInside: "avoid",
              breakInside: "avoid",
              marginBottom: "20px",   // extra space at bottom
              paddingBottom: "20px",  // ensures last line not cut
            }}
          >
            <h2
              style={{
                color: "#4e6d2e",
                fontSize: "1.5rem",
                fontWeight: 550,
                marginBottom: "6px"
              }}
            >
              Queries
            </h2>
            <p style={{ marginTop: "4px", marginBottom: "0px" }}>
              If you have a question, issue, complaint, or feedback in relation
              to the processing of your personal data or this Privacy Policy,
              you may reach out to our data protection officer at{" "}
              <a
                className="a"
                href="mailto:grievanceofficer@vigybag.com"
                target="_blank"
              >
                grievanceofficer@vigybag.com
              </a>
            </p>
          </div>


        </main>
        <button onClick={generatePdf} style={{
          color: '#4CAF50',
          fontSize: '20px',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          display: 'block',
          margin: '0 auto'
        }} >Download a copy of this Privacy Policy(PDF)</button>

      </div>
    </div>
  );
};

export default Privacy;
