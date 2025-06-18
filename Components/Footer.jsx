function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        <div>
          <h2 className="text-2xl font-bold text-[#C1DBB3]">Super Market Daily</h2>
          <p className="text-white/70 mt-3">
            We provide fresh and quality groceries every day at your doorstep.
            Our mission is to make grocery shopping easier, faster, and more reliable
            for families across Pakistan.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#C1DBB3] mb-2">Why Choose Us?</h3>
          <p className="text-white/70">
            From fresh fruits to daily essentials, Super Market Daily delivers 
            everything you need with fast, same-day delivery options and 
            trusted customer service.
          </p>
        </div>

        <div className="md:text-right">
          <h3 className="text-lg font-semibold text-[#C1DBB3] mb-2">Contact Us</h3>
          <p className="text-white/70">Email: support@supermarketdaily.com</p>
          <p className="text-white/70">Phone: +92 300 1234567</p>
          <p className="text-white/70 mt-1">Address: Karachi, Pakistan</p>
        </div>
      </div>

      <div className="text-center text-xs text-white/50 mt-10 border-t border-white/10 pt-4">
        &copy; {new Date().getFullYear()} Super Market Daily. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
