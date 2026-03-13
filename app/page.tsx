"use client";

import Image from "next/image";
import BackGround from "../components/background";
import { Navbar, NavbarBrand, Button, NavbarToggle, NavbarCollapse, NavbarLink, Card } from "flowbite-react";
import { HiMail, HiPhone, HiCode, HiUser, HiLightningBolt } from "react-icons/hi"; // You may need to run: npm install react-icons

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden scroll-smooth text-white">
      
      <div className="fixed top-0 w-full z-50">
        <Navbar fluid rounded className="bg-black/50 backdrop-blur-md px-4 py-2.5">
          <div className="flex flex-1 justify-start">
            <NavbarBrand href="/">
              <span className="self-center whitespace-nowrap text-xl font-bold text-white">
                ELIASAF.G
              </span>
            </NavbarBrand>
          </div>

          <NavbarCollapse>
            <NavbarLink href="#home" active>Home</NavbarLink>
            <NavbarLink href="#about" className="text-white hover:text-blue-500">About</NavbarLink>
            <NavbarLink href="#skills" className="text-white hover:text-blue-500">Skills</NavbarLink>
            <NavbarLink href="#projects" className="text-white hover:text-blue-500">Projects</NavbarLink>
            <NavbarLink href="#contact" className="text-white hover:text-blue-500">Contact</NavbarLink>
          </NavbarCollapse>

          <div className="flex flex-1 justify-end md:order-2 gap-2">
            <Button color="blue" href="#contact">Hire Me</Button>
            <NavbarToggle />
          </div>
        </Navbar>
      </div>

      <div className="fixed inset-0 z-0">
        <BackGround />
      </div>

      <main className="relative z-10 pt-20">
        
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Eliasaf Gonzalez
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
            Full-Stack Developer 
          </p>
          <div className="mt-8 flex gap-4">
             <Button color="gray" href="https://docs.google.com/document/d/1t9ra-w36fju0r4uEroUzRHMHh6MPJck_Um5rfkTRvVc/edit?usp=sharing">View Resume</Button>
             <Button color="blue" href="#projects">See My Work</Button>
          </div>
        </section>

        <section id="about" className="py-20 px-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <HiUser className="text-blue-500 text-3xl" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am an entrepreneurial and technically skilled professional passionate about growing my barber shop business while creating a website and mobile app to enhance customer experience. With experience in automotive repair, small business management, and music performance, I combine hands-on technical skills with creative problem-solving and client-focused solutions.
          </p>
        </section>

        <section id="skills" className="py-20 px-8 max-w-5xl mx-auto bg-white/5 rounded-3xl backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-10 justify-center">
            <HiLightningBolt className="text-yellow-400 text-3xl" />
            <h2 className="text-3xl font-bold text-center">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Next.js', 'React', 'TypeScript', 'Bootstrap', 'Tailwind CSS', 'HTML', 'JS', 'C#'].map((skill) => (
              <div key={skill} className="p-4 border border-gray-700 rounded-xl hover:bg-blue-600 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </section>
        <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <HiCode className="text-purple-500 text-3xl" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <Card className="bg-gray-900 border-gray-800">
              <h5 className="text-2xl font-bold tracking-tight text-white">Game Development</h5>
              <p className="font-normal text-gray-400">Built an interactive game with extended RPS rules and responsive gameplay.</p>
              <Button href="https://blue-desert-0a8dcd81e.6.azurestaticapps.net/" color="blue">View Project</Button>
            </Card>
            {/* Project Card 2 */}
            <Card className="bg-gray-900 border-gray-800">
              <h5 className="text-2xl font-bold tracking-tight text-white">C# Challenge </h5>
              <p className="font-normal text-gray-400">Completed small C# coding exercises to practice logic, problem-solving, and programming fundamentals.</p>
              <Button href="https://wonderful-desert-0f7d1681e.4.azurestaticapps.net/" color="blue">View Project</Button>
            </Card>
             
          </div>
        </section>

        <footer id="contact" className="py-20 border-t border-gray-800 bg-black/80">
          <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                  <HiMail className="text-xl" /> eliasafgonzalez0@gmail.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                  <HiPhone className="text-xl" /> (925) 435-8147
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Socials</h3>
              <div className="flex gap-4">
                <Button color="gray" href="https://www.linkedin.com/in/eliasaf-gonzalez-886262326/" >LinkedIn</Button>
                <Button color="gray" href="https://github.com/247ELI" >GitHub</Button>
              </div>
            </div>
          </div>
          <p className="text-center mt-20 text-gray-600">© 2026 Eliasaf Gonzalez. Built with Next.js.</p>
        </footer>
      </main>
    </div>
  );
}