import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Contact = () => {
  const location = useLocation();
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (location.hash === "#contact") {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 112;
        const top =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [location]);

  function handleClick() {
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
    const message = import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xdklnjeq", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("✅ Thank you! Your message has been sent.");
      form.reset();
      
      // ⏳ Clear message after 3 seconds
      setTimeout(() => {
        setStatus("");
      }, 3000);
    } 
    else {
      setStatus("❌ Oops! Something went wrong, please try again.");
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };

  return (
    <div id="contact" className="pt-8 px-4 lg:px-16 pb-16 bg-white text-gray-800">
      <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-10 text-gray-800">
        Contact
      </h1>

      <h2 className="text-2xl sm:text-3xl text-center mb-6 text-gray-600">
        Get In Touch With Us
      </h2>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
        {/* Left: Contact Info */}
        <div className="flex flex-col items-center justify-start w-full lg:w-1/2">
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-600 transition duration-300 mb-8 w-full sm:w-auto"
            onClick={handleClick}
          >
            Chat with us on WhatsApp
          </button>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Urbanex Space</h2>

          <p className="text-lg sm:text-xl mb-3 text-center leading-relaxed">
            H-221 BLOCK-H
            <br />
            AYANAGAR 110047
            <br />
            NEW DELHI, INDIA
            <br />
            LANDMARK - NEAR CLC CHURCH
          </p>

          <p className="text-lg sm:text-xl mb-1 text-center font-medium">
            +91-8750161121
          </p>

          <p className="text-lg sm:text-xl mb-1 text-center font-medium">
            urbanexspace@gmail.com
          </p>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md"
          >
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="enquiry">
                Enquiry
              </label>
              <textarea
                id="enquiry"
                name="message"
                required
                rows="4"
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition"
            >
              Submit
            </button>
          </form>

          {/* Success/Error Message */}
          {status && (
            <p className="mt-4 text-green-600 font-semibold">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};
