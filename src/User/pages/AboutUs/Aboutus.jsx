import React from "react";
import delivery_boy from "../../../assets/delivery man.jpg";
import selling from "../../../assets/selling.jpg";
import inov from "../../../assets/6417880.jpg";

const AboutUs = () => {
  return (
    <div className="  from-[#ceedfa] to-[#cee1fa] min-h-screen">
      <section className="py-12 md:py-20  h-[95vh]">
        <p className="md:text-5xl text-3xl font-bold text-emerald-700 text-center mt-9">
          Our Mission
        </p>
        <div class="flex flex-col md:flex-row justify-between p-8">
          <div class="md:w-1/2  md:p-14">
            <p class="md:text-[23px] text-lg sm:text-[23px] text-slate-700 md:mt-20 font-normal">
              At <span className="text-green-700 font-bold">VigyBag,</span> we
              believe in empowering local artisans and connecting them with the
              rest of the country. Our mission is to provide a platform where
              villagers and rural artisans can showcase their eco-friendly
              products to a nationwide audience.We are committed to fostering
              sustainability by bringing the best of rural craftsmanship to your
              doorstep.
            </p>
          </div>
          <div class="md:w-1/2  md:p-4 mt-10"> {/*Responsive width with padding for medium screens and up*/}
              <div className="w-full max-w-2xl mx-auto border-8 border-green-600 rounded-md">{/*Centered container with responsive max width and border*/}
                <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}> {/*  16:9 Aspect Ratio for responsive video scaling */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/F9aJdlUGd08?autoplay=1&loop=1&playlist=F9aJdlUGd08&mute=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy" //Improves loading performance by deferring iframe load
                    aria-label="About VigyBag" //Accessibility improvement: describes video content
                 ></iframe>
               </div>
             </div>
            </div>
         </div>
        
      </section>
      <div className="w-full h-2 opacity-10 bg-slate-900"></div>
      <section className="py-3 md:py-20 md:h-[90vh]">
        <p className="md:text-5xl text-3xl font-bold text-emerald-800 text-center">
          Our Story
        </p>
        <div className="flex flex-col md:flex-row justify-between p-8">
          <div className="md:w-1/2 p-4">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="rounded-2xl"
                style={{
                  width: "785px",
                  height: "515px",
                }}
                src={delivery_boy}
                alt=""
              />
            </div>
          </div>
          <div class="md:w-1/2  p-14">
            <p class="md:text-xl text-lg text-slate-700 font-baloo mt-10">
              <span className="text-green-700 font-bold">VigyBag,</span> was
              born out of a desire to bridge the gap between rural artisans and
              urban consumers. We saw the potential in the handcrafted,
              eco-friendly products being created in villages across India and
              wanted to provide these talented individuals with the tools and
              platform they need to succeed. By harnessing the power of
              e-commerce, we are making these unique products accessible to
              everyone, no matter where they live.
            </p>
          </div>
        </div>
      </section>
      <div className="w-full h-2 opacity-10 bg-slate-900"></div>
      <section className="py-12 md:py-20  md:h-[90vh]">
        <p className="md:text-5xl text-3xl font-bold text-yellow-500 text-center mt-4">
          Why Choose <span className="text-green-700 font-bold">VigyBag</span>?
        </p>
        <div class="flex flex-col md:flex-row justify-between p-8">
          <div class="md:w-1/2 p-14">
            <p className="font-bold text-2xl text-orange-500">💡Empowerment</p>
            <p class="md:text-lg text-sm text-slate-700 font-baloo">
              Every purchase on
              <span className="text-green-700 font-bold">VigyBag,</span>
              directly supports local artisans and their communities. By
              choosing
              <span className="text-green-700 font-bold"> VigyBag,</span> you're
              not just buying a product – you're contributing to a more
              sustainable and equitable world.
            </p>
            <br />
            <p className="font-bold text-2xl text-orange-500">
              🌱 Sustainability
            </p>
            <p class="md:text-lg text-sm text-slate-700 font-baloo">
              We prioritize products that are made with the environment in mind.
              From natural materials to eco-friendly packaging, our goal is to
              reduce the carbon footprint associated with shopping.
            </p>
            <br />
            <p className="font-bold text-2xl text-orange-500">
              🔒 Authenticity
            </p>
            <p class="md:text-lg text-sm text-slate-700 font-baloo">
              Our products are handcrafted with care, carrying the rich heritage
              and culture of the artisans who make them. Every item tells a
              story of tradition, skill, and passion.
            </p>
          </div>

          <div class="md:w-1/2 p-4">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="rounded-2xl"
                style={{
                  width: "685px",
                  height: "415px",
                }}
                src={selling}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-2 opacity-10 bg-slate-900"></div>
      <section className="py-12 md:py-20 md:h-[120vh]">
        <p className="md:text-5xl text-3xl font-bold text-emerald-800 text-center mt-4">
          Our Values
        </p>
        <div class="flex flex-col md:flex-row justify-between p-8">
          <div class="md:w-1/2 p-4">
            <div class="md:aspect-w-16 md:aspect-h-9">
              <img
                className="rounded-2xl"
                style={{
                  width: "685px",
                  height: "580px",
                }}
                src={inov}
                alt=""
              />
            </div>
          </div>
          <div class="md:w-1/2  p-14">
            <p className="font-bold text-2xl text-orange-500">🧑‍🤝‍🧑Community</p>
            <p class="text-lg text-slate-700 font-baloo">
              We are deeply rooted in the communities we serve. By partnering
              with artisans and small-scale producers, we create a network of
              support that benefits everyone involved.
            </p>
            <br />
            <p className="font-bold text-2xl text-orange-500">
              🌱 Sustainability
            </p>
            <p class="text-lg text-slate-700 font-baloo">
              We are committed to promoting sustainable practices in everything
              we do, from the products we offer to the way we operate.
            </p>
            <br />
            <p className="font-bold text-2xl text-orange-500">🔍Transparency</p>
            <p class="text-lg text-slate-700 font-baloo">
              We believe in being open and honest with our customers. You can
              trust that when you shop with
              <span className="text-green-700 font-bold"> VigyBag</span> you’re
              getting authentic, high-quality products made with care.
            </p>
            <br />
            <p className="font-bold text-2xl text-orange-500">
              💕 Join the Vigy Family
            </p>
            <p class="text-lg text-slate-700 font-baloo">
              We invite you to become a part of the{" "}
              <span className="text-green-700 font-bold">VigyBag</span>{" "}
              community. Whether you're a consumer looking for unique,
              eco-friendly products or an artisan wanting to reach a wider
              audience,{" "}
              <span className="text-green-700 font-bold">VigyBag</span>
              is here for you. Together, we can create a sustainable future that
              benefits everyone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
