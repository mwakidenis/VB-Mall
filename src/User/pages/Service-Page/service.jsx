import React from "react";
import accounting from "../../../assets/accounting.jpeg";
import accountManagement from "../../../assets/accountMangement.jpeg";
import advertising from "../../../assets/advertising.jpeg";
import cataloging from "../../../assets/cataloging.jpeg";
import imaging from "../../../assets/imaging.jpeg";
import liquadation from "../../../assets/liquadation.jpeg";
import sellerAcount from "../../../assets/sellerAcount.jpeg";
import sellerTaining from "../../../assets/sellerTaining.jpeg";
import sourcing from "../../../assets/sourcing.jpeg";
import taxation from "../../../assets/taxation.jpeg";
import warehouse from "../../../assets/warehouse.jpeg";

import Header from "../../components/About/ServiceHeader";

const ServicePage = () => {
  const leadershipData = [
    {
      name: "Account Management",
      image: accounting,
      description:
        "Provide end-to-end services to a host of sellers. Help the sellers build a long term relationship with their customers.",
    },
    {
      name: "Accounting",
      image: accountManagement,
      description:
        "Provide payment reconciliation and integrated accounting services to sellers and help them with enhanced product profitability analysis.",
    },
    {
      name: "Advertising",
      image: advertising,
      description:
        "Lend your advertising services to sellers across the country. Help them promote their products and boost their sales.",
    },
    {
      name: "Cataloging",
      image: cataloging,
      description:
        "Connect with a host of sellers and help them build an appealing catalogue with compelling content that attracts customers.",
    },
    {
      name: "Imaging",
      image: imaging,
      description:
        "Provide photoshoot and editing services to sellers across the country and help them boost their sales.",
    },
    {
      name: "Liquidation",
      image: liquadation,
      description:
        "Offer your liquidation services to sellers who are willing to sell-off their dead inventory or excess returns.",
    },
    {
      name: "Seller Account Reinstatement",
      image: sellerAcount,
      description:
        "Help sellers in reinstating their suspended accounts and ensure their accounts don't get suspended in future.",
    },
    {
      name: "Seller Training",
      image: sellerTaining,
      description:
        "Provide in-person classroom / online training to new sellers & recently onboarded sellers on how to manage and grow their business on VigyBag.",
    },
    {
      name: "Software Solutions",
      image: sellerAcount,
      description:
        "Discover software solutions to bring efficiency in your operations.",
    },
    {
      name: "Sourcing",
      image: sourcing,
      description:
        "Have a wide assortment of quality products to offer to the sellers? Connect with sellers across the country who need your services.",
    },
    {
      name: "Taxation",
      image: taxation,
      description:
        "Connect with sellers across India and provide and lend them your assistance in filing taxes and handling money.",
    },
    {
      name: "Warehousing Services",
      image: warehouse,
      description:
        "Provide storage & inventory handling services to recent and existing sellers for non-FBF fulfillment on VigyBag platform at your warehouse locations.",
    },
    // Add more leadership members as needed
  ];

  return (
    <div className="bg-gradient-to-b from-[#fff0e3] to-white min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Leadership Section */}
      <section className="py-12 bg-green-50 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16 text-green-800">
          SERVICES THAT YOU CAN PROVIDE
        </h2>
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {leadershipData.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <div className="relative h-48 md:h-64">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {leader.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    {leader.description}
                  </p>
                  <p className="text-sm text-blue-500">
                    List Your Service{" "}
                    <lord-icon
                      style={{ height: "20px", width: "20px", paddingTop: "5px" }}
                      src="https://cdn.lordicon.com/vduvxizq.json"
                      trigger="hover"
                      colors="primary:#1663c7"
                    ></lord-icon>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
