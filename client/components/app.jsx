import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a className="navbar-brand" href="#">Vandana Khaparde</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="ml-auto navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Me</a>
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
            </ul>
          </div>
        </nav>
        <div id="home">
          {/* <div className="home"> */}
          <p className="displayName">Vandana Khaparde</p>
          <p>Full Stack Web Developer</p>
          {/* <img src="images/background.jpeg" alt="background" className="w-100"/> */}
          {/* </div> */}
        </div>
        <div id="about">
          <div className="container-fluid description bg-light">
            <div className="row">

              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center">
                  <img src="images/myimage.png" alt="image" className="imgstyle" />
                  <div className="d-flex justify-content-center ">
                    <a className="m-2 allLinks" href="https://github.com/VKhaparde"><i className="fab fa-github px-2 py-2" ></i></a>
                    <a className="m-2 allLinks" href="https://linkedin.com/in/VKhaparde"><i className="fab fa-linkedin px-2 py-2"></i></a>
                    <a className="m-2 allLinks" href=""><i className="fas fa-phone-square-alt px-2 py-2"></i></a>
                    <a className="m-2 allLinks" href="mailto:vandana.khaparde@gmail.com"><i className="fas fa-envelope-square px-2 py-2"></i></a>
                    <a className="m-2 allLinks"><i className="fas fa-file px-2 py-2"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-8 d-flex flex-column justify-content-start">
                <h3>About Me</h3>
                <p>I&apos;m Vandana Khaparde. I am a developer that has a passion for coding, math and technology.</p>
                <p>After my graduation in Computer Science, I&apos;ve worked for Infosys as a Software Engineer for few years
                in India. I have worked as a developer in a team for developing a banking application and also worked
                as part of testing team for few years.I moved to United States in 2010. Then I had taken a break for some years to take care of my kids and family.
                My passion for coding was still alive and I was learning some courses like Selenium, Appium
                    online.</p>
                <p>
                  When I decided to get back to work, I joined Learning Fuze, where I learned languages
                  like JavaScript (ES5 & ES6), React, jQuery, Node.js, PHP, HTML, and CSS. I also became
                  familiar with tools like Git/Github, Postman, npm, and Webpack. Lastly, I participated in team-based
                  hackathons, as well as solo projects, to build full-stack web applications.
                  Experiencing all of this has solidified my knowledge of web development,
                 and has helped me grow more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="projects">
          <div className="container-fluid description bg-dark">
            <div className="row">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab magni cum, ut necessitatibus aspernatur esse quisquam reprehenderit, eveniet natus maxime nesciunt quidem veritatis doloremque, tenetur earum incidunt mollitia quae! Vel.</p>
            </div>
          </div>
        </div>
        <div id="skills">
          <div className="container-fluid description bg-light text-dark">
            <div className="row">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab magni cum, ut necessitatibus aspernatur esse quisquam reprehenderit, eveniet natus maxime nesciunt quidem veritatis doloremque, tenetur earum incidunt mollitia quae! Vel.</p>
            </div>
          </div>
        </div>
        <div id="tools">
          <div className="container-fluid description bg-info">
            <div className="row">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab magni cum, ut necessitatibus aspernatur esse quisquam reprehenderit, eveniet natus maxime nesciunt quidem veritatis doloremque, tenetur earum incidunt mollitia quae! Vel.</p>
            </div>
          </div>
        </div>
        <div id="contact">
          <div className="container-fluid description bg-info">
            <div className="row">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab magni cum, ut necessitatibus aspernatur esse quisquam reprehenderit, eveniet natus maxime nesciunt quidem veritatis doloremque, tenetur earum incidunt mollitia quae! Vel.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;
