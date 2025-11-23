import Menubar from './Menubar'
import AboutPreview from './AboutPreview'
import Features from './Features'
import Footer from './Footer'

const About = () => {
  return (
    <>
      <Menubar />
      <AboutPreview />

      <section className="py-5">
        <div className="container">
          <h2>Our Story</h2>
          <p className="text-muted">We started as a small team passionate about design and user experience. Over the years we've helped many clients ship delightful web products.</p>
          <p>Our approach focuses on simplicity, performance, and continuous improvement. We pair pragmatic engineering with thoughtful design to deliver measurable results.</p>
        </div>
      </section>

      <Features />
      <Footer />
    </>
  )
}

export default About