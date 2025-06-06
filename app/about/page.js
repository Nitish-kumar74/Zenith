"use client";
import Image from 'next/image';

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
            <p className="text-xl md:text-2xl text-amber-300"> 𝓕𝓻𝓸𝓶 𝓞𝓾𝓻 𝓚𝓲𝓽𝓬𝓱𝓮𝓷 & 𝓑𝓪𝓻</p>
          </div>
        </div>
      </div>

      {/* Our Philosophy */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">The Zenith Philosophy</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2012, Zenith Restaurant & Bar was born from a passion for elevating dining experiences. 
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
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/arts.webp"
              alt="Chef preparing dish"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-amber-500">
                <Image
                  src="/marcus.jpg"
                  alt="Head Chef Marcus Welliver"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Marcus Welliver</h3>
              <p className="text-amber-600 font-medium mb-2">Executive Chef</p>
              <p className="text-gray-600">
                With 15 years at Michelin-starred restaurants, Chef Marcus brings precision and creativity to our kitchen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-amber-500">
                <Image
                  src="/download.jpeg"
                  alt="Head Mixologist Elena Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Elena Rodriguez</h3>
              <p className="text-amber-600 font-medium mb-2">Head Mixologist</p>
              <p className="text-gray-600">
                Award-winning mixologist specializing in craft cocktails with house-infused spirits and seasonal ingredients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-amber-500">
                <Image
                  src="/chen.jpeg"
                  alt="General Manager Sarah Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Sarah Chen</h3>
              <p className="text-amber-600 font-medium mb-2">General Manager</p>
              <p className="text-gray-600">
                Hospitality expert dedicated to creating memorable dining experiences for every guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Awards &amp; Recognition</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="text-4xl text-amber-500 mb-3">★ ★ ★</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Michelin Guide</h3>
            <p className="text-gray-600">3 Stars - 2023</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="text-4xl text-amber-500 mb-3">Top 50</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">World&apos;s Best Bars</h3>
            <p className="text-gray-600">Ranked #27 - 2023</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="text-4xl text-amber-500 mb-3">Best of</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">City Eats Awards</h3>
            <p className="text-gray-600">Best Restaurant &amp; Bar - 2022, 2023</p>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 px-4 bg-amber-600 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
            <address className="not-italic mb-6">
              <p className="text-xl mb-2">123 Culinary Avenue</p>
              <p className="text-xl">Metropolis, NY 10001</p>
            </address>
            <div className="space-y-2">
              <p className="text-lg">+1 (555) 123-4567</p>
              <p className="text-lg">reservations@zenithdining.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Hours</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Dining Room</h4>
                <ul className="space-y-1">
                  <li>Tuesday - Thursday: 5:30PM - 10:00PM</li>
                  <li>Friday - Saturday: 5:30PM - 11:00PM</li>
                  <li>Sunday: 5:00PM - 9:00PM</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Bar &amp; Lounge</h4>
                <ul className="space-y-1">
                  <li>Tuesday - Sunday: 4:00PM - Midnight</li>
                  <li>Happy Hour: 4:00PM - 6:00PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;