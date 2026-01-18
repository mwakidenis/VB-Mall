import { useState } from "react";
import OrderSummary from "../../components/Order/OrderSummary";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    pinCode: "",
    address: "",
    locality: "",
    saveAs: "home",
    defaultAddress: false,
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    const name = formData.name.trim();
    const mobile = formData.mobile.trim();
    const email = formData.email.trim();
    const pinCode = formData.pinCode.trim();
    const address = formData.address.trim();
    const locality = formData.locality.trim();
    const digitsOnly = /^\d+$/;

    const hasEmptyFields = !name || !mobile || !email || !pinCode || !address || !locality;
    const isMobileValid = digitsOnly.test(mobile) && mobile.length === 10;  
    const isEmailValid = email.includes("@") && email.includes(".") && email.length > 5;
    const isPinCodeValid = digitsOnly.test(pinCode) && pinCode.length === 6;
    if (hasEmptyFields || !isMobileValid || !isEmailValid || !isPinCodeValid) {
      e.preventDefault();
      setError(true);
      return;
    }
    setError(false);
    e.preventDefault();
    console.log(formData);
    navigate("/payment");
  };

  const ErrorMessage = () => {
    return (
      <div className="text-red-500 mt-4">
        <p>Please fill in all fields correctly before proceeding.</p>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#f5eee8] py-10 mt-1">
      <div className="container mx-auto p-6 shadow-lg rounded-lg mt-20 w-full" style={{ backgroundColor: "#f5eee8" }}>
        <div className="text-center mb-6">
          <h2 className="text-2xl items-center font-bold underline">Checkout</h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-0 md:pr-4 mb-6 md:mb-0">
            <div className="border p-4 rounded-lg mb-6" style={{ border: "2px solid green" }}>
              <p className="font-semibold mb-2">Default Address</p>
              <p>4-JHA-6, Vigyan Nagar, Kota, Rajasthan 324005</p>
            </div>
            <form
              onSubmit={handleSubmit}
              style={{ border: "2px solid green", padding: "13px 13px", borderRadius: "10px" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-700 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Mobile No</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-700 rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-green-700 rounded"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Pin Code</label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-700 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-700 rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Locality</label>
                <input
                  type="text"
                  name="locality"
                  value={formData.locality}
                  onChange={handleChange}
                  className="w-full p-2 border border-green-700 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Save Address As</label>
                <select
                  name="saveAs"
                  value={formData.saveAs}
                  onChange={handleChange}
                  className="w-full p-2 border border-green-700 rounded">
                  <option value="home">Home</option>
                  <option value="office">Office</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="defaultAddress"
                  checked={formData.defaultAddress}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="font-medium">Make Default Address</label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800 transition-colors duration-300">
                Use This Address
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/3">
            <OrderSummary />
              <button onClick={handleSubmit}
                className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800 transition-colors duration-300">
                Place Order
              </button>
            {error && <ErrorMessage />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
