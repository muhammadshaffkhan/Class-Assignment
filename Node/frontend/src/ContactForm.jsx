const ContactForm = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title mb-4">Send us a message</h3>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" placeholder="Your name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="you@example.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows={5} placeholder="How can we help?"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
