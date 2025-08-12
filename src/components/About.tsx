export default function About() {
  const features = [
    {
      icon: "💡",
      title: "Skill Terkini",
      description: "Materi pembelajaran yang selalu update mengikuti perkembangan teknologi industri"
    },
    {
      icon: "👨‍💼",
      title: "Mentor Berpengalaman", 
      description: "Dibimbing langsung oleh praktisi industri dengan pengalaman bertahun-tahun"
    },
    {
      icon: "🕌",
      title: "Diniyyah",
      description: "Dukungan pembekalan ilmu agama"
    },
    {
      icon: "💻",
      title: "Software Engineer",
      description: "Pembelajaran komprehensif pengembangan perangkat lunak profesional"
    },
    {
      icon: "📊", 
      title: "Data Engineer",
      description: "Spesialisasi dalam membangun infrastruktur dan pipeline data yang scalable"
    },
    {
      icon: "🌐",
      title: "Network Engineer", 
      description: "Keahlian dalam merancang, mengimplementasi dan mengelola infrastruktur jaringan"
    },
    {
      icon: "⚙️",
      title: "DevOps",
      description: "Praktik pengintegrasian development dan operations untuk delivery yang efisien"
    },
    {
      icon: "🏢",
      title: "Fasilitas Representative",
      description: "Lingkungan belajar yang nyaman dengan fasilitas teknologi terdepan"
    },
    {
      icon: "📈",
      title: "Career Development",
      description: "Program pengembangan karir dan soft skills untuk kesuksesan jangka panjang"
    }
  ]

  return (
    <section id="tentang" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="text-gradient">Diya Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami berkomitmen mengembangkan sumber daya manusia IT yang profesional, 
            kreatif, dan beretika untuk mempersiapkan tenaga kerja siap pakai di era digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Visi & Misi Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-2xl font-semibold mb-4">Visi</h4>
              <p className="text-lg leading-relaxed">
                Menjadi lembaga pelatihan digital terdepan yang menghasilkan 
                talenta teknologi berkualitas tinggi dan siap bersaing global.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-2xl font-semibold mb-4">Misi</h4>
              <p className="text-lg leading-relaxed">
                Memberikan pendidikan teknologi berkualitas tinggi dengan 
                metode pembelajaran yang inovatif dan mendukung pengembangan karir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}