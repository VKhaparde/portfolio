import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
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
                <a className="nav-link" href="#applications">Applications</a>
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
          <div className="">
            <p className="displayName">Vandana Khaparde</p>
            <p>Full Stack Web Developer</p>
            {/* <img src="images/background.jpeg" alt="background" className="w-100"/> */}
          </div>
        </div>
        <div id="about">
          <div className="container-fluid description">
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center">
                  <img src="images/myimage.png" alt="image" className="imgstyle" />
                  <div className="d-flex justify-content-center ">
                    <a className="m-2 allLinks" href="https://github.com/VKhaparde"><i className="fab fa-github px-2 py-2" ></i></a>
                    <a className="m-2 allLinks" href="https://linkedin.com/in/VKhaparde"><i className="fab fa-linkedin px-2 py-2"></i></a>
                    {/* <a className="m-2 allLinks" href=""><i className="fas fa-phone-square-alt px-2 py-2"></i></a> */}
                    <a className="m-2 allLinks" href="mailto:vandana.khaparde@gmail.com"><i className="fas fa-envelope-square px-2 py-2"></i></a>
                    <a className="m-2 allLinks" href="images/Vandana_Resume.pdf"><i className="fas fa-file px-2 py-2"></i></a>
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
        <div id="applications">
          <div className="container-fluid description">
            <h2 className="text-center">Applications</h2>
            <div className="card-deck mt-3 pb-5">
              <div className="card">
                <div className="card-header">
                  <h3 className="">Ninja Match</h3>
                </div>
                <img className="card-img-top imgSize" src="images/lego-ninja.jpeg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">
                    Ninja Match is a memory match game.User gets 16 attempts to match the ninja and win the game.
                  </p>
                  <p>Developed using javaScript, jQuery, HTML and CSS.</p>
                </div>
                <div className="card-footer">
                  <div className="p-2">
                    <a className="m-2 appLinks" href="https://github.com/VKhaparde/ninja-match">
                      <i className="fab fa-github"></i> Github
                    </a>
                    <a className="m-2 appLinks" href="https://ninja-match.vandanakhaparde.com">
                      <i className="far fa-window-restore"></i> Live
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3 className="">Kitchen Shop</h3>
                </div>
                <img className="card-img-top imgSize" src="images/kitchen.png" alt="Card image cap" />
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                    Kitchen Shop is a full stack web application where user can shop for small kitchen appliances.
                  </p>
                  <p>Developed using React.js,PHP,MySql, HTML and CSS.</p>
                </div>
                <div className="card-footer">
                  <div className="p-2">
                    <a className="m-2 appLinks" href="https://github.com/VKhaparde/kitchen-shop">
                      <i className="fab fa-github"></i> Github
                    </a>
                    <a className="m-2 appLinks" href="https://kitchen-shop.vandanakhaparde.com">
                      <i className="far fa-window-restore"></i> Live
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3 className="">Local Sports</h3>
                </div>
                <img className="card-img-top imgSize" src="images/local-sports.jpg" alt="Card image cap" />
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                    Local Sports is a full stack web application which allows the user to find pick up sports of their choice.
                  </p>
                  <p>Developed using React.js, PHP, MySql, HTML and CSS.</p>
                </div>
                <div className="card-footer">
                  <div className="p-2">
                    <a className="m-2 appLinks" href="https://github.com/VKhaparde/local-sports">
                      <i className="fab fa-github"></i> Github
                    </a>
                    <a className="m-2 appLinks" href="https://local-sports.vandanakhaparde.com">
                      <i className="far fa-window-restore"></i> Live
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div id="skills">
          <div className="skills container-fluid description text-dark pb-4">
            <h2>Skills</h2>
            <div className="row">
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-react-original colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">React.js</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-javascript-plain colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">JavaScript</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-jquery-plain-wordmark colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">jQuery</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-php-plain colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">PHP</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-mysql-plain colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">MySQL</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-bootstrap-plain colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">Bootstrap</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-html5-plain colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">HTML5</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-css3-plain colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">CSS3</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="tools">
          <div className="container-fluid description text-white pb-4">
            <h2>Tools</h2>
            <div className="row">
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-github-plain skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">Github</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-webpack-plain colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">webpack</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-amazonwebservices-original colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">AWS</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="fab fa-npm skillsImg p-2 text-info"></i>
                  <div className="card-body">
                    <h5 className="card-text">node</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-apache-line colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">Apache</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-babel-plain colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">Babel</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-visualstudio-plain colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">VSCode</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="fab fa-figma skillsImg text-danger p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">Figma</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-slack-plain colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">Slack</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-chrome-plain colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">ChromeDevTools</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <div className="p-3"><img src="images/meisterTask.png" alt="" className=" card-img-top meistertask" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-text">MeisterTask</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-docker-plain colored skillsImg p-2"></i>
                  <div className="card-body">
                    <h5 className="card-text">Docker</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact">
          <div className="contact container-fluid description">
            <h3>Vandana Khaparde</h3>
            <div className="d-flex flex-column">
              <p><i className="fas fa-map-marker-alt"></i> Irvine, CA</p>
              <p><i className="fas fa-phone"></i> 512-431-7979</p>
              <a href="mailto:vandana.khaparde@gmail.com" className="email"><i className="fas fa-envelope"></i>  vandana.khaparde@gmail.com</a>
            </div>
            <div className="d-flex justify-content-center ">
              <a className="m-2 allLinks" href="https://github.com/VKhaparde"><i className="fab fa-github px-2 py-2" ></i></a>
              <a className="m-2 allLinks" href="https://linkedin.com/in/VKhaparde"><i className="fab fa-linkedin px-2 py-2"></i></a>
              <a className="m-2 allLinks" href="images/Vandana_Resume.pdf"><i className="fas fa-file px-2 py-2"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;
