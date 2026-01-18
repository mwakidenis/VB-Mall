import React, { useState } from "react";
import Aside from "../../components/Aside/Aside";
import copy from "../../../assets/copy.png";
import toast from "react-hot-toast";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./model.css";
import "./profile.css";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    profilePicture:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg", // Sample avatar URL
  });

  const DeactivateAccount = () => (
    <Popup
      trigger={
        <button className="button text-blue-500 font-bold text-sm hover:cursor-pointer">
          Deactivate Account
        </button>
      }
      modal
      nested>
      {(close) => (
        <div className="modal p-4">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="content">
            <h1 className="text-[14px] font-bold">
              When You <b>Deactivate</b> Your VigyBag Account
            </h1>
            <br />
            <ul className="text-xsm">
              <li>You are logged out of your VigyBag account.</li>
              <br />
              <li>Your public profile on VigyBag is no longer visible.</li>
              <br />
              <li>
                Your reviews/ratings are still visible, but your profile
                information is shown as ‘unavailable’ due to deactivation.
              </li>
              <br />
              <li>
                Your wishlist items are no longer accessible through the
                associated public hyperlink. The wishlist is shown as
                ‘unavailable’ due to deactivation.
              </li>
              <br />
              <li>
                You will be unsubscribed from receiving promotional emails from
                VigyBag.
              </li>
              <br />
              <li>
                Your account data is retained and can be restored if you choose
                to reactivate your account.
              </li>
            </ul>
            <br />

            <h1 className="text-[14px] font-bold">
              How Do I Reactivate My VigyBag Account?
            </h1>
            <p>Reactivation is easy.</p>
            <br />
            <ul>
              <li>
                Simply log in with your registered email ID or mobile number and
                the password used prior to deactivation. Your account data will
                be fully restored.
              </li>
              <br />
              <li>
                Default settings will be applied, and you will be subscribed to
                receive promotional emails from VigyBag.
              </li>
              <br />
            </ul>
            <p>
              VigyBag retains your account data so you can conveniently resume
              from where you left off if you decide to reactivate your account.
            </p>
            <p>
              <strong>Remember:</strong> Account reactivation can be done only
              on the desktop version.
            </p>
          </div>
          <div className="actions">
            <button
              className="button bg-blue-600 text-white p-4 font-bold rounded-md"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}>
              CONFIRM DEACTIVATION
            </button>
          </div>
        </div>
      )}
    </Popup>
  );

  const DeleteAccount = () => (
    <Popup
      trigger={
        <button className="button text-red-600 font-bold text-sm">
          Delete Account
        </button>
      }
      modal
      nested>
      {(close) => (
        <div className="modal p-4">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="content">
            <p className="text-xsm">
              Please note that once you choose to <b>delete</b> your account
              with VigyBag (“Platform”), your account will no longer be
              available to you and you will not be able to activate, restore, or
              use the account again.
            </p>
            <p className="text-xsm">
              In case you are not sure about deleting your account, you may
              instead deactivate your account.
            </p>
            <p className="text-xsm">
              When you deactivate your account, you are logged out of your
              account, your public profile on the Platform is no longer visible,
              your wishlist items are no longer accessible through the
              associated public hyperlink, and you will be unsubscribed from
              receiving promotional emails.
            </p>

            <h2 className="text-xsm font-bold">
              If you wish to proceed with an account deletion request, please
              ensure that you have read and understood the following:
            </h2>
            <ul className="text-xsm">
              <li>
                There are no pending orders, cancellations, returns, refunds, or
                other requests (“Transactions”). If there are pending
                Transactions, please raise your account deletion request once
                the Transactions are completed.
              </li>
              <li>
                If you hold any subscription or membership, you will lose all
                benefits and rewards associated with it immediately upon
                deletion of the account.
              </li>
              <li>
                You have exhausted or do not intend to use SuperCoins, Gift
                Cards, or any such reward points or balances associated with
                your account. Please note that once your account is deleted, you
                will not be able to access any such reward points.
              </li>
              <li>
                You will not be able to access or request to access order
                history, profile, wishlists, saved addresses, previous orders
                and invoices, saved or preferred payment methods, content,
                images, or use any of the products and services offered by the
                Platform immediately on deletion and will have to create a new
                account to use products and services offered by us.
              </li>
              <li>
                The Platform may choose to refuse deletion of your account in
                case you have any legal dispute, or grievances related to
                pending payments to your orders, shipments or deliveries, credit
                lines, etc.
              </li>
              <li>
                The Platform may retain certain data for legitimate reasons
                (towards enforcement of legal rights or regulatory compliance)
                such as security, fraud prevention, future abuse, and regulatory
                compliance including the exercise of legal rights or comply with
                legal orders under applicable laws.
              </li>
              <li>
                After your account is deleted, if you log into the Platform
                using the same phone number or email ID, a fresh new account
                will be created and your old account data will not be
                accessible.
              </li>
              <li>
                Please uninstall the VigyBag App after your account is deleted
                to stop receiving any notifications from VigyBag. Notifications
                are app-level settings and uninstalling the app is required to
                stop the notifications.
              </li>
            </ul>
            <p>
              You acknowledge that you have read our
              <a href="/terms">Terms of Use</a> and
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>
            <p>
              <br />
              <hr />
              <br />
              <input type="checkbox" id="agree" name="agree" />I have read and
              agreed to the Terms and Conditions.
            </p>

            <h2>Please tell us why you’re leaving us</h2>
            <textarea id="feedback" name="feedback" rows="4" cols="50" />
          </div>
          <div className="actions">
            <button
              className="button bg-red-600 p-2 text-white text-sm rounded-md"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}>
              Delete Account
            </button>
          </div>
        </div>
      )}
    </Popup>
  );

  const [couponVisibility, setCouponVisibility] = useState([false, false]); // State for coupon visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const copyText = (text) => {
    toast("Copied to Clipboard!");
    navigator.clipboard.writeText(text);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: e.target.files[0],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and file upload here
    console.log("Form data:", formData);
  };

  const toggleCouponVisibility = (index) => {
    setCouponVisibility((prevVisibility) =>
      prevVisibility.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const getProfilePicture = () => {
    if (typeof formData.profilePicture === "string") {
      return formData.profilePicture;
    } else {
      return URL.createObjectURL(formData.profilePicture);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fff1e6]">
      {/* Sidebar */}
      <Aside />

      {/* Main Content */}
      <main className="flex-1 bg-white p-6 mt-20 flex flex-col md:flex-row justify-center md:justify-center">
        {/* Left Section */}
        <div className="flex-1 mr-6 justify-center items-center shadow-2xl p-3 md:w-[50vw] w-full bg-green-50">
          <h1 className="text-2xl font-bold mb-6 text-green-800 ">
            Personal Information
          </h1>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="relative w-32 h-32 mb-4 md:mb-0 md:mr-4">
              <img
                src={getProfilePicture()}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <label
                htmlFor="fileUpload"
                className="text-white bg-blue-400 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
                Upload
              </label>
              <input
                type="file"
                id="fileUpload"
                className="hidden"
                onChange={handleFileChange}
              />
              <button className="bg-yellow-500 text-white border px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out">
                Save
              </button>
            </div>
          </div>
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-lg font-bold font-baloo text-gray-700 mb-2">
                Full Name
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="block w-[40vw] border border-gray-300  shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm p-3"
                  style={{ backgroundColor: "#ffffff", borderColor: "#ffffff" }}
                />
                <button className="ml-2 text-blue-600 px-4 py-2 transition duration-300 ease-in-out">
                  Edit
                </button>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-lg font-bold font-baloo text-gray-700 mb-2">
                Select your gender:
              </label>
              <input type="radio" id="male" name="gender" value="male" />
              <label className="pr-5" for="male">
                Male
              </label>

              <input type="radio" id="female" name="gender" value="female" />
              <label className="pr-5" for="female">
                Female
              </label>

              <input type="radio" id="other" name="gender" value="other" />
              <label className="pr-5" for="other">
                Other
              </label>

              <input
                type="radio"
                id="prefer_not_to_say"
                name="gender"
                value="prefer_not_to_say"
              />
              <label className="pr-5" for="prefer_not_to_say">
                Prefer not to say
              </label>
              <br />
              <div className="flex items-center"></div>
            </div>
            <div className="mb-5">
              <label className="block text-lg font-bold font-baloo text-gray-700 mb-2">
                Mobile Number
              </label>
              <div className="flex items-center">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="block w-[40vw] border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm p-3"
                  style={{ backgroundColor: "#ffffff", borderColor: "#ffffff" }}
                />
                <button className="ml-2 text-blue-600 px-4 py-2 transition duration-300 ease-in-out">
                  Edit
                </button>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-lg font-bold font-baloo text-gray-700 mb-2">
                Email
              </label>
              <div className="flex items-center">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="block w-[40vw] border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm p-3"
                  style={{ backgroundColor: "#ffffff", borderColor: "#ffffff" }}
                />
                <button className="ml-2 text-blue-600 px-4 py-2  transition duration-300 ease-in-out">
                  Edit
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start md:gap-96  space-y-4 md:space-y-0">
              <button className="bg-blue-400 text-white border px-4 py-2 rounded-md hover:bg-blue-300 transition duration-300 ease-in-out">
                Change/Update Password
              </button>
              <button className="bg-yellow-500 text-white  px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out">
                Save
              </button>
            </div>
          </form>

          <div className="mt-7">
            <h1 className="font-bold text-black text-lg">FAQs</h1>
            <br />

            <div class="faq">
              <h2 className="font-bold text-gray-700 text-sm">
                What happens when I update my email address (or mobile number)?
              </h2>
              <br />
              <p className="text-sm">
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account related communication on your updated
                email address (or mobile number).
              </p>
            </div>
            <br />

            <div class="faq">
              <h2 className="font-bold text-gray-700 text-sm">
                When will my VigyBag account be updated with the new email
                address (or mobile number)?
              </h2>
              <br />
              <p className="text-sm">
                It happens as soon as you confirm the verification code sent to
                your email (or mobile) and save the changes.
              </p>
            </div>
            <br />

            <div class="faq">
              <h2 className="font-bold text-gray-700 text-sm">
                What happens to my existing VigyBag account when I update my
                email address (or mobile number)?
              </h2>
              <br />
              <p className="text-sm">
                Updating your email address (or mobile number) doesn't
                invalidate your account. Your account remains fully functional.
                You'll continue seeing your Order history, saved information and
                personal details.
              </p>
            </div>
            <br />

            <div class="faq">
              <h2 className="font-bold text-gray-700 text-sm">
                Does my Seller account get affected when I update my email
                address?
              </h2>
              <br />
              <p className="text-sm">
                VigyBag has a 'single sign-on' policy. Any changes will reflect
                in your Seller account also.
              </p>
            </div>
          </div>
          <br />
          <br />

          <DeactivateAccount />
          <br />
          <br />
          <DeleteAccount />
          <br />
          <br />
          {/* <img className="w-full h-[25vh]" src={profilefooter} alt="footer" /> */}
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 mt-6 md:mt-7 flex-shrink-0">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-zinc-800">Coins : 100 🪙</h2>
          </div>
          <div className="p-4 shadow-lg rounded-md bg-green-50">
            <h2 className="text-xl font-bold text-zinc-800">My Coupons :</h2>
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="flex items-center mb-4">
                <div class="input-container">
                  <input
                    type="text"
                    readOnly
                    value={couponVisibility[index] ? "ABC123" : "******"}
                    className="block w-48 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm p-2 mr-4"
                    style={{
                      backgroundColor: "#e0f7e0",
                      borderColor: "#c4e4c4",
                      fontSize: "14px",
                    }}
                    id="couponInput"
                  />
                  <img
                    onClick={() => {
                      copyText("ABC123");
                    }}
                    src={copy}
                    alt="coupon"
                    class="input-image"
                    id="couponImage"
                  />
                </div>
                <button
                  onClick={() => toggleCouponVisibility(index)}
                  className="bg-pink-300 text-blue  px-3 py-1 rounded-md hover:bg-pink-300 transition duration-300 ease-in-out">
                  {couponVisibility[index] ? "Hide Coupon" : "Show Coupon"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
