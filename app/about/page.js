// ... (previous imports remain the same)

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src="/interior.jpg"
          alt="Zenith Restaurant Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl md:text-5xl font-bold mb-4">𝓣𝓱𝓮 𝓩𝓮𝓷𝓲𝓽𝓱 𝓔𝔁𝓹𝓮𝓻𝓲𝓮𝓷𝓬𝓮</h1>
            <p className="text-xl md:text-2xl text-amber-300">𝓕𝓻𝓸𝓶 𝓞𝓾𝓻 𝓚𝓲𝓽𝓬𝓱𝓮𝓷 &amp; 𝓑𝓪𝓻</p>
          </div>
        </div>
      </div>

      {/* Our Philosophy */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">The Zenith Philosophy</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2012, Zenith Restaurant &amp; Bar was born from a passion for elevating dining experiences. 
              We combine seasonal ingredients with innovative techniques to create dishes that delight the senses.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our bar program complements the culinary experience with craft cocktails that tell their own stories, 
              using house-made ingredients and premium spirits.
            </p>
            <div className="bg-amber-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Our Commitment</h3>
              <p className="text-gray-700">
                We source 90% of our ingredients from local farms and purveyors, changing our menu quarterly 
                to reflect what&apos;s fresh and in season.
              </p>
            </div>
          </div>
          {/* ... rest of the code remains the same ... */}
        </div>
      </section>

      {/* ... rest of the component remains the same ... */}
    </div>
  );
};

export default AboutPage;