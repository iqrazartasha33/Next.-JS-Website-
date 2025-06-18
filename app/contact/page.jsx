function Contact() {
  return (
    <>
      <header className="bg-[#C1DBB3] text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#096B68] mb-4">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-[#096B68] max-w-3xl mx-auto">
          We’re here to help! Reach out to us with any questions, feedback, or
          support needs.
        </p>
      </header>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#096B68] mb-10 text-center">
            Contact Information
          </h2>

       <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-[#096B68] text-sm md:text-base mt-12 max-w-3xl mx-auto text-center md:text-left">
       <div className="space-y-10 md:space-y-12">
       <div>
      <h4 className="text-lg font-semibold mb-2">Phone Number</h4>
      <p className="text-gray-700">+92 300 1234567</p>
       </div>

       <div>
      <h4 className="text-lg font-semibold mb-2">Email Address</h4>
      <p className="text-gray-700">support@supermarketdaily.com</p>
       </div>
      </div>

  <div className="space-y-10 md:space-y-12 md:text-right">
    <div>
      <h4 className="text-lg font-semibold mb-2">Office Address</h4>
      <p className="text-gray-700">
      Karachi, Pakistan
      </p>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-2">Opening Hours</h4>
      <p className="text-gray-700">
        Mon - Fri:<br/>
         9:00 AM - 6:00 PM<br />
        Sat - Sun:<br/> Closed
      </p>
    </div>
  </div>
</div>

        </div>
      </section>
    </>
  );
}

export default Contact;
