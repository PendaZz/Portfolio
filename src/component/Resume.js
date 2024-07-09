import React, { useState, useEffect } from 'react';
import '../css/Resume.css'
import axios from 'axios';
import { FaUser, FaAtlas, FaTools, FaBriefcase, FaFileAlt } from 'react-icons/fa';


/**
 * Renders the resume page.
 *
 * @return {JSX.Element} The JSX element representing the resume page.
 */
const Resume = () => {

    const githubAccessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

    const [user, setUser] = useState(null); // Initialise state to null

    useEffect(() => {
        const fetchUserData = async () => { // Define an async function to fetch data
            try {
                const response = await axios.get('https://api.github.com/user', {
                    headers: {
                        Authorization: githubAccessToken
                    }
                });
                setUser(response.data); // Set user data in state
            } catch (error) {
                console.error('Error fetching user data:', error); // Log error to console
            }
        };
        fetchUserData(); // Call the async function on component mount
    }, [githubAccessToken]);

    const SkillBar = ({ skill, level, color }) => {
        return (
            <div className="skill-bar">
                <div className="skill-info">
                    <span className="skill-name">{skill}</span>
                    <span className="skill-level">{level}%</span>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${level / 100 * 700}px`, backgroundColor: color }}></div>
                </div>
          </div>
        );
    };

    return (
        <div className="resume-page">
            <div className="sidebar">
                    <ul>
                        <li><a href='#about-me'><FaUser title="About Me" /></a></li>
                        <li><a href='#skills'><FaTools title="Skills" /></a></li>
                        <li><a href='#qualifications'><FaAtlas title="Qualifications" /></a></li>
                        <li><a href='#career-history'><FaBriefcase title="Career History" /></a></li>
                        <li><a href='#publications'><FaFileAlt title="Publications/Notable Outputs" /></a></li>
                    </ul>
                </div>
                <div className="resume-content" id='about-me'>
                    <div className='Overview'>
                        <h3>About Me</h3>
                        <p>Hello! My name is {user ? (user.name) : ("Please provide your Github token in .env")}, I am male and I am studying QUT Master of IT. My desired job position is software development. <br />
                            I have more experience in Java and Javascript programming, have a solid grasp of basic computer knowledge, and can complete my tasks well at work. In addition,
                            I have a passionate work attitude and strong teamwork capabilities. I also have the ability to develop independently and am good at identifying and solving problems.
                            I have strong execution ability, high sense of responsibility, strong sense of collective honor, dare to take on responsibilities, and can accept arrangements such as overtime work or business trips.<br />
                            Looking forward to contacting you!</p>
                    </div>
                    <div className='basicInfo'>
                        <h3>Basic Info</h3>
                        <div className='info'>
                            <p><b>Name:</b></p><p>{user ? (user.name) : ("Please provide your Github token in .env")}</p>
                        </div>
                        <div className='info'>
                            <p><b>Gender:</b></p><p>Male</p>
                        </div>
                        <div className='info'>
                            <p><b>Age:</b></p><p>24</p>
                        </div>
                        <div className='info'>
                            <p><b>Phone:</b></p><p>0421151337</p>
                        </div>
                        <div className='info'>
                            <p><b>Email:</b></p><p>littlexiongmao@gmail.com</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="resume-content" id='skills'>
                    <div>
                        <h3>Skills</h3>
                        <SkillBar skill="Java" level={80} color="#ff9800" />
                        <SkillBar skill="Python" level={70} color="#4caf50" />
                        <SkillBar skill="SQL" level={75} color="#9c27b0" />
                        <SkillBar skill="JavaScript" level={75} color="#f44336" />
                    </div>
                    <div className='skill-description'>
                        <h3>Skill description</h3>
                        <ul>
                            <li>Good basic knowledge of programming such as operating systems and computer networks.</li>
                            <li>Proficient in Java basics.</li>
                            <li>Familiar with basic frameworks such as JavaIO, multi-threading, and collections.</li>
                            <li>Understand the design and application of distributed systems.</li>
                            <li>Familiar with writing SQL statements.</li>
                            <li>Familiar with basic Linux command operations.</li>
                            <li>Familiar with HTML, CSS, JavaScript and corresponding front-end knowledge.</li>
                            <li>Familiar with React, React Native front-end framework.</li>
                        </ul>
                    </div>
                </div>
                <br />
                <div class="career-content" id="qualifications">
                    <h3>Qualifications</h3>
                    <div class="qualification">
                        <div class="left">
                            <h4>Bachelor's Degree</h4>
                        </div>
                        <div class="right">
                            <p>University: Queensland University</p>
                            <p>Major: Information Technology, Software Engineering</p>
                            <p>Duration: February 2019 - June 2022</p>
                        </div>
                    </div>
                    <div class="qualification">
                        <div class="left">
                            <h4>Master's Degree (Ongoing)</h4>
                        </div>
                        <div class="right">
                            <p>University: Queensland University of Technology</p>
                            <p>Major: Information Technology, Software Development</p>
                            <p>Expected Graduation: November 2024</p>
                        </div>
                    </div>
                </div>
                <br />
                <div class="career-content" id="career-history">
                    <h3 className='title'>Career History</h3>
                    <div className='career-type'>
                        <div class="full-time">
                            <h4>Full-time Employment</h4>
                            <p>No relevant work experience yet</p>
                        </div>        
                        <div class="part-time">
                            <ul>
                                <h4>Part-time Employment</h4>
                                <li><h5>Warehouse Administrator</h5></li>
                                <p>EWE Global Express</p>
                                <p>July 2022 - December 2022</p>
                                <p>Responsibilities: Manage warehouse operations</p>
                            
                                <li><h5>Warehouse Driver</h5></li>
                                <p>CHILANDS</p>
                                <p>December 2022 - November 2023</p>
                                <p>Responsibilities: Drive for warehouse operations</p>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <br />
                <div className="career-content" id='publications'>
                    <h3>Publications/Notable Outputs</h3>
                    <p>This is the publications/notable outputs section.</p>
                </div>
                
        </div>
    );
};

export default Resume;
