const Features = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Our Features</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div style={{fontSize: '2rem'}}>🚀</div>
                <h5 className="card-title mt-3">Fast Performance</h5>
                <p className="card-text text-muted">Optimized workflows and fast load times to keep users happy.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div style={{fontSize: '2rem'}}>🔒</div>
                <h5 className="card-title mt-3">Secure</h5>
                <p className="card-text text-muted">We follow best practices to keep your data safe and private.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div style={{fontSize: '2rem'}}>🤝</div>
                <h5 className="card-title mt-3">Customer-first</h5>
                <p className="card-text text-muted">Support and services designed around your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
