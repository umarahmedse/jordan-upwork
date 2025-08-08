"use client";

import { useState } from "react";
import Image from "next/image";

export default function MichifAI() {
  const [activeTab, setActiveTab] = useState("Text");
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const tabContent = {
    Text: {
      title:
        "Say it your way. The Michif AI Keyboard suggests words in Michif while you text — making it easier to share, connect, and practice with every message.",
      image: "https://i.ibb.co/PHCyZ4s/Group-36853.png",
    },
    Social: {
      title:
        "Show up in your language. On social media, whether you're posting, commenting, or replying — use Michif keywords to help you express yourself and show your Métis pride online.",
      image: "https://i.ibb.co/HfXsp1Dn/Group-36859.png",
    },
    Work: {
      title:
        "Bring Michif to work. Use the Michif AI Keyboard and image translation feature in emails, workshops, and classrooms to keep the language active in professional and educational settings.",
      image: "https://i.ibb.co/kVtHsVp6/MICHIF-AI.png",
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider">MICHIF AI</div>
          <nav>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsAboutModalOpen(true);
              }}
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://www.tworow.ai/videos/mmf.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Floating QR Code */}
        <div className="absolute bottom-8 left-8 z-20 bg-white rounded-lg p-4 shadow-lg">
          <div className="w-20 h-20 bg-black mb-2 flex items-center justify-center">
            <div className="w-16 h-16 bg-white p-1">
              <div className="w-full h-full bg-black relative">
                <div className="absolute inset-1 bg-white"></div>
                <div className="absolute inset-2 bg-black grid grid-cols-3 gap-px">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className={`bg-white ${
                        Math.random() > 0.5 ? "bg-black" : ""
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-black text-sm font-medium">Scan to download</p>
        </div>

        {/* Infinity Symbol */}
        <div className="absolute top-24 left-8 z-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-Yh6UVz5VdPp45JfdzpBIJNTkmXHIFN.png"
            alt="Infinity symbol"
            width={60}
            height={30}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            A modern way of learning
            <br />
            <span className="block">Michif</span>
          </h1>
        </div>
      </section>

      {/* Made for Everyday Use Section */}
      <section className="py-20 bg-black relative">
        {/* Infinity Symbol */}
        <div className="absolute top-8 left-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-Yh6UVz5VdPp45JfdzpBIJNTkmXHIFN.png"
            alt="Infinity symbol"
            width={60}
            height={30}
          />
        </div>

        {/* Floating QR Code */}
        <div className="absolute bottom-8 left-8 bg-white rounded-lg p-4 shadow-lg">
          <div className="w-20 h-20 bg-black mb-2 flex items-center justify-center">
            <div className="w-16 h-16 bg-white p-1">
              <div className="w-full h-full bg-black relative">
                <div className="absolute inset-1 bg-white"></div>
                <div className="absolute inset-2 bg-black grid grid-cols-3 gap-px">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className={`bg-white ${
                        Math.random() > 0.5 ? "bg-black" : ""
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-black text-sm font-medium">Scan to download</p>
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Made for everyday use
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* iPhone Mockup */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* iPhone UI */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-white flex items-center justify-center">
                      <div className="w-32 h-6 bg-black rounded-full"></div>
                    </div>

                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-2 mt-8 text-black text-sm">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                        </div>
                        <span>100%</span>
                      </div>
                    </div>

                    {/* Dynamic Content Based on Active Tab */}
                    <div className="px-4 py-4 h-full">
                      {activeTab === "Text" && (
                        <>
                          {/* Contact Header */}
                          <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">👤</span>
                            </div>
                            <span className="text-black font-medium">
                              Contact
                            </span>
                          </div>

                          {/* Messages */}
                          <div className="py-4 space-y-4">
                            <div className="flex justify-end">
                              <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs">
                                <p className="text-sm">
                                  Are you still looking to checkout Jazz
                                  festival tonight in Winnipeg?
                                </p>
                                <p className="text-xs text-blue-200 mt-1">
                                  Delivered
                                </p>
                              </div>
                            </div>

                            <div className="flex justify-start">
                              <div className="bg-gray-200 text-black px-4 py-2 rounded-2xl max-w-xs">
                                <p className="text-sm">
                                  Yup! I bought tickets already for all of us :)
                                  ❤️
                                </p>
                              </div>
                            </div>

                            <div className="flex justify-start">
                              <div className="bg-gray-200 text-black px-4 py-2 rounded-2xl max-w-xs">
                                <p className="text-sm">
                                  Awesome! Who are the artist
                                </p>
                              </div>
                            </div>

                            <div className="flex justify-start">
                              <div className="bg-gray-200 text-black px-4 py-2 rounded-2xl max-w-xs">
                                <p className="text-sm">
                                  lil portray ka shoopayhaahk
                                </p>
                                <p className="text-xs text-gray-500">artist</p>
                              </div>
                            </div>
                          </div>

                          {/* Keyboard */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-gray-100 rounded-lg p-2">
                              <div className="grid grid-cols-10 gap-1 mb-2">
                                {[
                                  "q",
                                  "w",
                                  "e",
                                  "r",
                                  "t",
                                  "y",
                                  "u",
                                  "i",
                                  "o",
                                  "p",
                                ].map((key) => (
                                  <button
                                    key={key}
                                    className="bg-white text-black p-2 rounded text-xs font-medium"
                                  >
                                    {key}
                                  </button>
                                ))}
                              </div>
                              <div className="grid grid-cols-9 gap-1 mb-2 px-2">
                                {[
                                  "a",
                                  "s",
                                  "d",
                                  "f",
                                  "g",
                                  "h",
                                  "j",
                                  "k",
                                  "l",
                                ].map((key) => (
                                  <button
                                    key={key}
                                    className="bg-white text-black p-2 rounded text-xs font-medium"
                                  >
                                    {key}
                                  </button>
                                ))}
                              </div>
                              <div className="grid grid-cols-7 gap-1 px-4">
                                {["z", "x", "c", "v", "b", "n", "m"].map(
                                  (key) => (
                                    <button
                                      key={key}
                                      className="bg-white text-black p-2 rounded text-xs font-medium"
                                    >
                                      {key}
                                    </button>
                                  )
                                )}
                              </div>
                              <div className="flex justify-center mt-2 gap-2">
                                <button className="bg-white text-black px-3 py-2 rounded text-xs">
                                  123
                                </button>
                                <button className="bg-white text-black px-8 py-2 rounded text-sm">
                                  space
                                </button>
                                <button className="bg-white text-black px-3 py-2 rounded text-xs">
                                  return
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {activeTab === "Social" && (
                        <div
                          className="h-full bg-cover bg-center relative"
                          style={{
                            backgroundImage:
                              "url(/placeholder.svg?height=600&width=300&query=autumn leaves background)",
                          }}
                        >
                          {/* Social Media Posts Overlay */}
                          <div className="absolute inset-0 bg-black/20"></div>

                          {/* Floating Social Posts */}
                          <div className="absolute top-20 left-4 right-4">
                            <div className="bg-white rounded-lg p-4 mb-4 shadow-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <span className="font-medium text-black">
                                  @tworow.ai
                                </span>
                              </div>
                              <p className="text-black text-sm">
                                I shakihi the community mixer you folks had last
                                week in Winnipeg! When is the next?
                              </p>
                            </div>

                            <div className="bg-white rounded-lg p-4 shadow-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <span className="font-medium text-black">
                                  @tworow.ai
                                </span>
                              </div>
                              <p className="text-black text-sm">
                                I shakihi the community mixer you folks had last
                                week in Winnipeg! When is the next?
                              </p>
                            </div>
                          </div>

                          {/* Keyboard Suggestion */}
                          <div className="absolute top-10 right-4">
                            <div className="bg-white rounded-lg p-3 shadow-lg">
                              <div className="text-black text-xs">
                                <div className="bg-blue-500 text-white px-2 py-1 rounded mb-1">
                                  shakihi
                                </div>
                                <div className="text-gray-600">
                                  love, appreciate, midnight diamond
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "Work" && (
                        <div className="h-full flex flex-col items-center justify-center bg-gray-50">
                          <div className="text-center mb-8">
                            <h3 className="text-black font-bold text-lg mb-4">
                              MICHIF AI
                            </h3>
                            <h4 className="text-black font-medium text-base mb-8">
                              Snap to Translate
                            </h4>

                            {/* Infinity Symbol */}
                            <div className="mb-12">
                              <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-Yh6UVz5VdPp45JfdzpBIJNTkmXHIFN.png"
                                alt="Infinity symbol"
                                width={80}
                                height={40}
                                className="mx-auto"
                              />
                            </div>
                          </div>

                          {/* Bottom Navigation */}
                          <div className="absolute bottom-20 left-4 right-4 flex justify-between">
                            <button className="text-black font-medium">
                              Translator
                            </button>
                            <button className="text-black font-medium">
                              Keyboard
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 max-w-lg">
              {/* Tabs */}
              <div className="flex gap-8 mb-8">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-lg font-medium transition-colors ${
                      activeTab === tab
                        ? "text-green-400 border-b-2 border-green-400 pb-2"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="text-gray-300 text-lg leading-relaxed">
                {tabContent[activeTab as keyof typeof tabContent].title}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover More Section */}
      <section className="py-20 bg-black relative">
        {/* Infinity Symbol */}
        <div className="absolute top-8 left-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-Yh6UVz5VdPp45JfdzpBIJNTkmXHIFN.png"
            alt="Infinity symbol"
            width={60}
            height={30}
          />
        </div>

        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Responsible AI
          </h2>
          <div className="text-6xl md:text-8xl font-bold mb-4">6</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            in all of your mobile platforms
          </h3>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Use the Michif AI writing keyboard and translator directly on your
            iPhone or iPad – Download now, and translate all your words and
            pictures into michif
          </p>

          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Download
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider">MICHIF AI</div>

          <div className="flex gap-8">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Tiktok
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Linkedin
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">MMF</span>
            </div>
            <div className="text-sm">
              <div className="font-medium">Manitoba Métis</div>
              <div className="text-gray-400">Federation</div>
            </div>
          </div>
        </div>
      </footer>

      {/* About Modal */}
      {isAboutModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsAboutModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            {/* Close Button */}
            <button
              onClick={() => setIsAboutModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Logo */}
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-red-600 rounded-full flex items-center justify-center border-4 border-red-800">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full relative">
                    <div className="absolute inset-1 bg-white rounded-full"></div>
                    <div className="absolute inset-2 bg-red-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
              We're on a mission to elevate the way communities learn Michif
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Use the Michif AI writing keyboard and translator directly on your
              iPhone or iPad
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
