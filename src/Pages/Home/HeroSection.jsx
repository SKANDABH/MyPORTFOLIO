import {Link} from 'react-router-dom'
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Skanda B H</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Hey, I'm Skanda B H, a full stack developer skilled in C, Python, JavaScript, Node.js, ReactJS, and passionate about impactful tech solutions.
            
          </p>
        </div>
        <Link to="https://www.linkedin.com/in/skandabh/"><button className="btn btn-primary">Get In Touch</button></Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/Myimg.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
