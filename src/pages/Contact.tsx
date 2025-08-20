const Contact = () => {
  return (
    <div style={{ background: "rgba(57, 85, 138, 0.5)" }}>
      <div className="row">
        <h1 style={{ textAlign: "center", fontFamily: "exo-2" }}>
          Contact me:
        </h1>
        <div className="col-md-6 col-sm-12">
          <div
            className="card card-body"
            style={{ background: "rgba(57, 85, 138, 0.5)", height: "100%" }}
          >
            <div style={{ height: "100%" }}>
              I build modern, scalable web applications with a focus on clean
              code, performance, and a great user experience. My expertise
              includes HTML, CSS, PHP (Laravel), React, Python, and a broad
              range of technologies. Whether you need a small website or a
              full-featured web app, I’m ready to collaborate. Please contact me
              with your project requirements, timelines, and any questions you
              have, and I’ll respond as soon as possible.
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div
            className="card card-body"
            style={{ background: "rgba(57, 85, 138, 0.5)" }}
          >
            <ul style={{ listStyleType: "none" }}>
              <li style={{ padding: "2vw" }}>
                <i className="bi bi-geo-alt"> </i>
                <span
                  className="contact-text place"
                  style={{ color: "black", padding: "5%" }}
                >
                  Brasov, Roumania
                </span>
              </li>
              <li style={{ padding: "2vw" }}>
                <i className="bi bi-envelope"> </i>
                <span className="contact-text place">
                  <a href="" style={{ color: "black", padding: "5%" }}>
                    ANDREIDAVIDOIU@GMAIL.COM
                  </a>
                </span>
              </li>
            </ul>
            <div>
              <a
                href=""
                style={{ color: "black", fontSize: "5vw", padding: "10%" }}
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href=""
                style={{ color: "black", fontSize: "5vw", padding: "10%" }}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href=""
                style={{ color: "black", fontSize: "5vw", padding: "10%" }}
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
