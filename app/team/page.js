"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";
import HoverRevealImage from "@/components/HoverRevealImage";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const team = [
  {
    name: "Yash Dwivedi",
    role: "Founder & Performance Marketer",
    image: "/team/member1.jpeg",
    bio: "Specializes in performance marketing, driving growth for startups and brands.",
    linkedin: "https://www.linkedin.com/company/growwlance",
    instagram: "https://www.instagram.com/yash._dbd_?igsh=Yml6NHp3YjFuemV5",
    portfolio: "https://fawn-lilac-25268747.figma.site/",
  },
  {
    name: "Aniket Singh",
    role: "Development Lead & Project Manager",
    image: "/team/member2.jpeg",
    bio: "Leads technical execution and ensures projects are delivered on time with quality.",
    linkedin: "https://www.linkedin.com/in/aniket-singh-baghel-1938b5253",
    instagram: "https://www.instagram.com/aniket_singh_baghel_?igsh=ZnlxeWQ1MnVzZzZl",
    portfolio: "https://tech-aniket.netlify.app/",
  },
  {
    name: "Raghav Garg",
    role: "Social Media Manager & SEO Specialist",
    image: "/team/member3.jpeg",
    bio: "Manages social media presence and optimizes content for search engines.",
    linkedin: "https://drive.google.com/drive/u/0/mobile/folders/1DET-47yGOFhFW0slHDxC_GSJ_IQ4qL6y?usp=sharing",
    instagram: "https://www.instagram.com/growwlance.in?igsh=MWlsZms4a21nMng4cA==",
    portfolio: "https://drive.google.com/drive/u/0/mobile/folders/1DET-47yGOFhFW0slHDxC_GSJ_IQ4qL6y?usp=sharing",
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
            <TiltCard key={index} className="transition-transform duration-300">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg hover:scale-105 transition"
              >
                {/* Image with hover-reveal (desktop) */}
                <HoverRevealImage
                  src={member.image}
                  alt={member.name}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

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
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">
                    <FaInstagram size={20} />
                  </a>
                  <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">
                    <FaGithub size={20} />
                  </a>
                </div>
              </motion.div>
            </TiltCard>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 text-center bg-linear-to-r from-amber-500/10 to-stone-700/10">
        <h2 className="text-4xl font-bold">
          Want to Work With Our Team?
        </h2>

        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl btn-primary">
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