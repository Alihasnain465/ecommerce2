import Image from "next/image";

export default function HomePage() {
  // Products array with images and info
  const products = [
    { src: "creambag.jfif", title: "Cream Bag", desc: "Perfect for everyday use." },
    { src: "leatherbag.jfif", title: "Leather Bag", desc: "Stylish and durable." },
    { src: "travel bag.jfif", title: "Travel Bag", desc: "Ideal for trips." },
    { src: "casual bag.jfif", title: "Casual Bag", desc: "Comfortable and trendy." },
    { src: "office bag.jfif", title: "Office Bag", desc: "Professional and spacious." },
  ];

  return (
    <main>
      {/* Home Section */}
      <section
        id="home"
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/stylishbag.webp')" }} // public folder image
      >
        <h1 className="text-5xl md:text-6xl text-white font-bold bg-black/40 p-6 rounded">
          Welcome to BagStore
        </h1>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Our Bags</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.src}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <Image
                  src={`/${product.src}`} // public folder se image
                  alt={product.title}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-600">{product.desc}</p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">About BagStore</h2>
          <p className="text-green-700 text-lg">
            BagStore brings you high-quality, stylish bags for all your daily needs.
            Our mission is to provide durability, comfort, and style in every bag.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
          <form className="bg-white p-8 rounded-xl shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={5}
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}