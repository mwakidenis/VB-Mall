import React from "react";
import career from "../../../assets/career.png";
import UX from "../../../assets/uxui designer.jpg";
import video from "../../../assets/video editing.jpg";
import content from "../../../assets/Content_Writer.avif";
import product from "../../../assets/product-engineering.jpg";
import Header from "../../components/About/CarrerHeader";

const CareerPage = () => {
  const leadershipData = [
    {
      name: "UX/UI Designer",
      role: "Graphic Designing",
      image: UX,
      description:
        "A UX/UI designer focuses on creating user-friendly and visually appealing digital interfaces. They blend user experience (UX) and user interface (UI) design to enhance usability and accessibility while ensuring the product is engaging and intuitive.",
    },
    {
      name: "Video Editor",
      role: "Video Editing",
      image: video,
      description:
        "A video editor is responsible for assembling raw footage into a polished final product. They cut, arrange, and enhance video clips, adding transitions, effects, and audio to create engaging visual stories.",
    },
    {
      name: "Product Engineer",
      role: "Product Management Engineer",
      image: product,
      description:
        "A product engineer designs, develops, and improves products, focusing on functionality and performance. They work closely with design and manufacturing teams to ensure products meet specifications and quality standards. Their role involves prototyping, testing, and refining products ",
    },
    {
      name: "Content Writer",
      role: "Writing E-commerce Content",
      image: content,
      description:
        "A content writer creates engaging and informative written material for various platforms, such as websites, blogs, and social media. They research topics, craft clear and compelling content, and tailor their writing to target audiences.",
    },
    // Add more leadership members as needed
  ];

  return (
    <div className="bg-gradient-to-b from-[#fff0e3] to-white min-h-screen md:w-auto w-fit">
      {/*Header Section */}
      <Header />

      <section>
        <p className="text-black md:text-5xl text-2xl mt-8 font-bold text-center font-baloo gap-2">
          Come to <span className="text-green-600">VigyBag</span> to maximise
          yourself
        </p>
        <p className="text-black mt-3 md:text-5xl text-2xl  font-bold text-center font-baloo mb-3">
          because when you maximise, we maximise.
        </p>
        <div className="mt-2">
          <img src={career} alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-10 bg-green-50 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-green-800 underline">
          Our Role
        </h2>
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:w-[70vw] w-[90vw] md:h-[120vh] md:ml-56">
            {leadershipData.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
                <div className="relative h-48 md:h-64">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {leader.name}
                    </h3>
                    <p className="text-green-300">{leader.role}</p>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    {leader.description}
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

export default CareerPage;
