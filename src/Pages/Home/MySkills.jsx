import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaPython, FaGit,
  FaDatabase, FaServer, FaEnvelope, FaMobile
} from 'react-icons/fa';
import './MySkills.css'; // Import your CSS file for styling

const MySkills = () => {
  return (
    <section id="MySkills" className="skills--section">
      <div className="skills--content" >
        <h2 >My Skills</h2>
        <p className="skills--description">
          
        </p>
      </div>
      <div className="skills--list">
        <div className="skills--icon">
          <FaHtml5 className="icon html" title="HTML5" />
          <span className="icon-label">HTML5</span>
        </div>
        <div className="skills--icon">
          <FaCss3Alt className="icon css" title="CSS3" />
          <span className="icon-label">CSS3</span>
        </div>
        <div className="skills--icon">
          <FaJs className="icon js" title="JavaScript" />
          <span className="icon-label">JavaScript</span>
        </div>
        <div className="skills--icon">
          <FaNodeJs className="icon nodejs" title="Node.js" />
          <span className="icon-label">Node.js</span>
        </div>
        <div className="skills--icon">
          <FaReact className="icon react" title="React.js" />
          <span className="icon-label">React.js</span>
        </div>
        <div className="skills--icon">
          <FaPython className="icon python" title="Python" />
          <span className="icon-label">Python</span>
        </div>
        <div className="skills--icon">
          <FaGit className="icon git" title="Git" />
          <span className="icon-label">Git</span>
        </div>
        <div className="skills--icon">
          <FaDatabase className="icon database" title="Database" />
          <span className="icon-label">Database</span>
        </div>
        <div className="skills--icon">
          <FaServer className="icon server" title="Server Management" />
          <span className="icon-label">Server Management</span>
        </div>
        <div className="skills--icon">
          <FaEnvelope className="icon email" title="Email Management" />
          <span className="icon-label">Email Management</span>
        </div>
        {/* <div className="skills--icon">
          <FaMobile className="icon mobile" title="Mobile Development" />
          <span className="icon-label">Mobile Development</span>
        </div> */}
      </div>
    </section>
  );
};

export default MySkills;
