'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Project {
  name: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "Intro to Vibe Coding",
    description: "Forget intimidating syntax drills. This module is about setting up your environment for maximum flow state. We introduce modern tools and AI assistants that remove the friction from programming, teaching you how to think like a builder and prioritize creativity over memorization. Get ready to catch the vibe."
  },
  {
    name: "Build a Note-Taking App",
    description: "Construct your \"second brain.\" You will create a fully functional application from scratch. This acts as the perfect introduction to real-world app development, teaching you how to handle user input, manage state, and persist data so your ideas are never lost. It's practical, usable, and entirely yours."
  },
  {
    name: "Build a Flappy Bird Clone",
    description: "Gamify your learning. We dive into game development logic by recreating an addictive classic. You'll learn about game loops, simple physics, collision detection, and rendering graphics to the screen. It offers instant visual feedback and instant fun."
  },
  {
    name: "Build Career Tools with AI",
    description: "Stop searching for jobs and start engineering your career. Harness the power of Large Language Models (LLMs) by integrating AI APIs to build tools that solve real problems—think automated resume analyzers, personalized cover letter generators, or interview prep bots."
  },
  {
    name: "Build a Chrome Extension",
    description: "Stop just browsing the web and start hacking it. Learn how to inject code into existing websites and modify the browser experience. By building a custom extension, you'll understand the DOM and create a shareable tool that lives right in your user's toolbar."
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 300);

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      {/* Chapter 1: Introduction */}
      <section 
        ref={introRef}
        className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24"
        id="chapter-1"
      >
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-[10px] uppercase tracking-widest text-[#666] font-sans font-medium">
              Chapter 1 : Introduction
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight text-[#1a1a1a]">
              Crafting Digital Experiences With a Story to Tell.
          </h1>
            <p className="text-lg md:text-xl text-[#666] font-sans leading-relaxed max-w-xl">
              Designer & developer exploring the intersection of creativity and technology.
            </p>
            <a 
              href="#chapter-2" 
              className="inline-block mt-8 text-sm uppercase tracking-widest text-[#666] font-sans hover:text-[#1a1a1a] transition-colors duration-300"
              style={{ opacity }}
            >
              Scroll to Begin ↓
            </a>
          </div>
          <div className="hidden md:block">
            <div className="w-full aspect-[4/5] relative overflow-hidden">
              <Image
                src="/Manny.jpeg"
                alt="Portrait"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 0vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#e5e5e5] mx-12 lg:mx-24"></div>

      {/* Chapter 2: The Drive */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24" id="chapter-2">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="space-y-8 max-w-3xl">
            <p className="text-[10px] uppercase tracking-widest text-[#666] font-sans font-medium">
              Chapter 2 : The Drive
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight text-[#1a1a1a]">
              Why I Create.
            </h2>
            <p className="text-xl md:text-2xl italic font-serif text-[#666] leading-relaxed">
              Chasing what's possible, questioning what's expected.
            </p>
          </div>
          
          <div className="space-y-12 text-[#666] font-sans leading-relaxed max-w-4xl text-lg">
            <p>
              I work at the intersection of technology, storytelling, and trust.
            </p>
            <p>
              My career has been shaped by a simple question: <em>How do you make complex systems feel intuitive, credible, and human?</em> That question has taken me from global enterprises to hyper-growth startups, from sales engineering to solutions consulting, and from New York to Europe and Latin America.
            </p>
            <p>
              Today, I'm an Enterprise Solutions Consultant at Figma, where I help some of the world's largest organizations understand not just what a product does, but why it matters. I've led hundreds of demos, supported government and regulated customers, and helped close multi-million-dollar deals by translating technical depth into clear, compelling narratives. The work isn't about selling—it's about alignment.
            </p>
            <p>
              Before Figma, I served as a Senior Sales Engineer and Solutions Engineer across companies like Hopin, BetterCloud, and Staffbase, partnering with teams at Disney, McKinsey, Bloomberg, Peloton, and public-sector institutions. Across roles, I've consistently acted as a bridge—between customers and product, between engineering and business, and between vision and execution.
            </p>
            <p>
              My background blends technical fluency (HTML, CSS, JavaScript, React, APIs, analytics) with systems thinking, negotiation, and intercultural communication. With a master's degree in Intercultural Conflict Management and professional experience across regions and languages, I'm especially drawn to work that requires nuance—where context matters as much as code.
            </p>
            <p>
              At my core, I'm driven by clarity. I believe great experiences—whether products, demos, or conversations—are built through intention, iteration, and empathy.
            </p>
            <p className="text-xl font-medium text-[#1a1a1a] mt-12">
              I believe the best experiences don't shout.
            </p>
            <p className="text-xl font-medium text-[#1a1a1a]">
              They guide.
            </p>
          </div>

          {/* Visual elements */}
          <div className="grid md:grid-cols-2 gap-8 mt-24">
            <div className="w-full aspect-[4/3] relative overflow-hidden border border-[#e5e5e5]">
              <Image
                src="/objecthover.jpg"
                alt="UI wireframes illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full aspect-[4/3] relative overflow-hidden border border-[#e5e5e5]">
              <Image
                src="/objecthover.jpg"
                alt="Abstract isometric structure"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#e5e5e5] mx-12 lg:mx-24"></div>

      {/* Chapter 3: Selected Works */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24" id="chapter-3">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="space-y-8 max-w-3xl">
            <p className="text-[10px] uppercase tracking-widest text-[#666] font-sans font-medium">
              Chapter 3 : Selected Works
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight text-[#1a1a1a]">
              Projects That Made an Impact.
            </h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <article 
                key={index}
                className="border border-[#e5e5e5] p-8 md:p-12 hover:border-[#ccc] transition-colors duration-300 group"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                  <div className="w-full aspect-square bg-[#f0f0f0] border border-[#e5e5e5] flex items-center justify-center group-hover:bg-[#e8e8e8] transition-colors duration-300">
                    <div className="text-[#999] text-xs">Project Image</div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-sans font-semibold text-[#1a1a1a]">
                      {project.name}
                    </h3>
                    <p className="text-[#666] font-sans leading-relaxed text-base md:text-lg">
                      {project.description}
                    </p>
                    <a 
                      href="#" 
                      className="inline-block mt-4 text-sm font-sans text-[#666] hover:text-[#1a1a1a] transition-colors duration-300 group-hover:translate-x-1 inline-flex items-center gap-2"
                    >
                      View Case Study →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#e5e5e5] mx-12 lg:mx-24"></div>

      {/* Chapter 4: My Approach */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24" id="chapter-4">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="space-y-8 max-w-3xl">
            <p className="text-[10px] uppercase tracking-widest text-[#666] font-sans font-medium">
              Chapter 4 : My Approach
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight text-[#1a1a1a]">
              How I Think.
            </h2>
            <p className="text-lg md:text-xl text-[#666] font-sans leading-relaxed">
              Blending intuition with iteration. Design, <em>code</em>, <em>refine</em>, repeat.
            </p>
          </div>

          {/* Process breakdown */}
          <div className="grid md:grid-cols-3 gap-px border-t border-l border-[#e5e5e5]">
            <div className="bg-[#fafafa] p-12 border-r border-b border-[#e5e5e5]">
              <h3 className="text-sm uppercase tracking-widest font-sans font-semibold text-[#1a1a1a] mb-4">
                Ideate
              </h3>
              <p className="text-[#666] font-sans leading-relaxed">
                Conceptualize and explore
              </p>
            </div>
            <div className="bg-[#fafafa] p-12 border-r border-b border-[#e5e5e5]">
              <h3 className="text-sm uppercase tracking-widest font-sans font-semibold text-[#1a1a1a] mb-4">
                Build
              </h3>
              <p className="text-[#666] font-sans leading-relaxed">
                Craft with precision.
              </p>
            </div>
            <div className="bg-[#fafafa] p-12 border-r border-b border-[#e5e5e5]">
              <h3 className="text-sm uppercase tracking-widest font-sans font-semibold text-[#1a1a1a] mb-4">
                Elevate
              </h3>
              <p className="text-[#666] font-sans leading-relaxed">
                Enhance through detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#e5e5e5] mx-12 lg:mx-24"></div>

      {/* Chapter 5: Let's Connect */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24" id="chapter-5">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="space-y-8 max-w-3xl">
            <p className="text-[10px] uppercase tracking-widest text-[#666] font-sans font-medium">
              Chapter 5 : Let's Connect
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight text-[#1a1a1a]">
              Looking Forward.
            </h2>
            <p className="text-lg md:text-xl text-[#666] font-sans leading-relaxed">
              Ready to create something meaningful?
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <a 
              href="mailto:hello@example.com" 
              className="inline-block px-8 py-4 border border-[#e5e5e5] text-[#1a1a1a] font-sans hover:border-[#ccc] hover:bg-[#f5f5f5] transition-all duration-300"
            >
              Get In Touch
            </a>
            <div className="text-[#999] font-serif italic text-xl">
              Let's Make Something Great
            </div>
          </div>
        </div>
      </section>
      </main>
  );
}
