import Image from "next/image";
function Header() {
  return (
    <>
    <header className="bg-[#C1DBB3] text-white text-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-[#096B68] mb-4">
        Super Market Daily <br/>
        Fresh Grocery
      </h1>
     <p className="text-lg md:text-xl mb-6">
      Introduced a new model for online grocery shopping and <br />
      convenient home delivery. Our platform ensures fresh products, fast <br/>
      service, and a user-friendly experience — all from the comfort of your home. <br />
       Say goodbye to long queues and heavy bags, and enjoy stress-free shopping with us.
      </p>

      <button className="bg-white text-[#03A6A1] px-6 py-2 rounded-full font-semibold hover:bg-[#C1DBB3] hover:border-2 hover:border-[#096B68] 
       hover:text-[#096B68]  transition duration-300">
           Shop Now!
     </button>
    </header>


 <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-[#096B68] mb-12">
        Shop by Category
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
        
        <div className="p-6 rounded-lg shadow-md bg-[#C1DBB3] text-[#096B68]">
          <Image
            src="/fruit.avif"
            alt="Fresh Fruits"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Fresh Fruits</h3>
          <p className="text-sm">
            Enjoy seasonal, organic fruit baskets picked fresh daily for maximum taste and health.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md bg-[#C1DBB3] text-[#096B68]">
          <Image
            src="/vegtables.avif"
            alt="Vegetables"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Vegetables</h3>
          <p className="text-sm">
            Enjoy seasonal, organic fruit baskets picked fresh daily for maximum taste and health.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md bg-[#C1DBB3] text-[#096B68]">
          <Image
            src="/dairy product.avif"
            alt="Dairy Products"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Dairy Products</h3>
          <p className="text-sm">
            Enjoy seasonal, organic fruit baskets picked fresh daily for maximum taste and health.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md bg-[#C1DBB3] text-[#096B68]">
          <Image
            src="/bakery.avif"
            alt="Bakery"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Bakery</h3>
          <p className="text-sm">
            Enjoy seasonal, organic fruit baskets picked fresh daily for maximum taste and health.
          </p>
        </div>
      </div>
    </section>


    <section className="bg-white py-10 px-3">
      <h2 className="text-3xl font-bold text-center text-[#096B68] mb-10">
        Featured Products
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
        
        <div className="p-6 rounded-lg shadow-md bg-[#C1DBB3] text-[#096B68]">
          <Image
            src="/snacks.avif"
            alt="Snacks"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Snacks</h3>
          <p className="text-sm">
            Delicious chips, biscuits, and munchies to satisfy your cravings anytime.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md bg-[#C1DBB3] text-[#096B68]">
          <Image
            src="/Frozen Foods.avif"
            alt="Frozen Foods"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Frozen Foods</h3>
          <p className="text-sm">
            Quick and easy frozen meals, parathas, and snacks ready in minutes.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md bg-[#C1DBB3] text-[#096B68]">
          <Image
            src="/beverages.avif"
            alt="Beverages"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Beverages</h3>
          <p className="text-sm">
            Refreshing juices, soft drinks, and teas for every taste and mood.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md bg-[#C1DBB3] text-[#096B68]">
          <Image
            src="/Grains & Pulses.avif"
            alt="Grains & Pulses"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Grains & Pulses</h3>
          <p className="text-sm">
            High-quality rice, lentils, and pulses for your everyday healthy cooking needs.
          </p>
        </div>
      </div>
    </section>

      </>
  );
}

export default Header;
