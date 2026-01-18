import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import "./feedback.css";
import "./Sweetpopup.css";

const FeedbackModal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [rating, setRating] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackOption, setFeedbackOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const predefinedFeedbackOptions = [
    "Great service!",
    "Could be better.",
    "Needs improvement.",
    "Excellent experience.",
  ];

  const handleRatingChange = (value) => {
    setRating(value === rating ? null : value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackOptionChange = (e) => {
    const selectedOption = e.target.value;
    setFeedbackOption(selectedOption);
    if (selectedOption !== "Other") {
      setFeedback(selectedOption);
    } else {
      setFeedback("");
    }
  };

  const handleFeedbackChange = (e) => {
    if (feedbackOption === "Other") {
      setFeedback(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      rating,
      feedback,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, //Service_ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, //Template_ID
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID // User_ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setRating(null);
          setName("");
          setEmail("");
          setFeedback("");
          setFeedbackOption("");
          Swal.fire({
            title: "Feedback submitted successfully!",
            text: "Thanks for taking the time to share your thoughts!",
            icon: "success",
            confirmButtonText: "Back",
            customClass: {
              popup: "custom-popup",
              title: "custom-title",
              content: "custom-content",
              confirmButton: "custom-confirm-button",
            },
          });
        }, 1000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        Swal.fire({
          title: "Error submitting feedback",
          text: "There was an issue sending your feedback. Please try again later.",
          icon: "error",
          confirmButtonText: "Back",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
          },
        });
      });
  };

  const emojis = [
    "/emoji1.gif",
    "/emoji2.gif",
    "/emoji3.gif",
    "/emoji4.gif",
    "/emoji5.gif",
  ];
  const getEmoji = (ratingValue) => emojis[ratingValue - 1] || "😐";
  const gifs = [
      "/emoji1.gif",
      "/emoji2.gif",
      "/emoji3.gif",
      "/emoji4.gif",
      "/emoji5.gif",
  ];
  const getGif = (ratingValue) => gifs[ratingValue - 1] || "emoji3.gif"; // default to emoji3.gif if ratingValue is invalid

  return (
    <div className="feedback-wrapper">
      <div className="feedback-form">
        <div>
          <h2>Tell Us What You Think!</h2>
          <p>
            Share your thoughts on how we're doing and where we can enhance our
            service.
          </p>
          <div>
            <p htmlFor="rating" className="rate-para">
              <strong>Rate Us Below</strong>
            </p>
            <div
              style={{ textAlign: "center", width: "300px", margin: "0 auto" }}
              className="rating-container">
              {[1, 2, 3, 4, 5].map((ratingValue) => (
                <button
                  key={ratingValue}
                  type="button"
                  style={ratingValue <= rating ? { color: "#fff" } : {}}
                  onClick={() => handleRatingChange(ratingValue)}>
                  <img
                    className="text-sm"
                    src={getGif(ratingValue)}
                    alt={`loading..`}
                  />
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="label-big">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
              pattern="[a-zA-Z ]+"
              onInvalid={(e) => {
                e.target.setCustomValidity('Numbers and Symbols are not allowed.');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
            />
            <label htmlFor="email" className="label-big">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
            <label htmlFor="feedbackOption" className="label-big">
              Your Feedback
            </label>
            <div className="select-container">
              <select
                id="feedbackOption"
                value={feedbackOption}
                onChange={handleFeedbackOptionChange}
                required>
                <option value="" disabled>
                  Select your feedback
                </option>
                {predefinedFeedbackOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>
            {feedbackOption === "Other" && (
              <textarea
                id="feedback"
                rows="4"
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Let us know how we can improve..."
                required></textarea>
            )}
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
