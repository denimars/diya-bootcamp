'use client'

export default function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      detail: "info@diyaproject.id",
      action: "Kirim Email"
    },
    {
      icon: "📱", 
      title: "WhatsApp",
      detail: "+6281234567890",
      action: "Chat WhatsApp"
    },
    {
      icon: "📍",
      title: "Alamat",
      detail: "Selong, Indonesia",
      action: "Lihat Lokasi"
    }
  ]

  const socialMedia = [
    { name: "Instagram", icon: "📷", handle: "@diyabootcamp" },
    ]

  return (
    <section id="kontak" className="section-padding bg-gradient-to-br from-gray-900 via-primary-dark to-primary text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hubungi <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Siap memulai perjalanan karir digital Anda? Tim kami siap membantu menjawab pertanyaan dan memberikan konsultasi gratis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-8">Informasi Kontak</h3>
            <div className="space-y-6 flex-grow">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => {
                    if (contact.title === "Alamat") {
                      window.open("https://maps.google.com/?q=-8.656042,116.542317", "_blank")
                    }
                  }}
                >
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{contact.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{contact.title}</h4>
                      <p className="text-gray-300 mb-2">{contact.detail}</p>
                      <button className="text-yellow-400 hover:text-yellow-300 font-medium">
                        {contact.action} →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-8">Video Profil Diya Bootcamp</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex-grow flex flex-col">
              <div className="aspect-video w-full flex-grow">
                <iframe 
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/Z6h-xxoO6JM?si=MiwaBrKTlo3bQ9Lj"
                  title="Diya Bootcamp Profile Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Ikuti Kami</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href="#"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center min-w-[160px]"
              >
                <div className="text-3xl mb-2">{social.icon}</div>
                <div className="font-semibold">{social.name}</div>
                <div className="text-sm text-gray-300">{social.handle}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}