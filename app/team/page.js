"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const team = [
  {
    name: "XYZ",
    role: "Founder & Performance Marketer",
    image: "/team/member1.jpg",
    bio: "Specializes in scaling businesses using paid ads and conversion funnels.",
    linkedin: "https://linkedin.com/in/aniket-singh",
    twitter: "https://twitter.com/aniketsingh",
    portfolio: "https://github.com/aniketsingh",
  },
  {
    name: "XYZ",
    role: "SEO Specialist",
    image: "/team/member2.jpg",
    bio: "Expert in ranking websites and driving organic growth.",
    linkedin: "https://linkedin.com/in/rahul-sharma",
    twitter: "https://twitter.com/rahulsharma",
    portfolio: "https://github.com/rahulsharma",
  },
  {
    name: "XYZ",
    role: "Social Media Manager",
    image: "/team/member3.jpg",
    bio: "Builds engaging brands and manages high-performing social campaigns.",
    linkedin: "https://linkedin.com/in/priya-verma",
    twitter: "https://twitter.com/priyaverma",
    portfolio: "https://github.com/priyaverma",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-[#0B0F19] text-white">
      {/* HERO */}
      <section className="pt-28 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Meet Our <span className="text-amber-500">Team</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A team of experts dedicated to growing your business with proven strategies.
        </p>
      </section>

      {/* TEAM GRID */}
      <section className="px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-3 gap-8">

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg hover:scale-105 transition"
            >
              {/* Image */}
              <div className="relative w-full h-64 rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <h2 className="text-xl font-semibold mt-4">
                {member.name}
              </h2>
              <p className="text-amber-400 text-sm">
                {member.role}
              </p>

              <p className="text-gray-400 mt-3 text-sm">
                {member.bio}
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">
                  <FaLinkedin size={20} />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">
                  <FaTwitter size={20} />
                </a>
                <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">
                  <FaGithub size={20} />
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 text-center bg-linear-to-r from-amber-500/10 to-stone-700/10">
        <h2 className="text-4xl font-bold">
          Want to Work With Our Team?
        </h2>

        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-amber-500 rounded-xl">
            Book Call
          </button>
          <button className="px-6 py-3 border border-gray-600 rounded-xl">
            Contact Us
          </button>
        </div>
      </section>


    </div>
  );
}