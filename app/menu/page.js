"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      src: "/first.jpg",
      alt: "Craft Cocktail Experience",
      title: "Zenith Cocktail Bar",
      subtitle: "Artisanal mixology at its finest"
    },
    {
      src: "/second.jpg",
      alt: "Our Signature Drinks",
      title: "Seasonal Craft Cocktails",
      subtitle: "Featuring house-infused spirits and local botanicals"
    },
    {
      src: "/third.jpeg",
      alt: "Lounge Ambiance",
      title: "Stylish Lounge Atmosphere",
      subtitle: "Perfect for evening cocktails"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8">
                  {slide.subtitle}
                </p>
                <a 
                  href="#cocktails" 
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
                >
                  Explore Our Cocktails
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index 
                ? 'bg-amber-500 w-6' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

const MenuSection = () => {
  const menuCategories = [
    {
      id: 'starters',
      title: 'Small Plates',
      items: [
        {
          name: 'Truffle Arancini',
          description: 'Crispy risotto balls with black truffle and fontina',
          price: '$16',
          image: '/truffile.jpg'
        },
        {
          name: 'Hamachi Crudo',
          description: 'Yellowtail, yuzu kosho, avocado, crispy shallots',
          price: '$22',
          image: '/hamachi.jpeg'
        },
        {
          name: 'Burrata',
          description: 'Creamy burrata, heirloom tomatoes, basil oil',
          price: '$18',
          image: '/burrata.jpeg'
        }
      ]
    },
    {
      id: 'mains',
      title: 'Main Courses',
      items: [
        {
          name: 'Dry-Aged Ribeye',
          description: '14oz, bone marrow butter, roasted mushrooms',
          price: '$58',
          image: '/dry.jpeg'
        },
        {
          name: 'Miso Black Cod',
          description: '48-hour marinated cod, bok choy, ginger dashi',
          price: '$42',
          image: '/miso.jpeg'
        },
        {
          name: 'Mushroom Risotto',
          description: 'Wild mushrooms, parmesan, white truffle oil',
          price: '$32',
          image: '/mushroom.jpeg'
        }
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts',
      items: [
        {
          name: 'Chocolate Soufflé',
          description: 'Warm chocolate soufflé with vanilla bean ice cream',
          price: '$14',
          image: '/chocolate.jpeg'
        },
        {
          name: 'Yuzu Tart',
          description: 'Japanese citrus curd, matcha crumble, berry sorbet',
          price: '$12',
          image: '/yuza.jpeg'
        }
      ]
    }
  ];

  const barCategories = [
    {
      id: 'signature-cocktails',
      title: 'Signature Cocktails',
      items: [
        {
          name: 'Zenith Old Fashioned',
          description: 'Barrel-aged bourbon, demerara, black walnut bitters',
          price: '$18',
          image: '/old.jpeg'
        },
        {
          name: 'Lavender Bees Knees',
          description: 'Gin, lavender honey, lemon, egg white',
          price: '$16',
          image: '/bees.jpeg'
        },
        {
          name: 'Smoky Paloma',
          description: 'Mezcal, grapefruit, lime, chili salt rim',
          price: '$17',
          image: '/smoky.jpeg'
        }
      ]
    },
    {
      id: 'spirits',
      title: 'Premium Spirits',
      items: [
        {
          name: 'Whiskey Selection',
          description: 'Japanese, Scotch, Bourbon & Rye flights available',
          price: '$18-$45',
          image: '/japanese.jpeg'
        },
        {
          name: 'Craft Gin',
          description: 'Local and international small-batch gins',
          price: '$14-$22',
          image: '/local.jpeg'
        },
        {
          name: 'Aged Rum',
          description: 'Caribbean and South American selections',
          price: '$16-$28',
          image: '/caribbean.jpeg'
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      <section id="menu" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Culinary Offerings
          </h2>
          
          <div className="space-y-20">
            {menuCategories.map((category) => (
              <div key={category.id} className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2 border-amber-500">
                  {category.title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, index) => (
                    <div key={index} className="flex flex-col group">
                      <div className="w-full h-48 relative mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-xl font-medium text-gray-800">{item.name}</h4>
                          <span className="text-amber-600 font-medium">{item.price}</span>
                        </div>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cocktails" className="py-16 px-4 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Bar Program
          </h2>
          
          <div className="space-y-20">
            {barCategories.map((category) => (
              <div key={category.id} className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2 border-amber-500">
                  {category.title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, index) => (
                    <div key={index} className="flex flex-col group">
                      <div className="w-full h-48 relative mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-xl font-medium text-gray-800">{item.name}</h4>
                          <span className="text-amber-600 font-medium">{item.price}</span>
                        </div>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              About Zenith
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Zenith Restaurant & Bar redefines modern gastronomy with its innovative approach to 
              seasonal cuisine and craft cocktails. Our culinary team, led by Executive Chef 
              Marcus Welliver, creates dishes that highlight the finest local ingredients through 
              contemporary techniques.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our bar program, curated by Head Mixologist Elena Rodriguez, features small-batch 
              spirits, house-made ingredients, and creative presentations that complement our 
              culinary offerings.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-amber-100 px-4 py-2 rounded-lg">
                <h4 className="font-semibold text-amber-800">Dining Hours</h4>
                <p className="text-gray-700">Tue-Thu: 5:30PM - 10:00PM</p>
                <p className="text-gray-700">Fri-Sat: 5:30PM - 11:00PM</p>
                <p className="text-gray-700">Sun: 5:00PM - 9:00PM</p>
              </div>
              <div className="bg-amber-100 px-4 py-2 rounded-lg">
                <h4 className="font-semibold text-amber-800">Bar Hours</h4>
                <p className="text-gray-700">Tue-Sun: 4:00PM - Midnight</p>
              </div>
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/zenith.jpeg"
              alt="Zenith Restaurant interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <Carousel />
      <MenuSection />
      <AboutSection />
    </div>
  );
};

export default Page;