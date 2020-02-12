import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
          <div className="navbar-header">
            <a className="navbar-brand myName" href="#">VK</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <a className="nav-link" href="#about">About Me</a>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <a className="nav-link" href="#applications">Applications</a>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <a className="nav-link" href="#tools">Tools</a>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="home">
          <div className="">
            <p className="displayName">Vandana Khaparde</p>
            {/* <marquee behavior="alternate" direction="right"> */}
            <p className="designation">Full Stack Web Developer</p>
            {/* </marquee> */}
          </div>
        </div>
        <div id="about">
          <div className="container-fluid description">
            <div className="row">
              <div className="col-md-5 mt-5 pt-4">
                <div className="d-flex flex-column align-items-center">
                  <img src="images/van.jpg" alt="image" className="imgstyle" />
                  <div className="d-flex justify-content-center">
                    <a className="m-2 allLinks" href="https://github.com/VKhaparde" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github px-2 py-2" ></i></a>
                    <a className="m-2 allLinks" href="https://linkedin.com/in/VKhaparde" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin px-2 py-2"></i></a>
                    <a className="m-2 allLinks" href="tel:+1-512-431-7979" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-phone-square-alt px-2 py-2"></i></a>
                    <a className="m-2 allLinks" href="mailto:vandana.khaparde@gmail.com" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-envelope-square px-2 py-2"></i></a>
                    <a className="m-2 allLinks" href="images/Vandana_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-file px-2 py-2"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 d-flex flex-column justify-content-start px-4">
                <h3>About Me</h3>
                <p>I&apos;m Vandana Khaparde. I am a web developer who has a passion for coding, mathematics and technology.</p>
                <p>After my graduation in Computer Science, I&apos;ve worked for Infosys as a Software Engineer for few years
                in India. I have worked as a developer in a team for developing a banking application and also worked
                as part of testing team for few years.I moved to United States in 2010. Then I took a break for some years to take care of my kids and family.
                My passion for coding was still alive and I was learning some courses like Selenium, Appium
                    online.</p>
                <p>
                  When I decided to get back to work, I joined Learning Fuze, where I learned languages
                  like JavaScript (ES5 & ES6), React, jQuery, Node.js, PHP, HTML, and CSS. I also became
                  familiar with tools like Git/GitHub, Postman, npm, and Webpack. Lastly, I participated in team-based
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
            <h2 className="text-center pt-5">Applications</h2>
            <div className="card-deck mt-3 pb-5">
              <div className="card projects">
                <div className="card-header">
                  <a href="https://ninja-match.vandanakhaparde.com" target="_blank" rel="noopener noreferrer">
                    <h3 className="text-dark">Ninja Match</h3></a>
                </div>
                <a href="https://ninja-match.vandanakhaparde.com" target="_blank" rel="noopener noreferrer">
                  <img className="card-img-top imgSize" src="images/lego-ninja.jpeg" alt="Card image cap" /></a>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                    Ninja Match is a memory match game.User gets 16 attempts to match the ninja and win the game.
                  </p>
                  <p>Developed using JavaScript, jQuery, HTML and CSS.</p>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-center">
                    <a className="m-2 appLinks" href="https://github.com/VKhaparde/ninja-match" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>Github
                    </a>
                    <a className="m-2 appLinks" href="https://ninja-match.vandanakhaparde.com" target="_blank" rel="noopener noreferrer">
                      <i className="far fa-window-restore"></i>Live
                    </a>
                  </div>
                </div>
              </div>
              <div className="card projects">
                <div className="card-header">
                  <a href="https://kitchen-shop.vandanakhaparde.com" target="_blank" rel="noopener noreferrer">
                    <h3 className="text-dark">Kitchen Shop</h3></a>
                </div>
                <a href="https://kitchen-shop.vandanakhaparde.com" target="_blank" rel="noopener noreferrer">
                  <img className="card-img-top imgSize" src="images/kitchen.png" alt="Card image cap" /> </a>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                    Kitchen Shop is a full stack web application where user can shop for small kitchen appliances.
                  </p>
                  <p>Developed using React.js, PHP, MySQL, HTML and CSS.</p>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-center">
                    <a className="m-2 appLinks" href="https://github.com/VKhaparde/kitchen-shop" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> Github
                    </a>
                    <a className="m-2 appLinks" href="https://kitchen-shop.vandanakhaparde.com" target="_blank" rel="noopener noreferrer">
                      <i className="far fa-window-restore"></i> Live
                    </a>
                  </div>
                </div>
              </div>
              <div className="card projects">
                <div className="card-header">
                  <a href="https://local-sports.vandanakhaparde.com" target="_blank" rel="noopener noreferrer">
                    <h3 className="text-dark">Local Sports</h3></a>
                </div>
                <a href="https://local-sports.vandanakhaparde.com" target="_blank" rel="noopener noreferrer">
                  <img className="card-img-top imgSize" src="images/local-sports.jpg" alt="Card image cap"/> </a>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                    Local Sports is a full stack web application which allows the user to find pick up sports of their choice.
                  </p>
                  <p>Developed using React.js, PHP, MySQL, HTML and CSS.</p>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-center">
                    <a className="m-2 appLinks" href="https://github.com/VKhaparde/local-sports" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> Github
                    </a>
                    <a className="m-2 appLinks" href="https://local-sports.vandanakhaparde.com" target="_blank" rel="noopener noreferrer">
                      <i className="far fa-window-restore"></i> Live
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div id="skills">
          <div className="skills container-fluid description text-white pb-4">
            <h2 className="pt-5">Skills</h2>
            <div className="row">
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card tech bg-light text-dark m-2" >
                  <i className="devicon-react-original colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">React.js</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card tech bg-light text-dark m-2" >
                  <i className="devicon-javascript-plain colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">JavaScript</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-jquery-plain-wordmark colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">jQuery</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-php-plain colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">PHP</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-mysql-plain colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">MySQL</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-bootstrap-plain colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">Bootstrap</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-html5-plain colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">HTML5</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-css3-plain colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">CSS3</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="tools">
          <div className="container-fluid description text-white pb-4">
            <h2 className="pt-5">Tools</h2>
            <div className="row">
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-github-plain skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">Github</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-webpack-plain colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">webpack</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-amazonwebservices-original colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">AWS</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="fab fa-npm skillsImg p-3 text-info"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">node</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-apache-line colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">Apache</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-babel-plain colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">Babel</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-visualstudio-plain colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">VSCode</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="fab fa-figma skillsImg text-danger p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">Figma</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-slack-plain colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">Slack</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-chrome-plain colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">Chrome DevTools</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="fas fa-check-circle skillsImg p-3 text-primary"></i>
                  {/* <div className="p-3"><img src="images/meisterTask.png" alt="" className=" card-img-top meistertask" />
                  </div> */}
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">MeisterTask</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="card bg-light text-dark m-2" >
                  <i className="devicon-docker-plain colored skillsImg p-3"></i>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-text">Docker</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact">
          <div className="container-fluid description">
            <h3>Vandana Khaparde</h3>
            <div className="d-flex flex-column">
              <div className="p-1"><i className="fas fa-map-marker-alt"></i> Irvine, CA</div>
              <div className="p-1"><a href="tel:+1-512-431-7979" className="email">
                <i className="fas fa-phone-alt"></i> 512-431-7979 </a>
              {/* <p><i className="fas fa-phone-alt"></i> 512-431-7979</p> */}
              </div>
              <div className="p-1"><a href="mailto:vandana.khaparde@gmail.com" className="email" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>  vandana.khaparde@gmail.com</a> </div>
            </div>
            <div className="d-flex justify-content-center ">
              <a className="m-2 allLinks" href="https://github.com/VKhaparde" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github px-2 py-2"></i></a>
              <a className="m-2 allLinks" href="https://linkedin.com/in/VKhaparde" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin px-2 py-2"></i></a>
              <a className="m-2 allLinks" href="images/Vandana_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file px-2 py-2"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;
