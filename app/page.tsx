'use client'

import { useState } from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Jordan App',
  description: 'A modern way of learning Michif',
}

export default function MichifAI() {
  const [activeTab, setActiveTab] = useState('Text')

  const tabContent = {
    Text: {
      title: "Say it your way. The Michif AI Keyboard suggests words in Michif while you text — making it easier to share, connect, and practice with every message.",
    },
    Social: {
      title: "Connect with your community using authentic Michif expressions on all your social platforms — from Facebook to Instagram to TikTok.",
    },
    Work: {
      title: "Bring Michif into your professional communications with intelligent suggestions that help you express yourself authentically in any work context.",
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider">
            MICHIF AI
          </div>
          <nav>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
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
            <source src="https://www.tworow.ai/videos/mmf.mp4" type="video/mp4" />
          </video>
          {/* Fallback image */}
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            A modern way of learning<br />
            <span className="block">Michif</span>
          </h1>
        </div>
      </section>

      {/* Made for Everyday Use Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Made for Everyday Use
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

                    {/* Chat Interface */}
                    <div className="px-4 py-4 h-full">
                      {/* Contact Header */}
                      <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">👤</span>
                        </div>
                        <span className="text-black font-medium">Contact</span>
                      </div>

                      {/* Messages */}
                      <div className="py-4 space-y-4">
                        <div className="flex justify-end">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs">
                            <p className="text-sm">Hi you still looking to practice your Michif tonight at Friendship?</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-start">
                          <div className="bg-gray-200 text-black px-4 py-2 rounded-2xl max-w-xs">
                            <p className="text-sm">Yeah I thought lessons already start for all of us :)</p>
                          </div>
                        </div>

                        <div className="flex justify-start">
                          <div className="bg-gray-200 text-black px-4 py-2 rounded-2xl max-w-xs">
                            <p className="text-sm">Awesome! Who are the artist</p>
                          </div>
                        </div>

                        <div className="flex justify-start">
                          <div className="bg-gray-200 text-black px-4 py-2 rounded-2xl max-w-xs">
                            <p className="text-sm">lil portray ka shooshaahanik</p>
                          </div>
                        </div>
                      </div>

                      {/* Keyboard */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-gray-100 rounded-lg p-2">
                          <div className="grid grid-cols-10 gap-1 mb-2">
                            {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((key) => (
                              <button key={key} className="bg-white text-black p-2 rounded text-xs font-medium">
                                {key}
                              </button>
                            ))}
                          </div>
                          <div className="grid grid-cols-9 gap-1 mb-2 px-2">
                            {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((key) => (
                              <button key={key} className="bg-white text-black p-2 rounded text-xs font-medium">
                                {key}
                              </button>
                            ))}
                          </div>
                          <div className="grid grid-cols-7 gap-1 px-4">
                            {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((key) => (
                              <button key={key} className="bg-white text-black p-2 rounded text-xs font-medium">
                                {key}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-center mt-2">
                            <button className="bg-white text-black px-8 py-2 rounded text-sm">
                              space
                            </button>
                          </div>
                        </div>
                      </div>
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
                        ? 'text-green-400 border-b-2 border-green-400 pb-2' 
                        : 'text-gray-400 hover:text-white'
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

      {/* Responsible AI Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Responsible AI that allows you to use Michif words in all of your mobile platforms
          </h2>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Use the Michif AI writing keyboard and translator directly on your iPhone or iPad — 
            download now, and translate all your words and pictures into Michif.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider">
            MICHIF AI
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
    </div>
  )
}
