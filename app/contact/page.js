"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const whatsappNumber = "919243467007";
const whatsappMessage =
  "Hi Growwlance Team, I want to discuss a marketing project for my business. Please share the next steps.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function ContactPage() {
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    "Performance Marketing",
    "SEO & Local Marketing",
    "Social Media Marketing",
    "Website / Funnel Design",
    "Content Creation",
    "Branding & Identity",
    "Influencer & PR Marketing",
    "Email & WhatsApp Marketing",
    "Custom Growth Strategy",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setStatusMessage("Sending...");

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (res.ok) {
        setStatusMessage("Message sent - we will contact you soon.");
        form.reset();
      } else {
        setStatusMessage(json.error || "Unable to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatusMessage("Network error - please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0B0F19] text-white px-6 md:px-16 py-28">

      {/* HERO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Let’s Build Something <span className="text-amber-500">Great</span>
        </h1>

        <p className="mt-4 text-gray-400">
          Tell us about your business and we’ll help you grow with the right strategy.
        </p>
      </motion.div>

      {/* MAIN SECTION */}
      <div className="mt-20 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE (INFO) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-gray-400 mt-2">
              We usually respond within 24 hours.
            </p>
          </div>

            <div className="space-y-4 text-gray-300">
              <p>📧 agencygrowlance@gmail.com </p>
              <p>📞 +91 9243467007</p>
              <p>📞 +91 7652313169</p>
              <p>📍 India</p>
            </div>

          {/* Highlight Card */}
          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg">
            <p className="text-gray-400">
              “We don’t just run campaigns — we build growth systems.”
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <form
            id="contact-form"
            className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="text-sm text-gray-400">Full Name</label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Phone Number</label>
              <input
                name="phone"
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Service Needed</label>
              <select
                name="service"
                id="service"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 focus:outline-none"
                defaultValue="Performance Marketing"
              >
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            <button
              type="submit"
              id="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-xl bg-linear-to-r from-amber-500 to-stone-700 hover:scale-105 hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            <p id="form-message" className="text-center text-sm mt-2">{statusMessage}</p>
          </form>
        </motion.div>
      </div>

      {/* EXTRA CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-bold">
          Prefer a Quick Chat?
        </h2>

        <p className="text-gray-400 mt-2">
          Connect with us instantly on WhatsApp.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 border border-gray-600 rounded-xl hover:bg-white/10 transition bg-green-500 text-white"
        >
          Chat on WhatsApp
        </a>
      </motion.div>

    </div>
  );
}