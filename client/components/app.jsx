import React from 'react';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <nav className="navbar navbar-custom navbar-expand-md fixed-top navbar-trans">
          <a className="navbar-brand js-scroll" href="#page-top">Vandana Khaparde</a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link js-scroll active" href="#home">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#tools">Tools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#resume">Resume</a>
              </li>
            </ul>
          </div>
        </nav>
        <section id="about">
          <div className="container">
            <div className="row">
              <p>Hello</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

}
export default App;
