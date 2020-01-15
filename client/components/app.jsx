import React from 'react';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark">
          <a className="navbar-brand" href="#">Vandana Khaparde</a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tools">Tools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">Resume</a>
              </li>
            </ul>
          </div>
        </nav>
        <section id="home">
          <div className="container-fluid w-100 bg-light">
            <div className="row col-12"></div>
            <img src="images/background.jpeg" alt="background"/>
          </div>
        </section>
        <section id="about">
          <div className="container-fluid description bg-light">
            <div className="row">
              <div className="col-12 d-flex">
                <div className="col-md-5 col-sm-6 imgstyle">
                  <img src="images/myimage.png" alt="image"/>
                </div>
                <div className="col-md-7 col-sm-6 d-flex flex-column align-items-center pt-5">
                  <p>Name: Vandana Khaparde</p>
                  <p>Title: Full Stack Web Developer</p>
                  <p>Email: vandana.khaparde@gmail.com</p>
                  <p>Phone: 512-431-7979</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container-fluid description bg-dark">
            <div className="row">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab magni cum, ut necessitatibus aspernatur esse quisquam reprehenderit, eveniet natus maxime nesciunt quidem veritatis doloremque, tenetur earum incidunt mollitia quae! Vel.</p>
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="container-fluid description bg-light text-dark">
            <div className="row">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab magni cum, ut necessitatibus aspernatur esse quisquam reprehenderit, eveniet natus maxime nesciunt quidem veritatis doloremque, tenetur earum incidunt mollitia quae! Vel.</p>
            </div>
          </div>
        </section>
        <section id="tools">
          <div className="container-fluid description bg-info">
            <div className="row">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab magni cum, ut necessitatibus aspernatur esse quisquam reprehenderit, eveniet natus maxime nesciunt quidem veritatis doloremque, tenetur earum incidunt mollitia quae! Vel.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

}
export default App;
