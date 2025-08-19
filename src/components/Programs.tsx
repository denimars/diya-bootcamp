'use client'

import { useState } from 'react'

export default function Programs() {
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null)

  const toggleProgram = (index: number) => {
    setExpandedProgram(expandedProgram === index ? null : index)
  }
  const programs = [
    {
      title: "Software Engineer",
      duration: "1 Tahun 2 Bulan",
      description: "Program intensif untuk menjadi software engineer profesional dengan kemampuan full-stack development",
      features: [
        "Logical Thinking & Problem Solving",
        "Back End Development",
        "Front End Development (Mobile & Web)",
        "Database Management",
        "Deployment"
      ],
      popular: true
    },
    {
      title: "Cyber Security",
      duration: "8 Bulan", 
      description: "Kuasai teknologi keamanan siber untuk melindungi sistem dan data dari ancaman digital",
      features: [
        "Security Fundamentals & Risk Assessment",
        "Penetration Testing & Ethical Hacking",
        "Network Security & Firewalls",
        "Cloud Security (AWS, Azure)",
        "Incident Response & Forensics"
      ],
      popular: false
    },
    {
      title: "Data Engineer",
      duration: "6 Bulan",
      description: "Bangun pipeline data yang robust dan sistem big data untuk kebutuhan enterprise",
      features: [
        "Python & SQL Programming",
        "Data Pipeline & ETL",
        "Big Data Technologies",
        "Cloud Data Services",
        "Data Warehousing"
      ],
      popular: false
    }
  ]

  const scholarshipPrograms = [
    {
      title: "Program Beasiswa Penuh",
      description: "Mampu menguasai skill fullstack dev yang dibutuhkan industri melalui jalur beasiswa (biaya pendidikan gratis)",
      requirements: [
        "Laki-laki, umur 17-23 tahun",
        "Lulusan SMA/SMK",
        "Belum menikah",
        "Izin orang tua",
        "Tinggal di asrama bootcamp",
        "Tidak sedang bersekolah/kuliah",
        "Bersedia bekerja dengan perusahaan mitra",
        "Tidak mampu secara finansial (harus ada bukti)",
        "Bersedia menyelesaikan pengabdian 6 bulan",
        "Lulus ujian masuk (tes tulis dan IQ)"
      ],
      phases: [
        "IT Fundamental (1 bulan)",
        "Developer Fundamental (4.2 bulan)",
        "Fullstack Development (5.3 bulan)",
        "Final Project & Community Service (1.3 tahun)"
      ],
      cost: "Rp. 0,- (Gratis)"
    },
    {
      title: "Program Reguler", 
      description: "Mampu menguasai skill fullstack dev yang dibutuhkan industri, kuota sangat terbatas, biaya murah dan terjangkau",
      requirements: ["Memiliki motivasi tinggi untuk belajar", "Memiliki laptop", "Siap mengikuti aturan Diya Bootcamp"],
      phases: [
        "Fase 1: IT Fundamental (1 bulan)",
        "Fase 2: Developer Fundamental (4.5 bulan)", 
        "Fase 3: Fullstack (5.5 bulan)",
        "Fase 4: Final Project (2 bulan)"
      ],
      cost: "Rp. 12,000,000",
      payment: "Dapat dicicil 3x pembayaran"
    }
  ]

  return (
    <section id="program" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Program <span className="text-gradient">Pelatihan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih program yang sesuai dengan minat dan tujuan karir Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full ${
                program.popular ? 'border-2 border-primary' : 'border border-gray-200'
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    🔥 Paling Populer
                  </span>
                </div>
              )}
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <div className="mb-4">
                  <span className="text-primary font-semibold">⏰ {program.duration}</span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mt-auto ${
                  program.popular 
                    ? 'btn-primary' 
                    : 'btn-secondary'
                }`}>
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Jalur <span className="text-gradient">Pendaftaran</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarshipPrograms.map((scholarship, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-bold text-gray-900">{scholarship.title}</h4>
                  <button
                    onClick={() => toggleProgram(index)}
                    className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <svg 
                      className={`w-6 h-6 transition-transform ${expandedProgram === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex-grow">
                  <p className="text-gray-600 mb-6 leading-relaxed">{scholarship.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {scholarship.cost && (
                      <div className="bg-green-50 rounded-lg p-4">
                        <span className="text-green-700 font-semibold">💰 Biaya: {scholarship.cost}</span>
                      </div>
                    )}
                    
                    {scholarship.payment && (
                      <div className="bg-blue-50 rounded-lg p-4">
                        <span className="text-blue-700 font-semibold">💳 Pembayaran: {scholarship.payment}</span>
                      </div>
                    )}
                  </div>

                  {expandedProgram === index && (
                    <div className="space-y-6 mb-6 animate-fadeIn">
                      {/* Requirements Section */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                          Persyaratan
                        </h5>
                        <div className="ml-6 border-l-2 border-gray-200 pl-6">
                          <ul className="space-y-3">
                            {scholarship.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start text-gray-700">
                                <span className="text-primary mr-3 mt-1">✓</span>
                                <span className="flex-1">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Timeline Section */}
                      {scholarship.phases && (
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                            Timeline Program
                          </h5>
                          <div className="ml-6 border-l-2 border-gray-200 pl-6 space-y-4">
                            {scholarship.phases.map((phase, idx) => (
                              <div key={idx} className="relative">
                                <div className="absolute -left-8 w-4 h-4 bg-primary rounded-full border-4 border-white shadow"></div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                  <div className="flex items-center">
                                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                                      {idx + 1}
                                    </span>
                                    <span className="text-gray-800 font-medium">{phase}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <button className="w-full btn-primary mt-auto">
                  Daftar Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}