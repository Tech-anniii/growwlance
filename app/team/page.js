"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import {
  Sparkles,
  ArrowRight,
  Users,
  Trophy,
  Rocket,
  CheckCircle2,
  Target,
  Code2,
  TrendingUp,
  Globe2,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

import TiltCard from "@/components/TiltCard";

const team = [
  {
    name: "Yash Dwivedi",
    role: "Founder & Performance Marketer",
    image: "/team/member1.jpeg",
    bio: "Specializes in performance marketing, campaign strategy, and growth systems designed to help startups and brands scale online.",
    linkedin: "https://www.linkedin.com/company/growwlance",
    instagram: "https://www.instagram.com/yash._dbd_?igsh=Yml6NHp3YjFuemV5",
    portfolio: "https://fawn-lilac-25268747.figma.site/",
    gradient: "from-amber-500 to-orange-700",
    expertise: [
      "Performance Marketing",
      "Growth Strategy",
      "Campaign Optimization",
    ],
  },

  {
    name: "Aniket Singh",
    role: "Development Lead & Project Manager",
    image: "/team/member2-v2.jpeg",
    bio: "Leads technical execution and project delivery, building modern websites and digital products with a focus on performance and user experience.",
    linkedin:
      "https://www.linkedin.com/in/aniket-singh-baghel-1938b5253",
    instagram:
      "https://www.instagram.com/aniket_singh_baghel_?igsh=ZnlxeWQ1MnVzZzZl",
    portfolio: "https://tech-aniket.netlify.app/",
    gradient: "from-yellow-500 to-amber-700",
    expertise: [
      "Web Development",
      "Next.js & React",
      "Project Management",
    ],
  },

  {
    name: "Raghav Garg",
    role: "Social Media Manager & SEO Specialist",
    image: "/team/member3.jpeg",
    bio: "Focuses on improving digital visibility through SEO, content strategy, social media management, and audience-focused campaigns.",
    linkedin:
      "https://drive.google.com/drive/u/0/mobile/folders/1DET-47yGOFhFW0slHDxC_GSJ_IQ4qL6y?usp=sharing",
    instagram:
      "https://www.instagram.com/growwlance.in?igsh=MWlsZms4a21nMng4cA==",
    portfolio:
      "https://drive.google.com/drive/u/0/mobile/folders/1DET-47yGOFhFW0slHDxC_GSJ_IQ4qL6y?usp=sharing",
    gradient: "from-orange-500 to-stone-700",
    expertise: [
      "SEO Strategy",
      "Social Media",
      "Content Marketing",
    ],
  },
];

const strengths = [
  {
    icon: Target,
    title: "Strategy First",
    desc: "Every project starts with understanding your business goals, audience, market, and growth opportunities.",
  },
  {
    icon: Code2,
    title: "Creative + Technical",
    desc: "We combine marketing strategy, creative execution, and modern technology to build complete digital experiences.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    desc: "Our work is designed around visibility, engagement, conversions, and sustainable business growth.",
  },
];

const stats = [
  {
    value: "3+",
    label: "Core Specialists",
  },
  {
    value: "Digital",
    label: "Growth Focus",
  },
  {
    value: "End-to-End",
    label: "Execution",
  },
];

export default function TeamPage() {
  const reduceMotion = useReducedMotion();

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
      <section className="relative z-10 px-5 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 md:px-16">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduceMotion ? 0.3 : 0.8,
          }}
          className="mx-auto max-w-6xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2 backdrop-blur-xl">
            <Users className="h-4 w-4 text-amber-400" />

            <span className="text-sm text-gray-300">
              Meet the team behind Growwlance
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            The people behind
            <span className="mt-3 block bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              your digital growth.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg md:text-xl">
            Growwlance brings together strategy, marketing, technology, and
            creative execution to help businesses build stronger digital
            experiences and growth systems.
          </p>

          {/* HERO STATS */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-5 backdrop-blur-xl"
              >
                <p className="text-xl font-black text-amber-400 sm:text-2xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TEAM SECTION */}
      <section
        className="relative z-10 px-5 py-16 sm:px-6 sm:py-24 md:px-16"
        aria-labelledby="team-heading"
      >
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADER */}
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <Sparkles className="h-4 w-4 text-amber-400" />

              <span className="text-sm text-gray-300">
                Our Core Team
              </span>
            </div>

            <h2
              id="team-heading"
              className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl"
            >
              Different skills.
              <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                One growth-focused team.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
              From strategy and marketing to technology and execution, our
              team works together to turn ideas into effective digital
              experiences.
            </p>
          </div>

          {/* TEAM GRID */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {team.map((member, index) => (
              <TiltCard
                key={member.name}
                className="h-full"
              >
                <motion.article
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0.3 : 0.6,
                    delay: reduceMotion ? 0 : index * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] backdrop-blur-2xl transition duration-500 hover:border-amber-400/25"
                >
                  {/* CARD GLOW */}
                  <div
                    aria-hidden="true"
                    className={`absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-r ${member.gradient} opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`}
                  />

                  {/* IMAGE */}
                  <div className="relative aspect-[4/4.5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role} at Growwlance`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/10 to-transparent" />

                    {/* MEMBER NUMBER */}
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-sm font-medium text-amber-300 backdrop-blur-xl">
                      0{index + 1}
                    </div>

                    {/* ROLE OVERLAY */}
                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
                      <p className="text-xs uppercase tracking-[0.16em] text-amber-300">
                        Growwlance Team
                      </p>

                      <p className="mt-1 text-sm font-medium text-gray-200">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-2xl font-bold sm:text-3xl">
                      {member.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {member.bio}
                    </p>

                    {/* EXPERTISE */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn profile`}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-500"
                      >
                        <FaLinkedinIn className="text-base text-white" />
                      </a>

                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Instagram profile`}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-500"
                      >
                        <FaInstagram className="text-base text-white" />
                      </a>

                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} portfolio`}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-500"
                      >
                        <FaGlobe className="text-base text-white" />
                      </a>

                      <div className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/15 bg-amber-400/[0.05]">
                        <CheckCircle2 className="h-5 w-5 text-amber-400" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section
        className="relative z-10 px-5 py-16 sm:px-6 sm:py-24 md:px-16"
        aria-labelledby="why-team-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <Trophy className="h-4 w-4 text-amber-400" />

              <span className="text-sm text-gray-300">
                How We Work
              </span>
            </div>

            <h2
              id="why-team-heading"
              className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl"
            >
              Built around ideas,
              <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                execution, and growth.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
              Our approach combines strategic thinking with hands-on execution
              to create marketing and digital solutions that support real
              business objectives.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3 sm:mt-20">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0.3 : 0.6,
                    delay: reduceMotion ? 0 : index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -8,
                        }
                  }
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition hover:border-amber-400/20 sm:p-8"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-500/[0.06] blur-3xl transition group-hover:bg-amber-500/[0.12]" />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/20 to-orange-700/20">
                      <Icon className="h-6 w-6 text-amber-400" />
                    </div>

                    <h3 className="mt-7 text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-5 pb-20 pt-10 sm:px-6 sm:pb-28 md:px-16">
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
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-r from-amber-500/[0.12] via-orange-500/[0.08] to-yellow-500/[0.05] px-6 py-14 text-center backdrop-blur-2xl sm:px-10 sm:py-16 md:px-20 md:py-20"
        >
          <div
            aria-hidden="true"
            className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-amber-500/[0.1] blur-[120px]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-orange-500/[0.08] blur-[130px]"
          />

          <div className="relative z-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/[0.08]">
              <Rocket className="h-8 w-8 text-amber-400" />
            </div>

            <h2 className="mt-7 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Ready to build your
              <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                next growth system?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Have a project, campaign, website, or growth challenge in mind?
              Let's discuss how Growwlance can help.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(245,158,11,0.3)] transition hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(245,158,11,0.4)]"
              >
                Start a Project

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-white transition hover:bg-white/[0.07]"
              >
                <Globe2 className="h-5 w-5 text-amber-400" />

                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}