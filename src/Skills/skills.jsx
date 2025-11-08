import { useState } from "react";
import "./skills.css";

export const Skills = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const Dropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="dropdown-buttons">
        <button
          className={`drop-btn ${openDropdown === "skills" ? "active" : ""}`}
          onClick={() => Dropdown("skills")}
        >
          Skills
        </button>

        <button
          className={`drop-btn ${openDropdown === "interest" ? "active" : ""}`}
          onClick={() => Dropdown("interest")}
        >
          Interest
        </button>
      </div>

      {/* --- Skills Dropdown --- */}
      {openDropdown === "skills" && (
        <div className="dropdown-card">
          <h2>Skills</h2>
          <div className="skills-content">
            <div>
              <h3>Technical Skills</h3>
              <ul>
                <li>Advanced knowledge on programming languages.</li>
                <li>B2 English Level.</li>
                <li>Knowledge on Power BI and data analysis.</li>
              </ul>
            </div>

            <div>
              <h3>Soft Skills</h3>
              <ul>
                <li>Teamwork</li>
                <li>Assertive communication</li>
                <li>Leadership</li>
                <li>Critical thinking</li>
                <li>Adaptability</li>
                <li>Problem solving</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* --- Interest Dropdown --- */}
      {openDropdown === "interest" && (
        <div className="dropdown-card">
          <h2>Interest</h2>
          <p className="interest-text">
            I have a deep passion for technology, business, and persuasive communication,
            with a particular focus on exploring opportunities where these fields intersect.
            I am especially interested in environments where the synergy between these areas
            can be harnessed to develop innovative solutions that have a lasting, meaningful
            impact on both businesses and society.
          </p>
        </div>
      )}
      <div className="projects">
        <div className="project-card">
          <div className="text">
            <h3>Trip Scout</h3>
            <p>
              A digital initiative dedicated to promoting tourism within El Salvador by showcasing the country's
              most stunning natural landscapes, vibrant culture, and hidden gems. This project aims to inspire both locals and
              international visitors to explore and appreciate the beauty, diversity, and richness that El Salvador has to offer,
              while supporting sustainable tourism and local communities.
            </p>
          </div>
          <img src="/TripScout.png" alt="Trip Scout" />
        </div>

        <div className="project-card">
          <div className="text">
            <h3>Study Up</h3>
            <p>
              An innovative educational initiative designed to empower students who strive to expand their knowledge and skills
              through continuous learning. This project aims to provide accessible, engaging, and high-quality educational resources
              that foster curiosity, critical thinking, and personal growth, helping learners reach their full potential and prepare
              for future academic and professional success.
            </p>
          </div>
          <img src="/image 6.png" alt="Study Up" />
        </div>

        <div className="project-card">
          <div className="text">
            <h3>YumFull</h3>
            <p>
              A project aimed at promoting and encouraging healthy eating habits among individuals seeking to transform their
              lifestyle into one that is more balanced and sustainable. It focuses on inspiring people to make mindful food
              choices,improve their overall well-being, and embrace a healthier way of living.
            </p>
          </div>
          <img src="/Yumfull.png" alt="YumFull" />
        </div>
      </div>


      <div className="certifications">
        <div className="certificate">
          <img src="/Excel-Cert.png" alt="Excel Certificate" />
          <p>Microsoft Excel Associate</p>
        </div>
        <div className="certificate">
          <img src="/Toeic-cert.png" alt="TOEIC Certificate" />
          <p>TOEIC English Test</p>
        </div>
        <div className="certificate">
          <img src="/Python-Cert.png" alt="Python Certificate" />
          <p>IT Specialist in Python</p>
        </div>
      </div>

    </section>
  );
};
