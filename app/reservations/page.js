// app/private-events/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function PrivateEventsPage() {
    return (
        <div className="bg-gray-50">
            {/* Hero Section with Parallax Effect */}
            <section className="relative h-[80vh] min-h-[500px] bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40">
                    <Image 
                        src="/events.jpg"
                        alt="Elegant event space"
                        layout="fill"
                        objectFit="cover"
                        className="animate-fadeIn"
                        priority
                    />
                </div>
                <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-slideUp">
                            Private Events &<br />Exclusive Gatherings
                        </h1>
                        <p className="text-xl md:text-2xl max-w-2xl mb-8 animate-slideUp delay-100">
                            Create unforgettable moments in our sophisticated venues, tailored for your special occasions.
                        </p>
                       
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Host With Us?</h2>
                        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We transform ordinary events into extraordinary experiences with our attention to detail and exceptional service.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "Iconic Venues",
                                description: "Our spaces blend contemporary design with timeless elegance, providing the perfect backdrop for your event."
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "Custom Experiences",
                                description: "From menu curation to decor, we tailor every aspect to reflect your unique vision and style."
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                title: "Dedicated Support",
                                description: "Our event specialists guide you through every step, ensuring flawless execution from planning to celebration."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Spaces Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Signature Venues</h2>
                        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our versatile spaces, each offering a distinct atmosphere for your special occasion.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Private Dining Room */}
                        <div className="group relative overflow-hidden rounded-xl shadow-lg">
                            <div className="h-96 overflow-hidden">
                                <Image 
                                    src="/private.webp"
                                    alt="Private dining room"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-bold text-white mb-2">The Salon</h3>
                                <p className="text-gray-200 mb-4">Intimate gatherings for 20-30 guests</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-white">
                                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Customizable tasting menus
                                    </li>
                                    <li className="flex items-center text-white">
                                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Dedicated sommelier service
                                    </li>
                                    <li className="flex items-center text-white">
                                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Adjustable lighting & ambiance
                                    </li>
                                </ul>
                                <button className="w-full py-3 px-6 bg-primary hover:bg-primary-dark text-black font-medium rounded-lg transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100">
                                    Explore This Space
                                </button>
                            </div>
                        </div>

                        {/* Rooftop Terrace */}
                        <div className="group relative overflow-hidden rounded-xl shadow-lg">
                            <div className="h-96 overflow-hidden">
                                <Image 
                                    src="/roof.jpeg"
                                    alt="Rooftop terrace"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-bold text-white mb-2">The Terrace</h3>
                                <p className="text-gray-200 mb-4">Open-air celebrations for 40-60 guests</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-white">
                                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        360° city skyline views
                                    </li>
                                    <li className="flex items-center text-white">
                                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Seasonal cocktail menus
                                    </li>
                                    <li className="flex items-center text-white">
                                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Retractable canopy system
                                    </li>
                                </ul>
                                <button className="w-full py-3 px-6 bg-primary hover:bg-primary-dark text-black font-medium rounded-lg transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100">
                                    Explore This Space
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* View All Spaces Button */}
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                            View All Event Spaces
                            <svg className="ml-3 -mr-1 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                       <h2 className="text-3xl font-bold text-gray-900 mb-4">Celebrations We&apos;ve Hosted</h2>
                        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hear from our guests about their unforgettable experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Our wedding reception was absolutely magical. The team anticipated our every need and created an atmosphere beyond our dreams.",
                                author: "Sarah & Michael J.",
                                role: "Wedding Reception"
                            },
                            {
                                quote: "The corporate gala we hosted received rave reviews. The venue's sophistication elevated our brand perfectly.",
                                author: "David Chen",
                                role: "Corporate Gala"
                            },
                            {
                                quote: "For my mother's 70th birthday, we wanted something special. The private dining experience was intimate and exquisite.",
                                author: "Jennifer K.",
                                role: "Milestone Birthday"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-xl">
                                <div className="mb-6 text-primary">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <p className="text-gray-700 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reservation Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Begin Your Celebration</h2>
                            <div className="w-20 h-1 bg-primary mb-8"></div>
                            <p className="text-xl mb-8">
                                Complete the form to start planning your event. Our team will contact you within 24 hours to discuss your vision.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold">Email Us</h4>
                                        <p className="text-gray-300">events@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold">Call Us</h4>
                                        <p className="text-gray-300">(555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold">Office Hours</h4>
                                        <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
                                        <p className="text-gray-300">Saturday: 10am - 4pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-xl p-8 text-gray-800">
                            <h3 className="text-2xl font-bold mb-6">Book</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-1">
                                            Event Type *
                                        </label>
                                        <select
                                            id="event-type"
                                            name="event-type"
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        >
                                            <option value="">Select event type</option>
                                            <option>Wedding</option>
                                            <option>Corporate</option>
                                            <option>Birthday</option>
                                            <option>Anniversary</option>
                                            <option>Social Gathering</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                            Preferred Date *
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                                            Number of Guests *
                                        </label>
                                        <input
                                            type="number"
                                            id="guests"
                                            name="guests"
                                            min="10"
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="requests" className="block text-sm font-medium text-gray-700 mb-1">
                                        Tell Us About Your Event
                                    </label>
                                    <textarea
                                        id="requests"
                                        name="requests"
                                        rows={4}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Share your vision, special requirements, or any specific needs..."
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 px-6 bg-primary hover:bg-primary-dark text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                                    >
                                        Book Table
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Planning FAQs</h2>
                        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Answers to common questions about hosting events with us.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                question: "How far in advance should I book my event?",
                                answer: "We recommend booking at least 3-6 months in advance for weekends and 2-3 months for weekdays. Popular dates (especially during holiday seasons) often book 6-12 months ahead."
                            },
                            {
                                question: "Can you accommodate dietary restrictions?",
                                answer: "Absolutely. Our culinary team can customize menus to accommodate all dietary needs including vegetarian, vegan, gluten-free, kosher, halal, and any specific allergies. Please discuss your requirements with our event coordinator."
                            },
                            {
                                question: "What is included in the venue rental fee?",
                                answer: "Our rental fees typically include the space, standard tables and chairs, basic linens, tableware, and staff for setup/cleanup. Additional services like premium decor, specialty linens, AV equipment, and enhanced staffing are available at extra cost."
                            },
                            {
                                question: "Do you offer event planning services?",
                                answer: "Yes, we provide three levels of planning support: venue coordination (included), partial planning, and full-service event planning. Our team can recommend trusted vendors or work with your existing team."
                            },
                            {
                                question: "What is your cancellation policy?",
                                answer: "Cancellations made more than 90 days prior receive a full refund. Between 90-60 days, 50% of the deposit is refunded. Within 60 days, deposits are non-refundable but may be applied to a future date within 12 months, subject to availability."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                                <button className="w-full text-left p-6 focus:outline-none">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                                        <svg className="w-6 h-6 text-primary transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                <div className="px-6 pb-6 pt-0">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}