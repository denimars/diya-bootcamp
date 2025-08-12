'use client'

import { useState } from 'react'

export default function Alumni() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const testimonials = [
    {
      name: "Ayyasy Rosadi",
      role: "Full Stack Engineer at PT Murni Development Indonesia (Jakarta)",
      image: "/ayik-diya.jpg",
      testimonial: "Berawal dari latar belakang saya yang notabene hanya seorang santri biasa yang tidak tahu apa-apa tentang dunia programming, namun setelah mengikuti Diya Bootcamp yang menghasilkan digital talent di bidang software engineer, saya bisa bekerja sebagai Full Stack Engineer di salah satu perusahaan di Jakarta. Saya percaya satu hal, yaitu semua orang pasti bisa jika mereka mau berusaha."
    },
    {
      name: "Muhammad Shafa",
      role: "Full Stack Engineer at PT Sharing Vision Indonesia (Bandung)", 
      image: "/safa-diya.jpg",
      testimonial: "Di Diya Bootcamp saya belajar banyak hal, terutama di bidang software engineering sebagai digital talent. Disana kita belajar dari nol sampai bisa membuat aplikasi web dan mobile. Materi yang kita pelajari sangat relevan dengan kebutuhan industri saat ini. Fasilitas dan lingkungan belajarnya juga sangat mendukung."
    }
  ]

  const companies = [
    { name: "Asaba Innotech", logo: "/asaba-innotech-logo.webp", isImage: true },
    { name: "PT Murni Development Indonesia", logo: "/m-dev.jpeg", isImage: true },
    { name: "PT Sharing Vision Indonesia", logo: "/sharing-vision-logo.png", isImage: true },
    
  ]

  const totalSlides = Math.ceil(testimonials.length / 2)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="alumni" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kisah Sukses <span className="text-gradient">Alumni</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman alumni kami yang telah berhasil berkarir di perusahaan teknologi terkemuka
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
                    {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                      <div 
                        key={slideIndex * 2 + index}
                        className="text-center flex flex-col h-full"
                      >
                        {/* Profile Photo */}
                        <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        
                        {/* Testimonial Text */}
                        <div className="mb-8 px-4 flex-grow">
                          <p className="text-gray-700 text-lg leading-relaxed">
                            &ldquo;{testimonial.testimonial}&rdquo;
                          </p>
                        </div>
                        
                        {/* Alumni Info - Fixed Height for Alignment */}
                        <div className="space-y-2 min-h-[80px] flex flex-col justify-center mt-auto">
                          <h4 className="text-2xl font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-primary font-semibold text-lg">{testimonial.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 text-primary hover:text-primary-dark"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 text-primary hover:text-primary-dark"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Pagination Dots */}
          <div className="flex justify-center space-x-3 mb-16 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">
            Alumni Kami Bekerja Di
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center min-h-[120px] h-full"
              >
                {company.isImage ? (
                  <div className="mb-3 h-12 w-full flex items-center justify-center">
                    <img 
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className={`max-h-full max-w-full object-contain ${
                        company.name !== "PT Murni Development Indonesia" ? "filter brightness-0 invert" : ""
                      }`}
                    />
                  </div>
                ) : (
                  <div className="text-4xl mb-2">{company.logo}</div>
                )}
                <p className="font-semibold text-center text-sm">{company.name}</p>
              </div>
            ))}
          </div>
          
        
        </div>
      </div>
    </section>
  )
}