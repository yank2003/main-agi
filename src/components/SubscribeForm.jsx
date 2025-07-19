import React from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";

const SubscribeForm = ({ isFooter = false }) => {
  const location = useLocation();
  const isContactUs = location.pathname === "/contact-us";

  const showContactUsLayout = !isFooter && isContactUs;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z4tvwgl",
        "template_wnuiuci",
        e.target,
        "j8B3qZWzHtApzZbJU"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex ${
        showContactUsLayout
          ? "flex-col gap-4"
          : "flex-col sm:flex-row gap-4 items-center justify-center max-w-xl mx-auto"
      }`}
    >
      <input
        type="email"
        name="user_email"
        placeholder={
          showContactUsLayout ? "you@example.com" : "Enter your email"
        }
        required
        className={`px-4 py-2 border border-gray-300 rounded ${
          showContactUsLayout ? "w-full" : "w-full sm:w-auto flex-1"
        }`}
      />
      <button
        type="submit"
        className={`bg-[#6e7174] text-white px-7 py-2 rounded hover:bg-[#1e1f1f] transition ${
          showContactUsLayout ? "mt-2 w-fit self-start" : ""
        }`}
      >
        {showContactUsLayout ? "Reach Us" : "Subscribe"}
      </button>
    </form>
  );
};

export default SubscribeForm;
