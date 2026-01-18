import React, { useEffect } from "react";

const Payment_Policy = () => {
  useEffect(() => {
    document.title = "VigyBag | Return and Cancellation";
  }, []);

  return (
    <div className="bg-[#fff0e3ff] text-gray-800 p-4 md:p-8 font-sm">
      <div className="max-w-6xl mx-auto bg-white shadow-md p-4 md:p-8 rounded-lg mt-24">
        <main>
          <section className="mb-8">
            <h2 className="font-bold">Payments</h2>
            <br />
            <h3 className="text-black font-bold text-sm">
              How do I pay for a VigyBag purchase?
            </h3>
            <br />
            <p className="text-sm">
              VigyBag offers you multiple payment methods. Whatever your online
              mode of payment, you can rest assured that VigyBag's trusted
              payment gateway partners use secure encryption technology to keep
              your transaction details confidential at all times.
            </p>
            <p className="text-sm">
              You may use Internet Banking, Gift Card, Cash on Delivery and
              Wallet to make your purchase.
            </p>
            <p className="text-sm">
              VigyBag also accepts payments made using Visa, MasterCard, Maestro
              and American Express credit/debit cards in India and 21 other
              countries.
            </p>
            <br />
            <h3 className="text-black font-bold text-sm">
              Are there any hidden charges (Octroi or Sales Tax) when I make a
              purchase on VigyBag?
            </h3>
            <br />
            <p className="text-sm">
              There are NO hidden charges when you make a purchase on VigyBag.
              The prices listed for all the items are final and all-inclusive.
              The price you see on the product page is exactly what you pay.
            </p>
            <p className="text-sm">
              Delivery charges may be extra depending on the seller policy.
              Please check individual seller for the same. In case of seller WS
              Retail, the ₹50 delivery charge is waived off on orders worth ₹500
              and over.
            </p>
            <br />
            <h3 className="text-black font-bold text-sm">
              What is Cash on Delivery?
            </h3>
            <br />
            <p className="text-sm">
              If you are not comfortable making an online payment on
              VigyBag.com, you can opt for the Cash on Delivery (C-o-D) payment
              method instead. With C-o-D you can pay in cash at the time of
              actual delivery of the product at your doorstep, without requiring
              you to make any advance payment online.
            </p>
            <p className="text-sm">
              The maximum order value for a Cash on Delivery (C-o-D) payment is
              ₹50,000. It is strictly a cash-only payment method. Gift Cards or
              store credit cannot be used for C-o-D orders. Foreign currency
              cannot be used to make a C-o-D payment. Only Indian Rupees
              accepted.
            </p>
            <br />
            <h3 className="text-black font-bold text-sm">
              How do I pay using a credit/debit card?
            </h3>
            <br />
            <p className="text-sm">
              We accept payments made by credit/debit cards issued in India and
              21 other countries.
            </p>
            <h4 className="text-black font-bold text-sm">Credit cards</h4>
            <p className="text-sm">
              We accept payments made using Visa, MasterCard and American
              Express credit cards.
            </p>
            <p className="text-sm">
              To pay using your credit card at checkout, you will need your card
              number, expiry date, three-digit CVV number (found on the backside
              of your card). After entering these details, you will be
              redirected to the bank's page for entering the online 3D Secure
              password.
            </p>
            <h4 className="text-black font-bold text-sm">Debit cards</h4>
            <p className="text-sm">
              We accept payments made using Visa, MasterCard and Maestro debit
              cards.
            </p>
            <p className="text-sm">
              To pay using your debit card at checkout, you will need your card
              number, expiry date (optional for Maestro cards), three-digit CVV
              number (optional for Maestro cards). You will then be redirected
              to your bank's secure page for entering your online password
              (issued by your bank) to complete the payment.
            </p>
            <p className="text-sm">
              Internationally issued credit/debit cards cannot be used for
              Flyte, Wallet and eGV payments/top-ups.
            </p>
            <br />
            <h3 className="text-black font-bold text-sm">
              Is it safe to use my credit/debit card on VigyBag?
            </h3>
            <br />
            <p className="text-sm">
              Your online transaction on VigyBag is secure with the highest
              levels of transaction security currently available on the
              Internet. VigyBag uses 256-bit encryption technology to protect
              your card information while securely transmitting it to the
              respective banks for payment processing.
            </p>
            <p className="text-sm">
              All credit card and debit card payments on VigyBag are processed
              through secure and trusted payment gateways managed by leading
              banks. Banks now use the 3D Secure password service for online
              transactions, providing an additional layer of security through
              identity verification.
            </p>
            <br />
            <h3 className="text-black font-bold text-sm">
              What steps does VigyBag take to prevent card fraud?
            </h3>
            <br />
            <p className="text-sm">
              VigyBag realizes the importance of a strong fraud detection and
              resolution capability. We and our online payments partners monitor
              transactions continuously for suspicious activity and flag
              potentially fraudulent transactions for manual verification by our
              team.
            </p>
            <p className="text-sm">
              In the rarest of rare cases, when our team is unable to rule out
              the possibility of fraud categorically, the transaction is kept on
              hold, and the customer is requested to provide identity documents.
              The ID documents help us ensure that the purchases were indeed
              made by a genuine cardholder. We apologise for any inconvenience
              that may be caused to customers and request them to bear with us
              in the larger interest of ensuring a safe and secure environment
              for online transactions.
            </p>
            <br />
            <h3 className="text-black font-bold text-sm">
              What is a 3D Secure password?
            </h3>
            <br />
            <p className="text-sm">
              The 3D Secure password is implemented by VISA and MasterCard in
              partnership with card issuing banks under the "Verified by VISA"
              and "Mastercard SecureCode" services, respectively.
            </p>
            <p className="text-sm">
              The 3D Secure password adds an additional layer of security
              through identity verification for your online credit/debit card
              transactions. This password, which is created by you, is known
              only to you. This ensures that only you can use your card for
              online purchases.
            </p>
            <br />
            <h3 className="text-black font-bold text-sm">
              How can I get the 3D Secure password for my credit/debit card?
            </h3>
            <br />
            <p className="text-sm">
              You can register for the 3D Secure password for your credit/debit
              card by visiting your bank's website. The registration links for
              some of the banks have been provided below for easy reference:
            </p>
            <table class="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th class="border border-gray-200 px-4 py-2 text-left">
                    Bank Name
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    ABN Amro Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">Axis Bank</td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Allahabad Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">Andhra Bank</td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Bank of Bahrain and Kuwait
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Bank of Baroda
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Bank of India
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Bank of Maharashtra
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Bank of Rajasthan
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Central Bank of India
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">Citibank</td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    City Union Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Corporation Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Deutsche Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Development Credit Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Dhanlaxmi Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">Federal Bank</td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">HDFC Bank</td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">ICICI Bank</td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">IDBI Bank</td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    ING Vysya Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Indian Overseas Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">Indian Bank</td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    IndusInd Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Jammu & Kashmir Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Karnataka Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Karur Vysya Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Kotak Mahindra Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Lakshmi Vilas Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Oriental Bank of Commerce
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Punjab National Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Royal Bank of Scotland
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    South Indian Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Standard Chartered Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    State Bank of Hyderabad
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    State Bank of India
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    State Bank of Mysore
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    State Bank of Travancore
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Syndicate Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Tamilnad Mercantile Bank
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    Union Bank of India
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">
                    United Bank of India
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">Vijaya Bank</td>
                </tr>
                <tr>
                  <td class="border border-gray-200 px-4 py-2">YES Bank</td>
                </tr>
              </tbody>
            </table>
            <br />
            <h3 className="text-black font-bold text-sm">
              Can I make a credit/debit card or Internet Banking payment on
              VigyBag through my mobile?
            </h3>
            <br />
            <p className="text-sm">
              Yes, you can make credit card payments through the VigyBag mobile
              site and application. VigyBag uses 256-bit encryption technology
              to protect your card information while securely transmitting it to
              the secure and trusted payment gateways managed by leading banks.
            </p>
            <br />
            <h3 className="text-black font-bold text-sm">
              How does 'Instant Cashback' work?
            </h3>
            <br />
            <p className="text-sm">
              The 'Cashback' offer is instant and exclusive to VigyBag.com. You
              only pay the final price you see in your shopping cart.
            </p>
            <br />
            <h3 className="text-black font-bold text-sm">
              How do I place a Cash on Delivery (C-o-D) order?
            </h3>
            <br />
            <p className="text-sm">
              All items that have the "Cash on Delivery Available" icon are
              valid for order by Cash on Delivery.
            </p>
            <p className="text-sm">
              Add the item(s) to your cart and proceed to checkout. When
              prompted to choose a payment option, select "Pay By Cash on
              Delivery". Enter the CAPTCHA text as shown, for validation.
            </p>
            <p className="text-sm">
              Once verified and confirmed, your order will be processed for
              shipment in the time specified, from the date of confirmation. You
              will be required to make a cash-only payment to our courier
              partner at the time of delivery of your order to complete the
              payment.
            </p>
            <h4 className="text-black font-bold text-sm">
              Terms & Conditions:
            </h4>
            <ul>
              <li>The maximum order value for C-o-D is ₹50,000</li>
              <li>
                Gift Cards or Store Credit cannot be used for C-o-D orders
              </li>
              <li>Cash-only payment at the time of delivery.</li>
            </ul>
            <br />
            <h3>What is VigyBag's credit card EMI option?</h3>
            <br />
            <p>
              With VigyBag's credit card EMI option, you can choose to pay in
              easy installments of 3, 6, 9, 12, 18*, or 24 months* with credit
              cards from the following banks:
            </p>
            <ul>
              <li>HDFC</li>
              <li>Citi</li>
              <li>ICICI</li>
              <li>Kotak</li>
              <li>Axis</li>
              <li>IndusInd</li>
              <li>SBI</li>
              <li>Standard Chartered</li>
              <li>HSBC</li>
            </ul>
            <p>
              *18 & 24 months EMI options are available from select banks only.
              Please refer to the table below for more details:
            </p>
            <table className="border-2 border-black">
              <thead>
                <tr className="border-2 border-black">
                  <th className="border-2 border-black">Banks</th>
                  <th className="border-2 border-black">
                    Supports 18 & 24 months tenure
                  </th>
                  <th className="border-2 border-black">
                    Minimum order value to avail 18 & 24 months EMI options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black">HDFC</td>
                  <td className="border-2 border-black">Yes</td>
                  <td className="border-2 border-black">₹10,000</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black">Citi</td>
                  <td className="border-2 border-black">Yes</td>
                  <td className="border-2 border-black">₹10,000</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black">ICICI</td>
                  <td className="border-2 border-black">Yes</td>
                  <td className="border-2 border-black">₹10,000</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black">Kotak</td>
                  <td className="border-2 border-black">Yes</td>
                  <td className="border-2 border-black">₹4,000</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black">Axis</td>
                  <td className="border-2 border-black">Yes</td>
                  <td className="border-2 border-black">₹4,000</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black">IndusInd</td>
                  <td className="border-2 border-black">Yes</td>
                  <td className="border-2 border-black">₹4,000</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black">SBI</td>
                  <td className="border-2 border-black">No</td>
                  <td className="border-2 border-black">NA</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black">Standard Chartered</td>
                  <td className="border-2 border-black">Yes</td>
                  <td className="border-2 border-black">₹4,000</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black">HSBC</td>
                  <td className="border-2 border-black">No</td>
                  <td className="border-2 border-black">NA</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm">
              There is NO processing fee charged for availing VigyBag's EMI
              payment option. On return or exchange, interest charged by the
              bank till that time will not be refunded by VigyBag.
            </p>
            <p className="text-sm">
              You may check with the respective bank/issuer on how a
              cancellation, refund or pre-closure could affect the EMI terms,
              and what interest charges would be levied on you for the same.
            </p>
            <h4>Example and Calculations</h4>
            <p className="text-sm">
              The table below shows a representative rendering of EMI plans for
              a ₹20,000 purchase on VigyBag paid using the EMI payment plan:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-2 border-black">
                <thead className="border-2">
                  <tr className="border-2 border-black">
                    <th className="border-2 border-black">Tenure (months)</th>
                    <th className="border-2 border-black">Loan amount</th>
                    <th className="border-2 border-black">
                      Monthly installment
                    </th>
                    <th className="border-2 border-black">
                      Bank interest rate
                    </th>
                    <th className="border-2 border-black">
                      Total effective price you pay
                    </th>
                    <th className="border-2 border-black">
                      Interest paid to Bank
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-2 border-black">
                    <td className="border-2 border-black">3</td>
                    <td className="border-2 border-black">₹20,000</td>
                    <td className="border-2 border-black">₹6,800.44</td>
                    <td className="border-2 border-black">12.00%</td>
                    <td className="border-2 border-black">₹20,401.33</td>
                    <td className="border-2 border-black">₹401.33</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="border-2 border-black">6</td>
                    <td className="border-2 border-black">₹20,000</td>
                    <td className="border-2 border-black">₹3,450.97</td>
                    <td className="border-2 border-black">12.00%</td>
                    <td className="border-2 border-black">₹20,705.80</td>
                    <td className="border-2 border-black">₹705.80</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="border-2 border-black">9</td>
                    <td className="border-2 border-black">₹20,000</td>
                    <td className="border-2 border-black">₹2,344.32</td>
                    <td className="border-2 border-black">13.00%</td>
                    <td className="border-2 border-black">₹21,098.89</td>
                    <td className="border-2 border-black">₹1,098.89</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="border-2 border-black">12</td>
                    <td className="border-2 border-black">₹20,000</td>
                    <td className="border-2 border-black">₹1,786.35</td>
                    <td className="border-2 border-black">13.00%</td>
                    <td className="border-2 border-black">₹21,436.15</td>
                    <td className="border-2 border-black">₹1,436.15</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <h3 className="text-black font-bold text-sm">
              How do I make a payment using VigyBag's credit card EMI option?
            </h3>
            <br />
            <p className="text-sm">
              Once you've added the desired items to your VigyBag shopping cart,
              proceed with your order as usual by entering your address. When
              you're prompted to choose a payment mode for your order, select
              'EMI' & follow these simple steps:
            </p>
            <ol>
              <li>Choose your credit-card issuing bank you wish to pay from</li>
              <li>Select the EMI plan of your preference</li>
              <li>Enter your credit card details</li>
              <li>Click 'Save and Pay'</li>
            </ol>
            <p className="text-sm">
              Please note that the full amount will be charged on your card the
              day of the transaction.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Payment_Policy;
