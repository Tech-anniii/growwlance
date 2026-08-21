"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Car,
  Plane,
  Building2,
  Coffee,
  Code2,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Rocket,
  Layers3,
  Globe,
  Target,
} from "lucide-react";

const projects = [
  {
    id: "paraventure",
    title: "ParaVenture",
    category: "Adventure Booking Platform",
    description:
      "A modern paramotoring and adventure booking platform designed to help users discover experiences, explore packages, and move smoothly through the booking journey.",
    icon: Plane,
    tags: ["Next.js", "MongoDB", "Razorpay", "Responsive UI"],
    image: "/projects/paraventure.jpg",
    featured: true,
    status: "Featured Project",
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "quick-cargo",
    title: "Quick Cargo",
    category: "Transport Management System",
    description:
      "A smart logistics platform focused on vehicle and load matching, shipment workflows, route optimization, load management, and improving transportation operations.",
    icon: Car,
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    image: "/projects/quick-cargo.jpg",
    featured: true,
    status: "Featured Project",
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "luxe-spaces",
    title: "Luxe Spaces",
    category: "Website Concept",
    description:
      "A premium interior design and architecture website concept exploring immersive visuals, elegant layouts, service showcases, and conversion-focused lead generation.",
    icon: Building2,
    tags: ["Next.js", "Tailwind CSS", "GSAP", "UI/UX"],
    image: "/projects/luxe-spaces.jpg",
    featured: false,
    status: "Concept Project",
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "brew-bloom",
    title: "Brew & Bloom",
    category: "Restaurant Website Concept",
    description:
      "A modern café and restaurant website concept designed around menu discovery, brand storytelling, atmosphere, customer engagement, and online reservations.",
    icon: Coffee,
    tags: ["React", "Tailwind CSS", "Responsive", "SEO"],
    image: "/projects/brew-bloom.jpg",
    featured: false,
    status: "Concept Project",
    liveUrl: null,
    githubUrl: null,
  },
];

const capabilities = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and digital platforms designed around usability, performance, and business objectives.",
    icon: Globe,
  },
  {
    title: "Growth Strategy",
    description:
      "Digital marketing and conversion systems designed to connect attention, engagement, and measurable business outcomes.",
    icon: Target,
  },
  {
    title: "Creative Execution",
    description:
      "Visual design, content, branding, and digital experiences built to create a stronger online presence.",
    icon: Sparkles,
  },
];

export default function WorksPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/[0.08] blur-[150px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-500/[0.08] blur-[150px]" />

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
      <section className="relative z-10 px-5 pb-20 pt-28 sm:px-6 sm:pt-32 md:px-16 md:pb-28">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: reduceMotion ? 0.3 : 0.7 }}
          className="mx-auto max-w-7xl"
        >
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-amber-400" />

              <span className="text-sm text-gray-300">
                Selected Digital Projects
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
              Ideas transformed into
              <span className="mt-3 block bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h1>

            <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-base leading-8 text-gray-400 sm:text-lg md:text-xl">
                Explore selected websites, platforms, and digital product
                concepts built through a combination of strategy, design,
                technology, and conversion-focused thinking.
              </p>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <Layers3 className="h-5 w-5 text-amber-400" />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    {projects.length} Projects
                  </p>

                  <p className="text-xs text-gray-500">
                    Selected work & concepts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section
        aria-labelledby="projects-heading"
        className="relative z-10 px-5 pb-24 sm:px-6 md:px-16 md:pb-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
                Portfolio
              </p>

              <h2
                id="projects-heading"
                className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl"
              >
                Featured work and concepts.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-400 md:text-right">
              A selection of real project work and independent concepts created
              to explore different industries, user journeys, and digital
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0.3 : 0.6,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  viewport={{ once: true }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -8,
                        }
                  }
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-amber-400/30 hover:bg-white/[0.05]"
                >
                  {/* IMAGE */}
                  <div className="relative h-[280px] overflow-hidden border-b border-white/10 sm:h-[340px]">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.category} project by Growwlance`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />

                    {/* PROJECT NUMBER */}
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-sm font-medium text-amber-300 backdrop-blur-xl">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* STATUS */}
                    <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-gray-200 backdrop-blur-xl">
                      {project.status}
                    </div>

                    {/* ICON */}
                    <div className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
                      <Icon className="h-7 w-7 text-amber-400" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-400">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold transition-colors group-hover:text-amber-300 sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 leading-7 text-gray-400">
                      {project.description}
                    </p>

                    {/* TAGS */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* FOOTER */}
                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Code2 className="h-4 w-4" />

                        <span>Growwlance</span>
                      </div>

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 text-sm font-medium text-white"
                          aria-label={`View ${project.title} project`}
                        >
                          View Project

                          <ExternalLink className="h-4 w-4 text-amber-400 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                          Project showcase

                          <ArrowUpRight className="h-4 w-4 text-amber-400/70" />
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-10 flex items-center gap-3 rounded-2xl border border-amber-400/10 bg-amber-400/[0.03] p-5 text-sm text-gray-400">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />

            <p>
              Some projects shown here are design or development concepts
              created to demonstrate Growwlance capabilities across different
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.015] px-5 py-20 sm:px-6 md:px-16 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
              What Goes Into The Work
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
              More than visuals. Built around purpose.
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Every project brings together the right mix of design,
              technology, user experience, and digital strategy.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {capabilities.map((item, index) => {
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
                  className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/[0.06]">
                    <Icon className="h-6 w-6 text-amber-400" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-5 py-20 sm:px-6 md:px-16 md:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-amber-500/[0.12] via-orange-500/[0.06] to-transparent p-8 text-center backdrop-blur-2xl sm:p-12 md:p-16">
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]"
          />

          <div className="relative z-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 shadow-[0_0_35px_rgba(245,158,11,0.25)]">
              <Rocket className="h-8 w-8 text-white" />
            </div>

            <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
              Have a project in mind?
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Let&apos;s build something
              <span className="block bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                worth experiencing.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Tell us what you are building, improving, or trying to grow. We
              can explore the right combination of strategy, design, technology,
              and marketing for your project.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-700 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(245,158,11,0.3)] transition hover:-translate-y-0.5"
              >
                Start a Project

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 font-semibold text-gray-200 transition hover:bg-white/[0.08]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}