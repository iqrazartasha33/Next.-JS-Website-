"use client";
import React from "react";

function About() {
  return (
    <>
      <header className="bg-[#C1DBB3] text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#096B68] mb-4">
          About Super Market Daily
        </h1>
        <p className="text-lg md:text-xl text-[#096B68] max-w-3xl mx-auto">
          Your trusted online grocery destination – where freshness, convenience,
          and affordability come together.
        </p>
      </header>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#096B68] mb-6 text-center">
            Our Story
          </h2>
          <p className="text-[#096B68] text-sm md:text-base leading-relaxed">
            Super Market Daily was founded with a simple mission: to make grocery
            shopping stress-free and convenient for everyone. Tired of traffic,
            long lines, and low-quality products, we decided to bring a better
            solution – a fully online platform offering fresh groceries at your
            doorstep.
            <br /><br />
            From humble beginnings in Karachi, we’ve grown to serve thousands of
            families across Pakistan. Our commitment to freshness, fast delivery,
            and customer satisfaction remains at the heart of everything we do.
          </p>
        </div>
      </section>

      <section className="bg-[#C1DBB3] text-[#096B68] py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-sm md:text-base">
              To revolutionize grocery shopping in Pakistan by providing
              affordable, fresh, and fast grocery delivery – making everyday
              shopping easier for families.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
            <ul className="list-disc list-inside text-sm md:text-base space-y-2">
              <li>Freshness First</li>
              <li>Customer Happiness</li>
              <li>Affordability & Trust</li>
              <li>Fast, Reliable Delivery</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
