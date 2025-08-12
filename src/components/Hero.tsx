'use client'

export default function Hero() {
  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary-dark to-primary">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max text-center text-white z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gradient bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Diya Bootcamp
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Level Up Your Digital Future
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Diya Bootcamp adalah program intensif untuk mencetak talenta digital siap kerja di bidang Software Engineer, Data Engineer, Network Engineer dan DevOps, dengan kurikulum berbasis industri dan mentoring dari praktisi berpengalaman.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 shadow-2xl">
              <span className="mr-2">🚀</span>
              Mulai Sekarang
            </button>
            <button className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              <span className="mr-2">📋</span>
              Lihat Program
            </button>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Alumni Sukses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Job Placement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">6</div>
              <div className="text-gray-300">Bulan Program</div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}