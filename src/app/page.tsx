import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import Alumni from '@/components/Alumni'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Alumni />
      <Contact />
      <Footer />
    </main>
  )
}