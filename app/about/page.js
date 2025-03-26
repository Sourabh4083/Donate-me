import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C3E50] to-[#3498DB] text-white">
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-yellow-300">Buy Me a Chai: Empowering Creators, One Sip at a Time</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-200">
          More than just a donation platform - we building a community of support, connection, and dreams.
        </p>
      </div>

      {/* Emotional Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative overflow-hidden rounded-xl shadow-2xl">
          <Image 
            src="/man.gif" 
            alt="Creator's Journey" 
            width={600} 
            height={400} 
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <div>
          <h2 className="text-4xl font-bold mb-6 text-yellow-300">Why Buy Me a Chai?</h2>
          <p className="text-lg mb-4 leading-relaxed">
            In a world where creativity often goes unnoticed and uncompensated, we believe every creator deserves support. 
            A simple chai - a symbol of warmth, connection, and momentary pause - can be the lifeline that keeps a dream alive.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Imagine the power of your small contribution. That single chai you buy could:
            • Fund a students next creative project
            • Help an artist continue their passion
            • Support a writer finishing their book
            • Enable a musician to record their next track
          </p>
          <div className="bg-yellow-500 text-black p-6 rounded-xl shadow-lg">
            <blockquote className="italic text-xl mb-4">
              Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars.
            </blockquote>
            <cite className="font-bold">- Unknown</cite>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="text-center mt-16 bg-black/30 p-12 rounded-xl">
        <h3 className="text-4xl font-bold mb-6 text-yellow-300">Our Mission</h3>
        <p className="max-w-4xl mx-auto text-xl leading-relaxed">
          We are not just a platform. We are a movement. A community that believes in the power of small gestures. 
          Where every chai bought is a vote of confidence, a spark of hope, a bridge between dreamers and supporters.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <Link href="/login">
          <button className="bg-yellow-500 text-black text-2xl px-10 py-4 rounded-full hover:bg-yellow-400 transition-colors duration-300 shadow-2xl">
            Start Supporting Dreams Today
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default About
