import React, { useEffect } from "react";

const Shipping = () => {
  useEffect(() => {
    document.title = "VigyBag | shipping";
  }, []);

  return (
    <div className="bg-[#fff0e3ff] text-gray-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md p-4 md:p-8 rounded-lg mt-24">
        <main>
          <div className="mb-8">
            <h1
              className="text-sm md:text-lg font-bold mb-4 text-left"
              style={{ color: "black" }}>
              Shipping
            </h1>
            {/*  <hr className="border-black w-1/2 mx-auto mb-4 -mt-3"style={{border:'1px solid black'}} /> */}
          </div>

          <section className="mb-8">
            <h2 className="text-sm md:text-sm text-black font-bold mb-4">
              What are the delivery charges?
            </h2>
            <p className="mb-4">
              Delivery charges vary with each seller. Sellers incur relatively
              higher shipping costs on low-value items. In such cases, charging
              a nominal delivery fee helps them offset logistics costs. Please
              check your order summary to understand the delivery charges for
              individual products. For products listed as VigyBag Plus, a Rs 40
              charge for delivery per item may be applied if the order value is
              less than Rs 500. Orders of Rs 500 or above are delivered free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-sm md:text-sm text-black font-bold mb-4">
              Why does the delivery date not correspond to the delivery timeline
              of X-Y business days?
            </h2>
            <p className="mb-4">
              It is possible that the seller or our courier partners have a
              holiday between the day you placed your order and the date of
              delivery, which is based on the timelines shown on the product
              page. In this case, we add a day to the estimated date. Some
              courier partners and sellers do not work on Sundays, and this is
              factored into the delivery dates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-sm md:text-sm text-black font-bold mb-4">
              What is the estimated delivery time?
            </h2>
            <p className="mb-4">
              Sellers generally procure and ship the items within the time
              specified on the product page. Business days exclude public
              holidays and Sundays. Estimated delivery time depends on the
              following factors: • The seller offering the product • Product's
              availability with the seller • The destination to which you want
              the order shipped and the location of the seller
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-sm md:text-sm text-black font-bold mb-4">
              Are there any hidden costs (sales tax, octroi, etc.) on items sold
              by sellers on VigyBag?
            </h2>
            <p className="mb-4">
              There are NO hidden charges when you make a purchase on VigyBag.
              List prices are final and all-inclusive. The price you see on the
              product page is exactly what you would pay. Delivery charges are
              not hidden charges and are charged (if at all) extra depending on
              the seller's shipping policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-sm md:text-sm text-black font-bold mb-4">
              Why does the estimated delivery time vary for each seller?
            </h2>
            <p className="mb-4">
              You have probably noticed varying estimated delivery times for
              sellers of the product you are interested in. Delivery times are
              influenced by product availability, geographic location of the
              seller, your shipping destination, and the courier partner's
              time-to-deliver in your location. Please enter your default pin
              code on the product page (you don't have to enter it every single
              time) to know more accurate delivery t imes on the product page
              itself.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-sm md:text-sm text-black font-bold mb-4">
              Seller does not/cannot ship to my area. Why?
            </h2>
            <p className="mb-4">
              Please enter your pin code on the product page (you don't have to
              enter it every single time) to know whether the product can be
              delivered to your location. If you haven't provided your pin code
              until the checkout stage, the pin code in your shipping address
              will be used to check for serviceability.
              <p className="mb-4">
                Whether your location can be serviced or not depends on:
              </p>
              <p className="mb-4">
                • Whether the seller ships to your location{" "}
              </p>
              <p className="mb-4">
                • Legal restrictions, if any, in shipping particular products to
                your location{" "}
              </p>
              <p className="mb-4">
                • The availability of reliable courier partners in your location
                At times, sellers prefer not to ship to certain locations. This
                is entirely at their discretion.
              </p>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-sm md:text-sm text-black font-bold mb-4">
              Why is the CoD option not offered in my location?
            </h2>
            <p className="mb-4">
              Availability of CoD depends on the ability of our courier partner
              servicing your location to accept cash as payment at the time of
              delivery. Our courier partners have limits on the cash amount
              payable on delivery depending on the destination and your order
              value might have exceeded this limit. Please enter your pin code
              on the product page to check if CoD is available in your location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-sm md:text-sm text-black font-bold mb-4">
              I need to return an item, how do I arrange for a pick-up?
            </h2>
            <p className="mb-4">
              Returns are easy. Contact Us to initiate a return. You will
              receive a call explaining the process once you have initiated a
              return. Wherever possible, our logistics partners will facilitate
              the pick-up of the item. In case the pick-up cannot be arranged
              through our logistics partners, you can return the item through a
              third-party courier service. Return fees are borne by the seller.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-sm md:text-sm text-black font-bold mb-4">
              I did not receive my order but got a delivery confirmation
              SMS/Email.
            </h2>
            <p className="mb-4">
              In case the product was not delivered and you received a delivery
              confirmation email/SMS, report the issue within 7 days from the
              date of delivery confirmation for the seller to investigate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-sm md:text-sm text-black font-bold mb-4">
              What do the different tags like "In Stock", "Available" mean?
            </h2>
            <p className="mb-4">
              <p className="font-bold"> • 'In Stock'</p>
              <p className="mb-4">
                {" "}
                For items listed as "In Stock", sellers will mention the
                delivery time based on your location pin code (usually 2-3
                business days, 4-5 business days, or 4-6 business days in areas
                where standard courier service is available). For other areas,
                orders will be sent by Registered Post through the Indian Postal
                Service which may take 1-2 weeks depending on the location.
              </p>

              <p className="font-bold">• 'Available'</p>
              <p className="mb-4">
                The seller might not have the item in stock but can procure it
                when an order is placed for the item. The delivery time will
                depend on the estimated procurement time and the estimated
                shipping time to your location.
              </p>

              <p className="font-bold">• 'Preorder' or 'Forthcoming'</p>
              <p className="mb-4">
                Such items are expected to be released soon and can be
                pre-booked for you. The item will be shipped to you on the day
                of its official release launch and will reach you in 2 to 6
                business days. The Preorder duration varies from item to item.
                Once known, release t ime and date are mentioned (e.g., 5th May,
                August 3rd week).
              </p>
              <p className="font-bold">•'Out of Stock'</p>
              <p className="mb-4">
                {" "}
                Currently, the item is not available for sale. Use the 'Notify
                Me' feature to know once it is available for purchase.
              </p>

              <p className="font-bold">• 'Imported'</p>
              <p className="mb-4">
                Sometimes, items have to be sourced by sellers from outside
                India. These items are mentioned as 'Imported' on the product
                page and can take at least 10 days or more to be delivered to
                you.
              </p>

              <p className="font-bold">• 'Back In Stock Soon'</p>
              <p className="mb-4">
                The item is popular and is sold out. You can, however, 'book' an
                order for the product and it will be shipped according to the
                timelines mentioned by the seller.
              </p>

              <p className="font-bold">•'Temporarily Unavailable'</p>
              <p className="mb-4">
                The product is currently out of stock and is not available for
                purchase. The product could be in stock soon. Use the 'Notify
                Me' feature to know when it is available for purchase.
              </p>

              <p className="font-bold">• 'Permanently Discontinued'</p>
              <p className="mb-4">
                This product is no longer available because it is obsolete
                and/or its production has been discontinued.
              </p>

              <p className="font-bold">• 'Out of Print'</p>
              <p className="mb-4">
                This product is not available because it is no longer being
                published and has been permanently discontinued.
              </p>
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-sm md:text-sm text-black font-bold mb-4">
              Does VigyBag deliver internationally?
            </h2>
            <p className="mb-4">
              As of now, VigyBag doesn't deliver items internationally. You will
              be able to make your purchases on our site from anywhere in the
              world with credit/debit cards issued in India and 21 other
              countries, but please ensure the delivery address is in India.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Shipping;
