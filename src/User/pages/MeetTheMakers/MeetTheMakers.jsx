import React, { useState } from "react";
import rani from "../../../assets/rani.jpg";
// ...other assets imports...
import suresh from "../../../assets/suresh.jpg";
import aarti from "../../../assets/aarti.jpeg";
import ashaben from "../../../assets/ashaben.jpeg";
import kantha from "../../../assets/kantha.jpg";
import dhaaga from "../../../assets/dhaaga.webp";
import wood from "../../../assets/wood.jpeg";
import kashmir from "../../../assets/kashmir.jpg";
import saree from "../../../assets/saree.jpeg";
import scarf from "../../../assets/scarf.jpeg";
import paper from "../../../assets/paper.jpeg";
import wrap from "../../../assets/wrap.jpeg";
import pashmina from "../../../assets/pashmina.jpeg";
import envelope from "../../../assets/envelope.jpeg";
import patchwork from "../../../assets/patchwork.jpeg";
import wallart from "../../../assets/wallart.jpeg";
import chair from "../../../assets/chair.jpeg";
import potlibag from "../../../assets/potlibag.jpeg";
import clutch from "../../../assets/clutch.jpeg";
import quilt from "../../../assets/quilt.jpeg";
import kanthasaree from "../../../assets/kanthasaree.jpeg";
import lamp from "../../../assets/lamp.jpeg";
import leaf from "../../../assets/leaf.jpeg";
import teaset from "../../../assets/teaset.jpeg";
import oil from "../../../assets/oil.jpg";
import mat from "../../../assets/mat.jpeg";
import basket from "../../../assets/basket.webp";
import kashida from "../../../assets/kashida.webp";
import penstand from "../../../assets/penstand.jpeg";
import temple from "../../../assets/temple.jpeg";
import embrbags from "../../../assets/embrbags.jpeg";
import embellscarf from "../../../assets/embellscarf.jpeg";
import toys from "../../../assets/toys.jpeg";
import teainfused from "../../../assets/teainfused.jpeg";
import chairs from "../../../assets/chairs.jpeg";
import shawl from "../../../assets/shawl.jpeg";
import meenaImg from "../../../assets/meenaImg.jpeg";
import silverEarringsImg from "../../../assets/silverEarringsImg.jpeg";
import necklaceImg from "../../../assets/necklaceImg.jpeg";

const makers = [
  {
    id: 1,
    name: "Rani",
    location: "Rajasthan",
    category: "Fashion",
    story: `Rani grew up watching her grandmother weave intricate patterns on handlooms. Her eco-friendly fabrics, made with organic dyes, help train and empower village women. "Every sari I weave carries the dreams of Rajasthan’s women. Our fabrics reflect hope and heritage," she says.`,
    highlights: [
      "Handwoven silk sarees with natural dyes",
      "Collaborative projects empowering rural women",
      "Customized shawls for global clients",
    ],
    image: rani,
    emoji: "🧵",
    items: [
      { name: "Eco-friendly Sari", image: saree },
      { name: "Handcrafted Scarf", image: scarf },
      { name: "Handwoven Shawl", image: shawl },
    ],
  },
  {
    id: 2,
    name: "Suresh",
    location: "Kerala",
    category: "Body Care & Furniture",
    story: `Suresh left a corporate job to revive Kerala’s coir craft, hand-spinning coconut husks into mats and chairs. He collaborates with Ayurveda practitioners to craft body care kits, blending heritage and health for a sustainable future.`,
    highlights: [
      "Organic coir yoga mats",
      "Ayurvedic body oil gift sets",
      "Eco-friendly coconut shell chairs",
    ],
    image: suresh,
    emoji: "🌿",
    items: [
      { name: "Handwoven Yoga Mat", image: mat },
      { name: "Ayurvedic Body Oil", image: oil },
      { name: "Coconut Shell Chair", image: chairs },
    ],
  },
  {
    id: 3,
    name: "Aarti",
    location: "Assam",
    category: "Stationery & Gifts",
    story: `Aarti cultivates Assam tea using organic practices and crafts tea-infused stationery, helping children in her community receive education. "Each blend tells Assam’s story—resilience, flavor, and love," she beams.`,
    highlights: [
      "Assam tea blends in eco packaging",
      "Hand-pressed leaf stationery sets",
      "Community school sponsorships through art",
    ],
    image: aarti,
    emoji: "🍵",
    items: [
      { name: "Tea Gift Set", image: teaset },
      { name: "Leaf Journal", image: leaf },
      { name: "Tea Infused Stationery", image: teainfused }
    ],
  },
  {
    id: 4,
    name: "Ashaben Pithiya",
    location: "Gujarat",
    category: "Home Decor & Gifts",
    story: `Ashaben from Ranapur village weaves bamboo baskets and lamps, overcoming challenges with technology and empowering other women. Her craft has brought financial independence and dignity, inspiring her community.`,
    highlights: [
      "Bamboo baskets and lamps",
      "Traditional toys",
      "Training sessions for aspiring artists",
    ],
    image: ashaben,
    emoji: "🎋",
    items: [
      { name: "Handwoven Basket", image: basket },
      { name: "Bamboo Lamp", image: lamp },
      { name: "Traditional Toys", image: toys },
    ],
  },
  {
    id: 5,
    name: "Kantha Sisters",
    location: "West Bengal",
    category: "Fashion & Gifts",
    story: `Generations of women create Kantha textiles from upcycled saris, expressing community stories through running stitches. Their work weaves resilience and tradition into every fabric, now cherished worldwide.`,
    highlights: [
      "Kantha-embroidered sarees",
      "Patchwork quilts",
      "Embellished scarves",
    ],
    image: kantha,
    emoji: "🪡",
    items: [
      { name: "Kantha Silk Sari", image: kanthasaree },
      { name: "Embroidered Quilt", image: quilt },
      { name: "Embellished Scarf", image: embellscarf },
    ],
  },
  {
    id: 6,
    name: "Dhaaga Collective",
    location: "Pan India",
    category: "Fashion & Accessories",
    story: `Dhaaga is a women-powered brand focused on sustainable fashion. Hand-stitched handbags, clutches, and potlis sustain rural families and preserve traditional art, blending eco-consciousness with artistry.`,
    highlights: [
      "Embroidered handbags",
      "Handstitched clutches",
      "Potli bags with thread work",
    ],
    image: dhaaga,
    emoji: "👜",
    items: [
      { name: "Embellished Clutch", image: clutch },
      { name: "Potli Bag", image: potlibag },
      { name: "Embroidered Handbag", image: embrbags}
    ],
  },
  {
    id: 7,
    name: "Madhavamala Wood Carvers",
    location: "Andhra Pradesh",
    category: "Furniture",
    story: `Artisans in Madhavamala preserve ancient wood carving traditions, making modern furniture and temple decor. Workshops now educate visitors and help artisans sustain their heritage through direct engagement.`,
    highlights: [
      "Hand-carved furniture",
      "Temple decor pieces",
      "Workshop activities for visitors",
    ],
    image: wood,
    emoji: "🪑",
    items: [
      { name: "Ornate Wooden Chair", image: chair },
      { name: "Carved Wall Art", image: wallart },
      { name: "Temple Decor", image: temple },
    ],
  },
  {
    id: 8,
    name: "iTokri Stationery Makers",
    location: "Pan India",
    category: "Stationery & Gifts",
    story: `iTokri artisans create eco-friendly stationery from upcycled fabrics and handmade paper. Their journals and envelopes reduce waste and offer colorful, sustainable choices for everyday writing and gifting.`,
    highlights: [
      "Patchwork fabric cover notebooks",
      "Handmade envelopes",
      "Eco pen stands",
    ],
    image: paper,
    emoji: "📒",
    items: [
      { name: "Patchwork Journal", image: patchwork },
      { name: "Envelope Set", image: envelope },
      { name: "Eco Pen Stand", image: penstand },
    ],
  },
  {
    id: 9,
    name: "Kashmiri Shawl Makers",
    location: "Kashmir",
    category: "Fashion & Gifts",
    story: `Kashmiri artisans specialize in fine pashmina and Jamawar shawls, each piece reflecting generations of skill and luxury. Their work supports local communities and keeps the region’s cultural legacy alive.`,
    highlights: [
      "Pashmina wool shawls",
      "Embroidered Jamawar wraps",
      "Local community support",
    ],
    image: kashmir,
    emoji: "🧣",
    items: [
      { name: "Fine Pashmina Shawl", image: pashmina },
      { name: "Embroidered Wrap", image: wrap },
      { name: "Kashida Embroidery", image: kashida }
    ],
  },
  {
   id: 10,
    name: "Meena",
    location: "Tamil Nadu",
    category: "Jewelry & Accessories",
    story: `Meena crafts beautiful handmade silver jewelry blending traditional and modern designs. She empowers local women with her cooperative, offering workshops and selling her creations globally.`,
    highlights: [
      "Handcrafted silver earrings",
      "Traditional and modern jewelry styles",
      "Community workshops and training",
    ],
    image: meenaImg, // import this image at top
    emoji: "💍",
    items: [
      { name: "Silver Earrings", image: silverEarringsImg },
      { name: "Handmade Necklace", image: necklaceImg },
    ],
  },
];


export default function MeetTheMakers() {
  const [view, setView] = useState("main");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    category: "",
    material: "",
    story: ""
  });

 // === Pagination state ===
  const storiesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(makers.length / storiesPerPage);

  // Which makers to show on current page
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = makers.slice(indexOfFirstStory, indexOfLastStory);

  // Pagination handler
  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Sample category options
  const categoryOptions = [
    "Fashion",
    "Body Care & Furniture",
    "Stationery & Gifts",
    "Home Decor & Gifts",
    "Accessories",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setView("waiting");
  };

  if (view === "waiting") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50 p-6">
        <h1 className="text-3xl font-extrabold text-orange-600 mb-4">Thank you!</h1>
        <p className="text-lg text-gray-700 max-w-md text-center">
          Your story has been submitted successfully and is waiting for admin approval.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-orange-50 to-yellow-50 py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-4">
        Meet the Makers
      </h1>
      <p className="text-center text-gray-600 text-lg mb-12">
        Discover vibrant artisan stories and their beautiful crafts in fashion, body care, furniture, stationery, and gifts ✨
      </p>

      {/* STORY CARDS (paginated) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {currentStories.map((maker) => (
          <div key={maker.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
            <img src={maker.image} alt={maker.name} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">
                {maker.emoji} {maker.name} — {maker.location}
              </h3>
              <h4 className="text-md text-orange-500 mb-2">{maker.category}</h4>
              <p className="mt-3 text-gray-600">{maker.story}</p>
              <ul className="mt-4 text-left text-sm text-gray-700">
                {maker.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="flex flex-wrap justify-center mt-4">
                {maker.items.map((item, idx) => (
                  <div key={idx} className="mx-2 my-2">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover mb-2" />
                    <div className="text-xs text-gray-500">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION CONTROLS */}
      <div className="flex justify-center mt-10 mb-10">
        <nav className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : 'bg-orange-100 text-orange-600 hover:bg-orange-200'}`}
          >
            First
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : 'bg-orange-100 text-orange-600 hover:bg-orange-200'}`}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
            <button
              key={num}
              onClick={() => handlePageChange(num)}
              className={`px-3 py-1 rounded font-semibold ${num === currentPage ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-600 hover:bg-orange-200'}`}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-400' : 'bg-orange-100 text-orange-600 hover:bg-orange-200'}`}
          >
            Next
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-400' : 'bg-orange-100 text-orange-600 hover:bg-orange-200'}`}
          >
            Last
          </button>
        </nav>
      </div>

      {/* Button to open modal */}
      <div className="flex justify-center mt-2 mb-16">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition font-semibold"
        >
          Submit Your Story
        </button>
      </div>

      {/* Modal Popup for Form */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full relative">
            <button
              className="absolute top-3 right-4 text-orange-600 text-xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-orange-600 text-center">Submit Your Story</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="location"
                required
                placeholder="Your Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded bg-white"
              >
                <option value="">Select Category</option>
                {categoryOptions.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
              <input
                type="text"
                name="material"
                required
                placeholder="Product/Material (e.g. Silk, Bamboo, Tea)"
                value={formData.material}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
              <textarea
                name="story"
                required
                placeholder="Share your story"
                value={formData.story}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded resize-none"
                rows={5}
              />
              <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition font-semibold">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}