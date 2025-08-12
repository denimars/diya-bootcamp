export default function Footer() {
  const quickLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Program", href: "#program" },
    { label: "Alumni", href: "#alumni" },
    { label: "Kontak", href: "#kontak" }
  ]

  const programs = [
    { label: "Software Engineer", href: "#" },
    { label: "Network Engineer", href: "#" },
    { label: "Data Engineer", href: "#" },
    { label: "Program Beasiswa", href: "#" }
  ]

  const support = [
    { label: "FAQ", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Bantuan", href: "#" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="py-16 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/diya-white.png" 
                  alt="Diya Project Logo" 
                  className="h-20 w-auto"
                />
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Platform bootcamp terdepan untuk menghasilkan digital talent berkualitas tinggi. 
                Bergabunglah dengan ribuan alumni yang telah sukses berkarir di perusahaan teknologi terkemuka.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-primary p-3 rounded-lg transition-colors duration-300">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-primary p-3 rounded-lg transition-colors duration-300">
                  <span className="text-xl">📹</span>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-primary p-3 rounded-lg transition-colors duration-300">
                  <span className="text-xl">💼</span>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-primary p-3 rounded-lg transition-colors duration-300">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Menu Cepat</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Program</h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a 
                      href={program.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {program.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Bantuan</h4>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <p className="text-gray-400">
                {new Date().getFullYear()} Diya Bootcamp. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Syarat & Ketentuan
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privasi
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Cookie
                </a>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-primary-light py-4">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white font-semibold">
              🚀 Siap memulai perjalanan karir digital Anda? 
             
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}