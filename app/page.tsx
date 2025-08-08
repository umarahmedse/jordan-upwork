"use client";

import React, { useState } from "react";

import Image from "next/image";
import localFont from "next/font/local";
const myFont2 = localFont({
  src: "../public/Dans.ttf",
});

const Page = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"Text" | "Social" | "Work">(
    "Text"
  );
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    community: "",
    phone: "",
  });

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const tabContent = {
    Text: {
      title:
        "Say it your way. The Michif AI Keyboard suggests words in Michif while you text — making it easier to share, connect, and practice with every message.",
      image: "https://i.ibb.co/PHCyZ4s/Group-36853.png",
    },
    Social: {
      title:
        "Show up in your language. On social media, whether you're posting, commenting, or replying — use Michif keywords to help you express yourself and show your Métis pride online.",
      image: "https://i.ibb.co/zh8FZ8Jb/Group-36861-1.png",
    },
    Work: {
      title:
        "Bring Michif to work. Use the Michif AI Keyboard and image translation feature in emails, workshops, and classrooms to keep the language active in professional and educational settings.",
      image: "https://i.ibb.co/kVtHsVp6/MICHIF-AI.png",
    },
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDownloadClick = () => {
    setIsDownloadModalOpen(true);
    setCurrentStep(1);
    setFormData({ name: "", community: "", phone: "" });
  };

  return (
    <div>
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex justify-start items-center">
            <div className="text-xl font-bold tracking-wider">MICHIF AI</div>
            {/* <nav className={myFont2.className}>
            <div className="flex gap-6">
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
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsAboutModalOpen(true);
                }}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Download
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsAboutModalOpen(true);
                }}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Register
              </a>
            </div>
          </nav> */}
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
          {/* <div className="absolute bottom-8 left-8 z-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2036860-WsjeJbzDRA8i0MusSQ5qOeZ5nmwNZ1.png"
            alt="QR Code - Scan to download"
            width={120}
            height={80}
            className="bg-white rounded-lg p-2 shadow-lg"
          />
        </div> */}

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
            <button
              onClick={handleDownloadClick}
              className="bg-white hover:cursor-pointer text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors mt-4"
            >
              Download
            </button>
          </div>
        </section>

        {/* Made for Everyday Use Section */}
        <div className={myFont2.className}>
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
            {/* <div className="absolute bottom-8 left-8 z-20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2036860-WsjeJbzDRA8i0MusSQ5qOeZ5nmwNZ1.png"
              alt="QR Code - Scan to download"
              width={120}
              height={80}
              className="bg-white rounded-lg p-2 shadow-lg"
            />
          </div> */}

            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Made for everyday use
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Phone Image */}
                <div className="flex-1 flex justify-center items-center">
                  <div className="relative w-[300px] h-[600px] lg:w-[400px] lg:h-[800px]">
                    <Image
                      src={tabContent[activeTab].image}
                      alt={`${activeTab} interface`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 300px, 400px"
                      priority
                    />
                  </div>
                </div>

                {/* Tab Content */}
                <div className="flex-1 max-w-lg">
                  {/* Tabs */}
                  <div className="flex gap-8 mb-8">
                    {Object.keys(tabContent).map((tab) => (
                      <button
                        key={tab}
                        onClick={() =>
                          setActiveTab(tab as keyof typeof tabContent)
                        }
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

                  {/* Tab Content Text */}
                  <div className="text-gray-300 text-lg leading-relaxed">
                    {tabContent[activeTab].title}
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
              {/* <div className="text-6xl md:text-8xl font-bold mb-4">6</div> */}
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                in all of your mobile platforms
              </h3>

              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                Use the Michif AI writing keyboard and translator directly on
                your iPhone or iPad – Download now, and translate all your words
                and pictures into michif
              </p>

              <button
                onClick={handleDownloadClick}
                className="bg-white hover:cursor-pointer text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Download
              </button>
            </div>
          </section>
        </div>
        {/* Footer */}
        <footer className="py-6 bg-black">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="text-xl font-bold tracking-wider">MICHIF AI</div>
            <div className={myFont2.className}>
              <div className="hidden gap-8 md:flex">
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
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/footer-logo.png"}
                width={50}
                height={50}
                alt="footer-icon"
              />
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
                Use the Michif AI writing keyboard and translator directly on
                your iPhone or iPad
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Download Modal */}
      {isDownloadModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsDownloadModalOpen(false)}
          />
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg p-8 max-w-lg mx-4 w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsDownloadModalOpen(false)}
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

            {/* Welcome Message */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Welcome!</h2>
              <p className="text-black text-sm leading-relaxed mb-4">
                Thank you for registering for Michif AI
              </p>
              <p className="text-black text-sm leading-relaxed mb-4">
                Stay Tuned for our official launch in the homeland of the Red
                River Métis this summer!
              </p>
              <p className="text-black text-sm leading-relaxed">
                MMF-National Government of the Red River Métis
              </p>
            </div>

            {/* Step Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full ${
                      step <= currentStep ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Form Steps */}
            <div className="space-y-6">
              {currentStep === 1 && (
                <div>
                  <label className="block text-black text-sm font-medium mb-2 uppercase tracking-wider">
                    What's your name?
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Louis Riel"
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent text-black placeholder-gray-400"
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <label className="block text-black text-sm font-medium mb-2 uppercase tracking-wider">
                    Your home community?
                  </label>
                  <input
                    type="text"
                    value={formData.community}
                    onChange={(e) =>
                      handleInputChange("community", e.target.value)
                    }
                    placeholder="R2C4R1"
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent text-black placeholder-gray-400"
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <label className="block text-black text-sm font-medium mb-2 uppercase tracking-wider">
                    Download via SMS?
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 000 000 000"
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent text-black placeholder-gray-400"
                  />
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  currentStep === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Back
              </button>

              {currentStep < 3 ? (
                <button
                  onClick={handleNextStep}
                  className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => {
                    // Handle form submission here
                    console.log("Form submitted:", formData);
                    setIsDownloadModalOpen(false);
                  }}
                  className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Other content here */}
    </div>
  );
};

export default Page;
