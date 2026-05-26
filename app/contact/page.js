"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  CheckCircle,
  MessageCircle,
  Clock3,
  ShieldCheck,
  Send,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const whatsappNumber = "919243467007";

const whatsappMessage =
  "Hi Growwlance Team, I want to discuss a marketing project for my business. Please share the next steps.";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

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
    "AI Automation Systems",
    "Graphic Design",
    "Video Editing & Reels",
    "Custom Growth Strategy",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    setIsSubmitting(true);
    setStatusMessage("Sending your message...");

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok) {
        setStatusMessage(
          "Message sent successfully. We’ll contact you soon."
        );

        form.reset();
      } else {
        setStatusMessage(json.error || "Unable to send message.");
      }
    } catch (err) {
      console.error(err);

      setStatusMessage(
        "Network error. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#050816] text-white">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-6 md:px-16 text-center z-10">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >

          {/* TAG */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

              <Sparkles className="w-4 h-4 text-amber-400" />

              <span className="text-sm text-gray-300">
                Let’s Build Something Amazing
              </span>
            </div>
          </div>

          {/* HEADING */}
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
            Let’s Grow Your

            <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
              Brand Together
            </span>
          </h1>

          {/* DESC */}
          <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Whether you need a powerful website, marketing strategy,
            AI automation, or creative branding — our team is ready
            to help your business scale faster.
          </p>
        </motion.div>
      </section>

      {/* MAIN SECTION */}
      <section className="relative px-5 sm:px-6 md:px-16 pb-20 sm:pb-28 z-10">

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >

            {/* CONTACT CARD */}
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8">

              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 blur-3xl" />

              <h2 className="text-3xl font-black">
                Get In Touch
              </h2>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Tell us about your project and goals. We’ll create a
                strategy designed specifically for your business growth.
              </p>

              {/* CONTACT INFO */}
              <div className="mt-10 space-y-6">

                {/* EMAIL */}
                <div className="flex items-start gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Email Address
                    </h3>

                    <p className="text-gray-400 mt-1">
                      agencygrowlance@gmail.com
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Phone Number
                    </h3>

                    <p className="text-gray-400 mt-1">
                      +91 9243467007
                    </p>

                    <p className="text-gray-400">
                      +91 7652313169
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Location
                    </h3>

                    <p className="text-gray-400 mt-1">
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">

              {[
                {
                  icon: Clock3,
                  title: "Fast Response",
                  desc: "We usually respond within 24 hours.",
                },

                {
                  icon: ShieldCheck,
                  title: "Trusted Solutions",
                  desc: "Growth-focused strategies for modern businesses.",
                },

                {
                  icon: CheckCircle,
                  title: "Transparent Process",
                  desc: "Clear communication and measurable results.",
                },

                {
                  icon: MessageCircle,
                  title: "Dedicated Support",
                  desc: "We guide you at every stage of growth.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6"
                >

                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-amber-400" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* QUOTE CARD */}
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/10 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-2xl p-6 sm:p-8">

              <div className="absolute top-0 left-0 w-40 h-40 bg-amber-500/10 blur-3xl" />

              <p className="relative text-xl text-gray-200 leading-relaxed font-medium">
                “We don’t just run campaigns — we create scalable
                digital growth systems for ambitious brands.”
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[30px] sm:rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8 md:p-10"
          >

            {/* GLOW */}
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-orange-500/10 blur-3xl" />

            <div className="relative z-10">

              <h2 className="text-2xl sm:text-3xl font-black">
                Start Your Project
              </h2>

              <p className="mt-3 text-gray-400">
                Fill out the form below and our team will contact you shortly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6"
              >

                {/* NAME */}
                <div>
                  <label className="text-sm text-gray-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className="w-full mt-2 px-5 py-4 rounded-2xl bg-[#0B1120] border border-white/10 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm text-gray-400">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    className="w-full mt-2 px-5 py-4 rounded-2xl bg-[#0B1120] border border-white/10 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm text-gray-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full mt-2 px-5 py-4 rounded-2xl bg-[#0B1120] border border-white/10 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label className="text-sm text-gray-400">
                    Select Service
                  </label>

                  <select
                    name="service"
                    className="w-full mt-2 px-5 py-4 rounded-2xl bg-[#0B1120] border border-white/10 focus:outline-none focus:border-amber-400 transition"
                  >
                    {serviceOptions.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm text-gray-400">
                    Project Details
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Tell us about your project..."
                    required
                    className="w-full mt-2 px-5 py-4 rounded-2xl bg-[#0B1120] border border-white/10 focus:outline-none focus:border-amber-400 transition resize-none"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 font-semibold hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.35)]"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message

                      <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
                    </>
                  )}
                </button>

                {/* STATUS */}
                {statusMessage && (
                  <p className="text-center text-sm text-gray-300">
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="relative px-5 sm:px-6 md:px-16 pb-20 sm:pb-28 z-10">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-white/10 bg-gradient-to-r from-amber-500/10 to-green-500/10 backdrop-blur-2xl p-8 sm:p-12 md:p-20 text-center"
        >

          <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 blur-[120px]" />

          <div className="relative z-10">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
              Prefer a Quick Chat?
            </h2>

            <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto">
              Connect instantly with our team on WhatsApp and discuss your project directly.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              Chat on WhatsApp

              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}