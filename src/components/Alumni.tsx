'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Alumni() {
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

        <div className="max-w-6xl mx-auto relative mb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="text-center flex flex-col h-full py-8">
                  {/* Profile Photo */}
                  <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="mb-8 px-4 max-w-4xl mx-auto">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </p>
                  </div>
                  
                  {/* Alumni Info */}
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-primary font-semibold text-lg">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 text-primary hover:text-primary-dark z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 text-primary hover:text-primary-dark z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center space-x-3 mt-8"></div>
        </div>

        <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-6 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Alumni Kami Bekerja Di
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center min-h-[100px] md:min-h-[120px] h-full"
              >
                {company.isImage ? (
                  <div className="mb-2 md:mb-3 h-8 md:h-12 w-full flex items-center justify-center">
                    <img 
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className={`max-h-full max-w-full object-contain ${
                        company.name !== "PT Murni Development Indonesia" ? "filter brightness-0 invert" : ""
                      }`}
                    />
                  </div>
                ) : (
                  <div className="text-2xl md:text-4xl mb-1 md:mb-2">{company.logo}</div>
                )}
                <p className="font-semibold text-center text-xs md:text-sm leading-tight">{company.name}</p>
              </div>
            ))}
          </div>
          
        
        </div>
      </div>
    </section>
  )
}