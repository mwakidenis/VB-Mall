import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// User components
import UserAuth from "./User/pages/UserAuth/UserAuth";
import AboutUs from "./User/pages/AboutUs/Aboutus.jsx";
import Contributors from "./User/pages/Contributors/Contributors.jsx";
import Contact from "./User/pages/Contacts/Contact";
import Dashboard from "./User/pages/Dashboard/Dashboard";
import Home from "./User/pages/Home/Home";
import UserLayout from "./User/UserLayout";
import Team from "./User/components/Team/Team";
import Confirmation from "./User/pages/Confirmation/Confirmation";
import Cancellation from "./User/pages/Cancellation/Cancellation";
import OrderDetails from "./User/pages/Order/Orderdetails";
import MyOrders from "./User/pages/Order/MyOrders";
import DashboardOrders from "./User/pages/Dashboard/dashboard-order";
import DashboardCart from "./User/pages/Dashboard/dashboard-cart";
import DashboardWishlist from "./User/pages/Dashboard/dashboard-wishlist";
import Checkout from "./User/pages/Order/Checkout";
import Cart from "./User/pages/Order/Cart";
import Wishlist from "./User/pages/Order/Wishlist";
import Error from "./User/pages/404-Page/Error";
import ProductDetails from "./User/components/Products/ProductDetails";
import Help from "./User/pages/Help/Help";
import Privacy from "./User/pages/Privacy-Policy/Privacy";
import Payment from "./User/pages/Payment/Payment";
import MeetTheMakers from "./User/pages/MeetTheMakers/MeetTheMakers.jsx";

import ReturnAndCancellation from "./User/pages/ReturnAndCancellation/returnAndCancellation";
import EPR_Page from "./User/pages/EPRPage/EPR_Page";
import FAQ from "./User/pages/FAQ/Faq";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "./User/pages/TermsAndCondition/TermsAndCondition";
// import FeedbackButton from "./User/components/FeedbackForm/FeedBtn";
import FeedbackModal from "./User/components/FeedbackForm/Feedback";
import NotificationPage from "./User/pages/Dashboard/NotificationPage";
import ProfilePage from "./User/pages/Dashboard/ProfilePage";
import CareerPage from "./User/pages/Career-Page/careerPage.jsx";
import ServicePage from "./User/pages/Service-Page/service.jsx";
import Shipping from "./User/pages/Shipping/shipping";
import GiftCard from "./User/pages/Gift-Card/gift-card.jsx";
import Payment_Policy from "./User/pages/Payment-Policy/payment-policy.jsx";
import Certification from "./User/pages/Certification/Certification.jsx";
// Admin components
import AdminVerificationPage from "./User/pages/Admin-Verification/Admin.jsx";
import AdminLayout from "./Admin/AdminLayout";
import AdminLogin from "./Admin/Pages/AdminLogin";
import VigyForm from "./Admin/Pages/VigyForm";
import AdminPanel from "./Admin/Pages/AdminPanel";
import ProductForm from "./Admin/Pages/ProductForm";

// Latest In Market
import LatestInMarket from "./User/pages/Latest_in_the_Market/LatestInMarket";
import HandMadeSoaps from "./User/pages/Latest_in_the_Market/HandMadeSoaps";
import ArtSupplies from "./User/pages/Latest_in_the_Market/ArtSupplies";
import CeramicDinnerware from "./User/pages/Latest_in_the_Market/CeramicDinnerware";
import BambooProducts from "./User/pages/Latest_in_the_Market/BambooProducts";
import StorageBaskets from "./User/pages/Latest_in_the_Market/StorageBaskets";
import OrganicSoaps from "./User/pages/Latest_in_the_Market/OrganicSoaps";
import OrganicTea from "./User/pages/Latest_in_the_Market/OrganicTea";
import NaturalCosmetics from "./User/pages/Latest_in_the_Market/NaturalCosmetics";
import ForgotPasswordForm from "./User/pages/ForgotPasswordForm";

// Popular Categories
import PopularCategories from "./User/pages/Popular_Categories/Popular_Categories";
import BeautyWellness from "./User/pages/Popular_Categories/Beauty-Wellness";
import BodyCare from "./User/pages/Popular_Categories/Body-Care";
import CustomizedGifts from "./User/pages/Popular_Categories/Customized-Gifts";
import FashionAccessories from "./User/pages/Popular_Categories/Fashion-Accessories";
import FoodBeverages from "./User/pages/Popular_Categories/Food-Beverages";
import FurnitureDecor from "./User/pages/Popular_Categories/Furniture-Decor";
import HealthSupplements from "./User/pages/Popular_Categories/Health-Supplements";
import PrintingStationery from "./User/pages/Popular_Categories/Printing-Stationery";

import { Helmet } from "react-helmet-async";

// Additional pages
import Blog from "./User/pages/Blog/Blog.jsx";
import GiftcardPage from "./User/pages/AdditionalPages/GiftCardPage";
import Sponsorships from "./User/pages/Sponsorships/Sponsorships";
import Warranty from "./User/pages/Warranty/Warranty";
import ProductCare from "./User/pages/ProductCare/ProductCare";
import Subscription from "./User/pages/Subscription/Subscription";
import Events from "./User/pages/Events/Events";

export default function App() {
  return (
    <AuthProvider>
      <Helmet>
        {/* Botpress chatbot script */}
        <script src="https://cdn.botpress.cloud/webchat/v2/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/f910a06e-f7d4-4424-8642-e3cdffe933b5/webchat/v2/config.js"></script>
      </Helmet>
      <Routes>
        {/* User routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} /> {/* Home page route */}
          {/* Latest in the Market routes */}
          <Route path="latestInMarket" element={<LatestInMarket />} />
          <Route
            path="latestInMarket/handMadeSoaps"
            element={<HandMadeSoaps />}
          />
          <Route path="latestInMarket/artSupplies" element={<ArtSupplies />} />
          <Route
            path="latestInMarket/ceramicDinnerware"
            element={<CeramicDinnerware />}
          />
          <Route
            path="latestInMarket/bambooProducts"
            element={<BambooProducts />}
          />
          <Route
            path="latestInMarket/storageBaskets"
            element={<StorageBaskets />}
          />
          <Route
            path="auth/success"
            element={<StorageBaskets />}
          />
          <Route
            path="latestInMarket/organicSoaps"
            element={<OrganicSoaps />}
          />
          <Route path="latestInMarket/organicTea" element={<OrganicTea />} />
          <Route
            path="latestInMarket/naturalCosmetics"
            element={<NaturalCosmetics />}
          />
          {/* Popular Categories routes */}
          <Route path="popularCategories" element={<PopularCategories />} />
          <Route
            path="popularCategories/beautyWellness"
            element={<BeautyWellness />}
          />
          <Route path="popularCategories/bodyCare" element={<BodyCare />} />
          <Route
            path="popularCategories/customizedGifts"
            element={<CustomizedGifts />}
          />
          <Route
            path="popularCategories/fashionAccessories"
            element={<FashionAccessories />}
          />
          <Route
            path="popularCategories/foodBeverages"
            element={<FoodBeverages />}
          />
          <Route
            path="popularCategories/furnitureDecor"
            element={<FurnitureDecor />}
          />
          <Route
            path="popularCategories/healthSupplements"
            element={<HealthSupplements />}
          />
          <Route
            path="popularCategories/printingStationery"
            element={<PrintingStationery />}
          />
          {/* Other user routes */}
          <Route path="contributors" element={<Contributors />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="meet-the-makers" element={<MeetTheMakers />} />
          <Route path="help" element={<Help />} /> {/* Help page route */}
          <Route path="privacy-policy" element={<Privacy />} />
          {/* Privacy policy page route */}
          <Route path="cart" element={<Cart />} />
          <Route
            path="productDetails/:productId"
            element={<ProductDetails />}
          />{" "}
          {/* Product details route */}
          <Route path="wishlist" element={<Wishlist />} />
          {/* Wishlist page route */}
          <Route path="contact" element={<Contact />} />
          {/* Contact page route */}
          <Route path="forgot-password" element={<ForgotPasswordForm />} />
          {/* Forgot password page route */}
          <Route path="team" element={<Team />} /> {/* Team page route */}
          <Route path="auth" element={<UserAuth />} />
          {/* User authentication page route */}
          <Route path="vigy-login" element={<VigyForm />} />
          <Route path="faq" element={<FAQ />} /> {/* FAQ page route */}
          <Route path="terms-and-condition" element={<TermsAndConditions />} />
          {/* Terms and Conditions page route */}
          <Route path="feedback" element={<FeedbackModal />} />
          {/* Feedback page route */}
          <Route
            path="return-and-cancellation"
            element={<ReturnAndCancellation />}
          />
          <Route path="payment-policy" element={<Payment_Policy />} />
          {/* Return and Cancellation page route */}
          <Route path="epr-compliance" element={<EPR_Page />} />{" "}
          {/* EPR page route */}
          {/* Backward-compat: legacy URL */}
          <Route
            path="epr"
            element={<Navigate to="/epr-compliance" replace />}
          />
          <Route path="career" element={<CareerPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="gift-card" element={<GiftCard />} />
          {/* EPR page route */}
          {/* Private routes requiring authentication */}
          <Route element={<PrivateRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminPanel />} /> {/* Admin panel route */}
              <Route path="vigy-form" element={<VigyForm />} />
              {/* Admin Vigy form route */}
              <Route path="product-form" element={<ProductForm />} />
              {/* Admin product form route */}
            </Route>
            <Route path="dashboard" element={<Dashboard />} />
            {/* User dashboard route */}
            <Route path="confirm" element={<Confirmation />} />
            {/* Order confirmation route */}
            <Route path="cancel" element={<Cancellation />} />
            {/* Order cancellation route */}
            <Route path="orderDetails" element={<OrderDetails />} />
            {/* Order details route */}
            <Route path="myorders" element={<MyOrders />} />
            {/* Backward-compatibility redirects */}
            <Route
              path="my-orders"
              element={<Navigate to="/myorders" replace />}
            />
            <Route
              path="myOrders"
              element={<Navigate to="/myorders" replace />}
            />
            {/* My orders route */}
            <Route path="checkout" element={<Checkout />} />
            {/* Checkout route */}
            <Route path="productDetails" element={<ProductDetails />} />
            {/* Product details route */}
            <Route path="payment" element={<Payment />} /> {/* Payment route */}
            <Route path="dashboard-order" element={<DashboardOrders />} />
            {/* Dashboard orders route */}
            <Route path="dashboard-cart" element={<DashboardCart />} />
            {/* Dashboard cart route */}
            <Route path="dashboard-wishlist" element={<DashboardWishlist />} />
            {/* Dashboard wishlist route */}
            <Route
              path="dashboard-notifications"
              element={<NotificationPage />}
            />
            {/* Dashboard notifications route */}
            {/* Not in use routes */}
            <Route path="blog" element={<Blog />} />
            {/* additional routes */}
            <Route path="giftcard" element={<GiftcardPage />} />
            <Route path="sponsorships" element={<Sponsorships />} />
            <Route path="warranty" element={<Warranty />} />
            <Route path="productCare" element={<ProductCare />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="events" element={<Events />} />
            <Route path="profile" element={<ProfilePage />} />
            {/* Dashboard Profile route */}
          </Route>
          {/* Certification page route */}
          <Route path="certification" element={<Certification />} />
          {/* Backward-compat: legacy URL */}
          <Route
            path="certificate"
            element={<Navigate to="/certification" replace />}
          />
          {/* 404 Error page route */}
          <Route path="*" element={<Error />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} /> {/* Admin panel route */}
          <Route path="vigy-form" element={<VigyForm />} />
          {/* Admin Vigy form route */}
          <Route path="product-form" element={<ProductForm />} />
          {/* Admin product form route */}
        </Route>

        {/* Admin verification and login routes */}
        <Route path="admin-verification" element={<AdminVerificationPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </AuthProvider>
  );
}
