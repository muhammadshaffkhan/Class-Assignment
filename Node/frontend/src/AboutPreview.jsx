const AboutPreview = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p className="text-muted">We are a small team focused on building beautiful and useful web experiences. Learn more about our story and approach.</p>
            <a href="/about" className="btn btn-outline-primary">Read more</a>
          </div>
          <div className="col-md-6 text-center">
            <div style={{maxWidth: 320, margin: '0 auto'}}>
              <img src="/logo192.png" alt="about preview" className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
