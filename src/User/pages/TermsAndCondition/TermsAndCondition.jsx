import React, { useEffect } from "react";
import "./terms.css";

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "VigyBag | Terms and Conditions";
  }, []);

  return (
    <div className="privacy-policy">
      <div className="containerprivacy">
        <h1
          className="h1"
          style={{ marginTop: "8px", marginBottom: "20px", color: "forestgreen" }}>
          Terms and Conditions
        </h1>

        <div className="Lastupdate">
          Last updated: 5 September 2025
        </div>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>Introduction</h2>
        <p>
          Welcome to <strong>VigyBag</strong>. VigyBag Pvt. Ltd. (“VigyBag”, “Company”, “we”, “our”, or “us”) operates as a digital-first marketplace committed to delivering products across a wide range of categories including lifestyle, consumer goods, and household essentials. Established with the objective of offering customers a seamless, transparent, and reliable shopping experience, VigyBag provides its services through its official website, mobile application, and related digital platforms (collectively referred to as the “Platform”).
        </p>
        <p>
          These Terms and Conditions (“Terms”) constitute a legally binding agreement between you, the user of the Platform (“you” or “User”), and VigyBag, and govern your access to and use of the services offered. By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must discontinue use of the Platform immediately.
        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>1. Eligibility and User Responsibility</h2>
        <p>
          1.1 To use the Platform, you must be at least 18 years old or accessing the Platform under the supervision of a parent or legal guardian.<br />
          1.2 By creating an account, making a purchase, or engaging with any features of the Platform, you represent and warrant that you have the legal capacity to enter into binding contracts under applicable law.<br />
          1.3 Users agree to provide accurate, complete, and updated registration information. VigyBag shall not be held responsible for any issues arising due to inaccurate information provided by the User.<br />
          1.4 The User acknowledges that they are solely responsible for maintaining the confidentiality of their login credentials and for all activities carried out through their account. Any unauthorized access or activity will be presumed to have been undertaken by the User unless the User notifies VigyBag in writing of suspected misuse.<br />
          1.5 VigyBag reserves the right to terminate accounts, refuse service, remove or edit content, or cancel orders at its sole discretion without prior notice in the event of suspected fraud, misuse, or violation of these Terms.
        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>2. Account Registration and Security</h2>
        <p>
          2.1 Users must create an account to access certain features of the Platform, such as placing orders, accessing past purchase history, or using loyalty benefits.<br />
          2.2 During registration, Users are required to furnish personal information including but not limited to name, email address, phone number, billing/shipping address, and payment details.<br />
          2.3 The User is responsible for ensuring that all information provided is accurate and up to date. VigyBag is not liable for delivery failures, payment issues, or other errors resulting from incorrect information.<br />
          2.4 Users agree not to impersonate another person, create multiple fake accounts, or use automated systems to access the Platform.<br />
          2.5 VigyBag employs commercially reasonable security practices; however, the User acknowledges that no system is completely secure. By using the Platform, you accept the inherent security risks of online transactions.
        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>3. Products, Services, and Availability</h2>
        <p>
          3.1 VigyBag strives to provide accurate descriptions, pricing, and availability details for all products and services listed on the Platform. However, errors, inaccuracies, or omissions may occur.<br />
          3.2 Product images are for representational purposes only. Actual colors, dimensions, or packaging may vary depending on suppliers, device display settings, or manufacturing updates.<br />
          3.3 VigyBag reserves the right to modify, discontinue, or suspend the availability of any product or service at any time without prior notice.<br />
          3.4 All products and services are offered subject to stock availability. VigyBag does not guarantee continuous or uninterrupted supply.<br />
          3.5 Certain services, offers, or promotions may be subject to additional terms and conditions which shall be deemed to form an integral part of these Terms.

        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>4. Pricing Policy</h2>
        <p>
          4.1 All prices listed on the Platform are in Indian Rupees (INR) unless otherwise stated. Prices are inclusive of Goods and Services Tax (GST) and other applicable government levies unless specified separately.<br />
          4.2 VigyBag endeavors to provide accurate product pricing but errors may occur. In the event of a pricing error:
          </p>
          <ul>
            <li>If the actual price is lower than the listed price, VigyBag will charge the lower amount.</li>
            <li>If the actual price is higher, VigyBag may contact the User for confirmation before processing or cancel the order and notify the User accordingly.</li>
          </ul>
          <p>
          4.3 Prices and availability are subject to change without prior notice due to market conditions, supplier updates, or promotional campaigns.<br />
          4.4 VigyBag may, from time to time, introduce discounts, promotional codes, or loyalty rewards. Such offers will be governed by additional terms, including validity period and eligibility, and cannot be combined unless expressly permitted.<br />
          4.5 The User acknowledges that final pricing may vary due to factors like shipping costs, packaging charges, and location-based delivery fees, which will be displayed at checkout before payment confirmation.

        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>5. Orders and Acceptance</h2>
        <p>
          5.1 An order placed on the Platform constitutes an offer to purchase products or services, subject to acceptance by VigyBag.<br />
          5.2 Orders are deemed accepted only upon dispatch confirmation sent to the User’s registered email or mobile number. Mere acknowledgment of an order request does not constitute acceptance.<br />
          5.3 VigyBag reserves the right to refuse or cancel any order for reasons including but not limited to:</p>
          <ul><li>	Product unavailability,</li>
            <li>Inaccuracies in pricing or description,</li>
            <li>Suspicion of fraudulent transactions,</li>
            <li>Payment issues, or</li>
            <li>Breach of these Terms.</li></ul>
          <p>
          5.4 Users may cancel an order prior to dispatch, subject to the cancellation policy published on the Platform. Once dispatched, cancellations or modifications are no longer possible.<br />
          5.5 In the event of a cancellation initiated by VigyBag or the User, any payment received will be refunded in accordance with the Refund Policy (Section 9).<br />
          5.6 VigyBag shall not be held responsible for any delay or inability to process an order due to unforeseen circumstances including strikes, natural disasters, or supply chain disruptions.

        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>6. Payment Terms</h2>
        <p>
          6.1 VigyBag offers multiple payment methods including credit/debit cards, net banking, Unified Payments Interface (UPI), digital wallets, and Cash on Delivery (COD), subject to availability at the User’s location.<br />
          6.2 Payments are processed through secure third-party gateways. By using these gateways, the User agrees to abide by their terms and privacy policies. VigyBag is not liable for issues arising due to third-party payment processors.<br />
          6.3 For COD orders, VigyBag may impose additional service charges or restrict COD availability for certain products, categories, or pin codes.<br />
          6.4 In case of failed transactions or double deductions, Users must notify VigyBag within 48 hours. Refunds for such transactions will be initiated after verification with the payment gateway.<br />
          6.5 VigyBag reserves the right to suspend or terminate a User’s account if fraudulent payment activity is suspected, including but not limited to use of stolen cards, chargebacks, or fake transactions.<br />
          6.6 By providing payment information, Users represent and warrant that they are legally authorized to use the selected payment method.

        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>7. Shipping, Delivery, and Risk of Loss</h2>
        <p>
          7.1 VigyBag partners with third-party logistics providers to ensure reliable and timely delivery of products.<br />
          7.2 Estimated delivery timelines are displayed at checkout; however, actual delivery may vary due to factors beyond VigyBag’s control such as weather, logistics delays, or government restrictions.<br />
          7.3 Delivery shall be made to the shipping address provided by the User at the time of order placement. Users are responsible for ensuring accuracy of the address. Incorrect addresses may result in delivery failures or delays.<br />
          7.4 Title and risk of loss for products pass to the User upon delivery at the designated address. In the case of COD, risk passes upon acceptance of the package and payment of dues.<br />
          7.5 Delivery attempts:
          </p>
          <ul>
            <li>If the User is unavailable, delivery personnel may attempt redelivery or leave the package with a neighbor/concierge (if permitted)</li>
            <li>After multiple failed attempts, the product may be returned to the warehouse, and refund (if applicable) will be processed after deducting shipping charges.</li>
          </ul>
          <p>
          7.6 Certain regions may attract additional shipping fees due to distance, accessibility, or government regulations.<br />
          7.7 VigyBag shall not be liable for delays caused by force majeure events including strikes, riots, natural calamities, or other events beyond reasonable control
        </p>
        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>8. Returns and Replacement Policy</h2>
        <p>
          8.1 VigyBag aims to provide complete customer satisfaction. If you are not fully satisfied with your purchase, you may request a return or replacement in accordance with this Policy.<br />
          8.2 Eligibility for returns:</p>
          <ul>
            <li>Products must be returned within 7–10 days of delivery</li>
            <li>Products must be unused, unwashed, and in their original packaging with all tags intact.</li>
            <li>Certain categories such as perishable goods, hygiene-related items, and customized products may not be eligible for returns unless defective.</li>
          </ul>
          <p>
          8.3 Process for returns:</p>
          <ul>
            <li>Users must initiate a return request through their VigyBag account or customer support helpline.</li>
            <li>Our logistics partner will arrange pickup, subject to serviceability in the User’s location.</li>
            <li>Returned items will undergo a quality check before approval.</li>
          </ul>
          <p>
          8.4 Replacements:</p>
          <ul>
            <li>Replacement will be issued only if the exact product is available in stock.</li>
            <li>If not available, a refund or store credit may be offered.</li>
          </ul>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>9. Refund Policy</h2>
        <p>
          9.1 Approved refunds will be processed within 7–14 business days from the date of approval.<br />
          9.2 Mode of refund:</p>
          <ul>
            <li>Prepaid orders will be refunded to the original payment method.</li>
            <li>COD orders may be refunded via bank transfer, UPI, or store wallet credit.</li></ul>
          <p>
          9.3 Refunds may be delayed in case of banking holidays, third-party issues, or incomplete account details provided by the User.<br />
          9.4 In case of partial order returns, only the returned item’s value (minus delivery charges, if applicable) will be refunded.<br />
          9.5 Promotional vouchers or coupon discounts are non-refundable and will not be reinstated.<br />
          9.6 VigyBag reserves the right to deduct convenience charges, reverse logistics fees, or restocking fees where applicable.</p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>10. Intellectual Property Rights</h2>
        <p>
          10.1 All intellectual property rights in the Platform, including trademarks, trade names, service marks, designs, logos, product names, software code, and other proprietary material, are owned by or licensed to VigyBag.<br />
          10.2 Users are prohibited from:</p>
          <ul>
            <li>Copying, reproducing, or redistributing any part of the Platform or content without prior written consent,</li>
            <li>Reverse engineering or attempting to derive source code from any software on the Platform,</li>
            <li>Using VigyBag’s trademarks or branding in any misleading or unauthorized manner.</li></ul>
          <p>
          10.3 Content displayed on the Platform, including product images, descriptions, and promotional material, is protected under applicable intellectual property laws. Unauthorized use may result in legal action.<br />
          10.4 Users retain rights over the content they voluntarily upload (such as reviews), but grant VigyBag a royalty-free, worldwide, perpetual license to use, reproduce, and display such content for promotional and operational purposes.</p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>11. User Conduct and Responsibilities</h2>
        <p>
          11.1 Users agree to access and use the Platform only for lawful purposes. Prohibited activities include but are not limited to:</p>
          <ul>
            <li>Submitting false, misleading, or inaccurate personal details,</li>
            <li>Engaging in fraudulent transactions or impersonation,</li>
            <li>Uploading harmful content including viruses, malware, or offensive material,</li>
            <li>Harassing, threatening, or abusing other Users, staff, or third parties associated with VigyBag,</li>
            <li>Violating applicable laws, including consumer protection, data privacy, and intellectual property rights.</li></ul>
          <p>
          11.2 Users are solely responsible for maintaining confidentiality of their login credentials. VigyBag will not be liable for unauthorized access resulting from negligence in safeguarding passwords.<br />
          11.3 Any breach of this clause may result in suspension or permanent termination of the User’s account, along with potential legal consequences.<br />
          11.4 VigyBag reserves the right to monitor activity on the Platform for compliance purposes but is under no obligation to review all User conduct.

        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>12. User-Generated Content and Reviews</h2>
        <p>
          12.1 VigyBag encourages Users to share feedback, reviews, and ratings to enhance community trust. However, content must be accurate, respectful, and not misleading.<br />
          12.2 Prohibited content includes:</p>
          <ul>
            <li>Offensive, defamatory, or discriminatory language,</li>
            <li>Fake reviews intended to manipulate product ratings,</li>
            <li>Advertising or promotional links for third-party businesses,</li>
            <li>Personal data such as phone numbers or addresses</li></ul>
          <p>
          12.3 By submitting reviews, Users grant VigyBag a non-exclusive license to use, display, and share such content on the Platform and across marketing channels.<br />
          12.4 VigyBag reserves the right to remove or moderate any review that violates these Terms or applicable law, without prior notice.<br />
          12.5 While VigyBag makes efforts to ensure authenticity of reviews, it cannot guarantee accuracy or endorse views expressed by individual Users.

        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>13. Privacy Policy</h2>
        <p>
          13.1 Users are required to review and accept the VigyBag Privacy Policy, which explains how we collect, store, use, and protect personal data.<br />
          13.2 The Privacy Policy is deemed to be an integral part of these Terms, and continued use of the Platform constitutes acceptance of both.<br />
          13.3 In case of any conflict between these Terms and the Privacy Policy, these Terms shall prevail with respect to service usage, while the Privacy Policy shall govern all matters related to data protection.

        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>14. Third-Party Links and Services</h2>
        <p>
          14.1 The Platform may contain links to third-party websites, applications, or services that are not owned or controlled by VigyBag.<br />
          14.2 VigyBag does not endorse, warrant, or assume responsibility for the availability, accuracy, legality, or content of third-party resources.<br />
          14.3 Users acknowledge that interactions with third-party services (such as payment gateways, delivery partners, or external promotions) are governed solely by the respective third party’s terms and policies.<br />
          14.4 VigyBag shall not be liable for any damages or losses arising out of reliance on third-party services or links.

        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>15. Limitation of Liability</h2>
        <p>
          15.1 To the maximum extent permitted by law, VigyBag shall not be liable for any indirect, incidental, special, consequential, or punitive damages including, but not limited to, loss of profits, goodwill, data, or other intangible losses.<br />
          15.2 VigyBag’s total liability, whether in contract, tort, or otherwise, shall not exceed the total amount paid by the User to VigyBag for the specific product or service in dispute.<br />
          15.3 Users agree that VigyBag shall not be responsible for delays, interruptions, or failures caused by events beyond its reasonable control, including force majeure circumstances.

        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>16. Indemnity</h2>
        <p>
          16.1 The User agrees to indemnify, defend, and hold harmless VigyBag, its affiliates, officers, directors, employees, agents, and partners from and against any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising from:</p>
          <ul>
            <li>Breach of these Terms by the User,</li><li>Misuse of the Platform,</li>
            <li>Violation of any applicable laws or third-party rights.</li></ul>
         <p> 16.2 This indemnity obligation will survive termination of these Terms and continued use of the Platform.
        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>17. Termination</h2>
        <p>
          17.1 VigyBag reserves the right, at its sole discretion, to suspend, restrict, or terminate a User’s account and access to the Platform at any time, without prior notice, in cases including but not limited to:</p>
          <ul>
            <li>Breach of these Terms,</li>
            <li>Fraudulent, illegal, or abusive activities,</li>
            <li>Extended inactivity of the account.</li>
          </ul>
          <p>17.2 Users may also choose to terminate their account voluntarily by contacting VigyBag customer support.<br />
          17.3 Upon termination, all outstanding obligations including pending payments, disputes, or indemnity claims shall continue to remain enforceable.
    
        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>18. Governing Law and Dispute Resolution</h2>
        <p>
          18.1 These Terms and any disputes arising hereunder shall be governed by and construed in accordance with the laws of India.<br />
          18.2 Any disputes, controversies, or claims relating to these Terms shall be subject to the exclusive jurisdiction of the courts at Kanpur, Uttar Pradesh.<br />
          18.3 VigyBag may, at its discretion, opt for arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English and seated in Kanpur, Uttar Pradesh.

        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>19. Changes to Terms</h2>
        <p>
          19.1 VigyBag reserves the right to update, amend, or modify these Terms at any time without prior notice.<br />
          19.2 The revised Terms shall become effective immediately upon publication on the Platform.<br />
          19.3 Continued use of the Platform after such modifications constitutes acceptance of the updated Terms. Users are encouraged to review the Terms periodically.

        </p>

        <h2 style={{ color: "#4e6d2e", fontSize: "1.5rem", fontWeight: 550 }}>20. Contact Information</h2>
        <p>
          <b>Company Name:</b> VigyBag Private Limited<br />
          <b>Registered Office Address:</b> Kanpur, Uttar Pradesh<br />
          <b>Customer Support Email:</b> support@vigybag.com<br />
          <b>Customer Care Phone Number:</b> +91-XXXXXXXXXX<br />
          <b>Operating Hours:</b> Monday – Saturday, 10:00 AM to 6:00 PM (IST)
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
