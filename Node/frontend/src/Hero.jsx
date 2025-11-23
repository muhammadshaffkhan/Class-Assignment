const Hero = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h1 className="display-5">Welcome to Our Site</h1>
        <p className="lead text-muted">We provide quality services to grow your business and delight customers.</p>
        <div className="mt-4">
          <a href="/about" className="btn btn-primary btn-lg me-2">Learn More</a>
          <a href="/contact" className="btn btn-outline-secondary btn-lg">Contact Us</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
