"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import TiltCard from "@/components/TiltCard";
import HoverRevealImage from "@/components/HoverRevealImage";

import {
  Sparkles,
  ArrowRight,
  Users,
  Trophy,
  Rocket,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

const team = [
  {
    name: "Yash Dwivedi",
    role: "Founder & Performance Marketer",
    image: "/team/member1.jpeg",
    bio: "Specializes in performance marketing and growth systems that help startups and brands scale faster.",
    linkedin: "https://www.linkedin.com/company/growwlance",
    instagram: "https://www.instagram.com/yash._dbd_?igsh=Yml6NHp3YjFuemV5",
    portfolio: "https://fawn-lilac-25268747.figma.site/",
    gradient: "from-amber-500 to-orange-700",
  },

  {
    name: "Aniket Singh",
    role: "Development Lead & Project Manager",
    image: "/team/member2.jpeg",
    bio: "Leads technical execution and delivers premium digital products with performance-focused architecture.",
    linkedin:
      "https://www.linkedin.com/in/aniket-singh-baghel-1938b5253",
    instagram:
      "https://www.instagram.com/aniket_singh_baghel_?igsh=ZnlxeWQ1MnVzZzZl",
    portfolio: "https://tech-aniket.netlify.app/",
    gradient: "from-yellow-500 to-amber-700",
  },

  {
    name: "Raghav Garg",
    role: "Social Media Manager & SEO Specialist",
    image: "/team/member3.jpeg",
    bio: "Optimizes digital visibility through strategic SEO, content marketing, and engaging social media campaigns.",
    linkedin:
      "https://drive.google.com/drive/u/0/mobile/folders/1DET-47yGOFhFW0slHDxC_GSJ_IQ4qL6y?usp=sharing",
    instagram:
      "https://www.instagram.com/growwlance.in?igsh=MWlsZms4a21nMng4cA==",
    portfolio:
      "https://drive.google.com/drive/u/0/mobile/folders/1DET-47yGOFhFW0slHDxC_GSJ_IQ4qL6y?usp=sharing",
    gradient: "from-orange-500 to-stone-700",
  },
];

export default function TeamPage() {
  return (
    <div className="relative overflow-hidden bg-[#050816] text-white">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-6 md:px-16 text-center z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* TAG */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

              <Sparkles className="w-4 h-4 text-amber-400" />

              <span className="text-sm text-gray-300">
                Meet The Experts Behind Growwlance
              </span>
            </div>
          </div>

          {/* HEADING */}
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
            The Team Driving
            <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
              Digital Growth
            </span>
          </h1>

          {/* DESC */}
          <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A passionate team of strategists, marketers, designers,
            and developers focused on building impactful digital
            experiences and scalable business growth.
          </p>
        </motion.div>
      </section>

     

      {/* TEAM GRID */}
      <section className="relative px-5 sm:px-6 md:px-16 py-20 sm:py-24 z-10">

        <div className="text-center mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Our Creative Team
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Combining creativity, technology, and strategy to help
            businesses scale in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10">

          {team.map((member, index) => (
            <TiltCard
              key={index}
              className="transition-transform duration-300"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
              >

                {/* CARD GLOW */}
                <div
                  className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-r ${member.gradient} opacity-20 blur-3xl`}
                />

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-t-[34px]">

                  <HoverRevealImage
                    src={member.image}
                    alt={member.name}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-90" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 p-7">

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-amber-300">
                    Team Member
                  </div>

                  <h2 className="mt-5 text-2xl font-bold">
                    {member.name}
                  </h2>

                  <p className="mt-2 text-amber-400 font-medium">
                    {member.role}
                  </p>

                  <p className="mt-5 text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* SOCIALS */}
                  <div className="flex items-center gap-4 mt-7">

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-amber-500 hover:border-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <FaLinkedinIn className="text-white text-lg" />
                    </a>

                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-orange-500 hover:border-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <FaInstagram className="text-white text-lg" />
                    </a>

                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-yellow-500 hover:border-yellow-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <FaGlobe className="text-white text-lg" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* WHY OUR TEAM */}
      <section className="relative px-5 sm:px-6 md:px-16 py-20 sm:py-24 z-10">

        <div className="text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Why Work With Us?
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            We combine creativity, marketing expertise, and technical
            execution to deliver measurable business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-16">

          {[
            {
              title: "Creative Strategy",
              desc: "Unique ideas and growth-focused campaigns tailored for every brand.",
            },

            {
              title: "Technical Expertise",
              desc: "Modern web technologies and scalable systems built for performance.",
            },

            {
              title: "Results Driven",
              desc: "Everything we do is focused on conversions, growth, and ROI.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-700/20 border border-amber-500/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative px-5 sm:px-6 md:px-16 pb-20 sm:pb-28 z-10">

        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-white/10 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-2xl p-8 sm:p-12 md:p-20 text-center">

          {/* GLOW */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-[120px]" />

          <div className="relative z-10">

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
              Want To Work With
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">
                Our Team?
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Let’s build something impactful together and grow your
              business with powerful digital strategies.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.35)]"
              >
                Book Free Call

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}