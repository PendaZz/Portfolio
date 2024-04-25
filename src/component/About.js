import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/About.css"
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import FacebookQR from "../img/FaceBookQR.png";
import Me from "../img/Avatar.jpg";

const About = () => {    

    const facebookAccessToken = process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN;
    const githubAccessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

    const [repos, setRepos] = useState([]);

    useEffect(() => {
    const fetchRepos = async () => {
        try {
            const response = await axios.get('https://graph.facebook.com/v19.0/me', {
                params: {
                    fields: 'id,name,email,location',
                    access_token: facebookAccessToken,
                }
            });
            setRepos(response.data);
        } catch (error) {
            console.error('Error fetching repos:', error);
        }
    };
    fetchRepos();
    }, []);


    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://api.github.com/user', {
                headers: {
                    Authorization: githubAccessToken
                }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div className='about-page'>
            <div className='about-container'>
                <div className="about-item two-row-one-col">
                    <div className="about-title">Photo</div>
                    <div className="content-container content1">
                        <hr className="divider" />
                        <img src={Me} className='Me' />
                    </div>
                </div>
                <div className="about-item two-row-two-col">
                    <div className="about-title">About Me</div>
                    <div className="content-container content2">
                        <hr className="divider" />
                        <div className="content" />
                        <div className='overlay o1' data-text="Responsible" />
                        <div className='overlay o2' data-text="Proactive" />
                        <div className='overlay o3' data-text="Good Team Worker" />
                        <div className='overlay o4' data-text="Willing to Learn" />
                        <div className='overlay o5' data-text="Hard Working" />
                        <div className='overlay o6' data-text="Adaptable" />
                        <div className='overlay o7' data-text="Optimism" />
                    </div>
                </div>
                <div className="about-item one-row-one-col right-top">
                    <div className="about-title">Where</div>
                    <div className="content-container content3">
                        <hr className="divider" />
                        {repos && repos.location && repos.location.name ? (<div className="content">{repos.location.name}</div>) : (<div>loading...</div>)}
                        <br /><br />
                    </div>
                </div>
                <div className="about-item one-row-one-col right-bottom">
                    <div className="about-title">Avatar</div>
                    <div className="content-container content4">
                        <hr className="divider" />
                        {user? (<img src={user.avatar_url} className='avatar' alt='Avatar'/>) : (<div>loading...</div>)}
                    </div>
                </div>
                <div className="about-item one-row-one-col">
                    <div className="about-title">Mail</div>
                    <div className="content-container content5">
                        <hr className="divider" />
                        <MdMailOutline size={70}/>
                        <br/>
                        {repos? (<a>{repos.email}</a>) : (<a>loading...</a>)}
                    </div>
                </div>
                <div className="about-item one-row-one-col">
                    <div className="about-title">GitHub</div>
                    <div className="content-container content6">
                        <hr className="divider" />
                        <FiGithub size={70}/>
                        <br />
                        {user? (<a href={user.html_url}>{user.html_url}</a>) : (<a>loading...</a>)}
                    </div>
                </div>
                <div className="about-item one-row-one-col">
                    <div className="about-title">FaceBook</div>
                    <div className="content-container content7">
                        <hr className="divider" />
                        <img src={FacebookQR} alt="FacebookQR" className='facebookQR'/>
                        <br />
                        {user? (<a>{user.name}</a>) : (<a>loading...</a>)}
                    </div>
                </div>
            </div>
        </div>
    )
    
};

export default About;