"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Clock3,
  ShieldCheck,
  Send,
  BriefcaseBusiness,
} from "lucide-react";

const whatsappNumber = "919243467007";

const whatsappMessage =
  "Hi Growwlance Team, I want to discuss a marketing or digital growth project for my business. Please share the next steps.";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

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

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "agencygrowlance@gmail.com",
    href: "mailto:agencygrowlance@gmail.com",
    description: "Tell us about your project or business goals.",
    accent: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 9243467007",
    href: "tel:+919243467007",
    description: "Speak directly with our team.",
    accent: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    icon: MapPin,
    title: "Based In",
    value: "India",
    href: null,
    description: "Working with businesses across India and beyond.",
    accent: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
  },
];

const features = [
  {
    icon: Clock3,
    title: "Fast Response",
    desc: "We aim to respond to project enquiries as quickly as possible.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Communication",
    desc: "You get a transparent process and clear next steps.",
  },
  {
    icon: CheckCircle2,
    title: "Growth Focused",
    desc: "Every strategy is aligned with your business objectives.",
  },
  {
    icon: MessageCircle,
    title: "Dedicated Support",
    desc: "Our team stays involved throughout the project journey.",
  },
];

export default function ContactPage() {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reduceMotion = useReducedMotion();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setStatusType("loading");
    setStatusMessage("Sending your message...");

    const formData = new FormData(form);

    const data = {
      name: formData.get("name")?.trim(),
      phone: formData.get("phone")?.trim(),
      email: formData.get("email")?.trim(),
      service: formData.get("service"),
      message: formData.get("message")?.trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (response.ok) {
        setStatusType("success");
        setStatusMessage(
          "Message sent successfully. Our team will get back to you soon."
        );

        form.reset();
      } else {
        setStatusType("error");
        setStatusMessage(
          json.error ||
            "We couldn't send your message. Please try again or contact us on WhatsApp."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatusType("error");
      setStatusMessage(
        "A network error occurred. Please try again or contact us on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.3 : 0.7,
      },
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-0 h-[550px] w-[550px] rounded-full bg-amber-500/[0.08] blur-[160px]" />

        <div className="absolute -bottom-40 -right-40 h-[550px] w-[550px] rounded-full bg-orange-500/[0.08] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative z-10 px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-amber-400" />

            <span className="text-sm text-gray-300">
              Let's Build Something Great
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            Ready to grow your
            <span className="mt-3 block bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              business online?
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg md:text-xl">
            Whether you need digital marketing, SEO, a high-performing website,
            creative branding, or AI automation, Growwlance can help you build
            a stronger digital growth system.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTACT AREA */}
      <section className="relative z-10 px-5 pb-20 sm:px-6 sm:pb-28 md:px-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* CONTACT INFORMATION */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/[0.1] blur-3xl"
              />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-500/10">
                  <BriefcaseBusiness className="h-6 w-6 text-amber-400" />
                </div>

                <h2 className="mt-7 text-3xl font-black">
                  Let's talk about your project
                </h2>

                <p className="mt-4 leading-7 text-gray-400">
                  Share your idea, current challenges, or growth goals. We'll
                  help you understand the right next steps for your business.
                </p>

                <div className="mt-9 space-y-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    const content = (
                      <>
                        <div
                          className={`flex h-13 w-13 min-h-[52px] min-w-[52px] items-center justify-center rounded-2xl border ${item.bg}`}
                        >
                          <Icon className={`h-6 w-6 ${item.accent}`} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 font-medium text-gray-200">
                            {item.value}
                          </p>

                          <p className="mt-1 text-sm leading-6 text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </>
                    );

                    return item.href ? (
                      <a
                        key={item.title}
                        href={item.href}
                        className="group flex items-start gap-4 rounded-2xl p-2 transition hover:bg-white/[0.03]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 rounded-2xl p-2"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* TRUST FEATURES */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0.3 : 0.5,
                      delay: reduceMotion ? 0 : index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-amber-400/20 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10">
                      <Icon className="h-5 w-5 text-amber-400" />
                    </div>

                    <h3 className="mt-5 font-semibold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {item.desc}
                    </p>
                  </motion.article>
                );
              })}
            </div>

            {/* QUOTE */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-r from-amber-500/[0.12] via-orange-500/[0.08] to-transparent p-7 backdrop-blur-2xl sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-amber-500/[0.1] blur-3xl"
              />

              <p className="relative text-lg font-medium leading-8 text-gray-200 sm:text-xl">
                “We don't just execute campaigns. We help businesses build
                digital systems designed for visibility, engagement, and
                growth.”
              </p>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl sm:p-8 md:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-orange-500/[0.1] blur-[100px]"
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/15 bg-amber-500/[0.06] px-4 py-2">
                <Send className="h-4 w-4 text-amber-400" />

                <span className="text-sm text-gray-300">
                  Project Enquiry
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl">
                Start your project
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                Tell us what you're looking to achieve. The more context you
                provide, the better we can understand your requirements.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6"
              >
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0B1120] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-300"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="Enter your phone number"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0B1120] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0B1120] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10"
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-gray-300"
                  >
                    What service are you interested in?
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0B1120] px-5 py-4 text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

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
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-300"
                  >
                    Tell us about your project
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    name="message"
                    placeholder="Tell us about your business, goals, project requirements, or challenges..."
                    required
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[#0B1120] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 px-6 py-4 font-semibold text-white shadow-[0_0_40px_rgba(245,158,11,0.25)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_0_55px_rgba(245,158,11,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      Sending your message...
                    </>
                  ) : (
                    <>
                      Send Project Enquiry

                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* STATUS */}
                {statusMessage && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`rounded-xl border px-4 py-3 text-center text-sm ${
                      statusType === "success"
                        ? "border-green-500/20 bg-green-500/10 text-green-300"
                        : statusType === "error"
                          ? "border-red-500/20 bg-red-500/10 text-red-300"
                          : "border-white/10 bg-white/[0.03] text-gray-300"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}

                <p className="text-center text-xs leading-5 text-gray-500">
                  By submitting this form, you agree to be contacted by the
                  Growwlance team regarding your enquiry.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="relative z-10 px-5 pb-20 sm:px-6 sm:pb-28 md:px-16">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduceMotion ? 0.3 : 0.7,
          }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-amber-500/[0.12] via-orange-500/[0.08] to-green-500/[0.08] px-6 py-14 text-center backdrop-blur-2xl sm:px-10 sm:py-16 md:px-20 md:py-20"
        >
          <div
            aria-hidden="true"
            className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-green-500/[0.08] blur-[120px]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-amber-500/[0.08] blur-[120px]"
          />

          <div className="relative z-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-green-400/20 bg-green-500/10">
              <MessageCircle className="h-8 w-8 text-green-400" />
            </div>

            <h2 className="mt-7 text-3xl font-black sm:text-4xl md:text-5xl">
              Prefer a quick conversation?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Connect with the Growwlance team directly on WhatsApp and start
              discussing your project.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-green-500 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(34,197,94,0.2)] transition hover:-translate-y-1 hover:bg-green-400"
            >
              Chat on WhatsApp

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}